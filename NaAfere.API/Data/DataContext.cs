using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using NaAfere.API.Models;

namespace NaAfere.API.Data
{
    public class DataContext : IdentityDbContext<User, Role, int, 
        IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>, 
        IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}

        public DbSet<Team> Teams {get; set;}
        public DbSet<Location> Locations {get; set;}
        public DbSet<Discipline> Disciplines {get; set;}
        public DbSet<Message> Messages {get; set;}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Discipline>()
                .HasIndex(n => n.Name)
                .IsUnique();

            builder.Entity<Location>()
                .HasIndex(n => n.Name)
                .IsUnique();

            builder.Entity<Team>()
                .HasIndex(n => n.Name)
                .IsUnique();

            builder.Entity<Game>()
                .Property(e => e.Difficulty)
                .HasConversion<string>();

            builder.Entity<Post>()
                .Property(e => e.Type)
                .HasConversion<string>();

             builder.Entity<Photo>()
                .Property(e => e.Type)
                .HasConversion<string>(); 

            builder.Entity<Message>(message => {

                message.HasOne(u => u.Sender)
                .WithMany(m => m.MessageSent)
                .HasForeignKey(u => u.SenderId)
                .OnDelete(DeleteBehavior.ClientSetNull);
            
                message.HasOne(u => u.Recipient)
                .WithMany(m => m.MessageReceived)
                .HasForeignKey(u => u.RecipientId)
                .OnDelete(DeleteBehavior.ClientSetNull);
            });

             builder.Entity<Friendship>(friendship => {

                friendship.HasOne(u => u.User)
                .WithMany(m => m.FriendshipPropSent)
                .OnDelete(DeleteBehavior.ClientSetNull);
            
                friendship.HasOne(u => u.Friend)
                .WithMany(m => m.FriendshipPropReceived)
                .OnDelete(DeleteBehavior.ClientSetNull);

                friendship.Property(e => e.Status)
                .HasConversion<string>();
            });
                

            builder.Entity<UserGame>(userGame =>
            {
                userGame.HasKey(ug => new {ug.UserId, ug.GameId});

                userGame.HasOne(ug => ug.User)
                    .WithMany(u => u.UserGames)
                    .HasForeignKey(ug => ug.UserId)
                    .IsRequired();

                userGame.HasOne(ug => ug.Game)
                    .WithMany(g => g.UserGames)
                    .HasForeignKey(ug => ug.GameId)
                    .IsRequired();
            });

             builder.Entity<UserRole>(userRole => 
            {
                userRole.HasKey(ur => new {ur.UserId, ur.RoleId});

                userRole.HasOne(ur => ur.Role)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.RoleId)
                    .IsRequired();
                
                userRole.HasOne(ur => ur.User)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.UserId)
                    .IsRequired();
            });

            builder.Entity<UserTeam>(userTeam =>
            {
                userTeam.HasKey(ut => new {ut.UserId, ut.TeamId});

                userTeam.HasOne(ut => ut.User)
                    .WithMany(u => u.UserTeams)
                    .HasForeignKey(ut => ut.UserId)
                    .IsRequired();

                userTeam.HasOne(ut => ut.Team)
                    .WithMany(t => t.UserTeams)
                    .HasForeignKey(ut => ut.TeamId)
                    .IsRequired();
            });

            builder.Entity<UStatGame>(ustatGame =>
            {
                ustatGame.HasKey(ug => new {ug.UStatsId, ug.GameId});

                ustatGame.HasOne(ug => ug.UStat)
                    .WithMany(u => u.UStatGames)
                    .HasForeignKey(ug => ug.UStatsId)
                    .IsRequired();

                ustatGame.HasOne(ug => ug.Game)
                    .WithMany(g => g.UStatGames)
                    .HasForeignKey(ug => ug.GameId)
                    .IsRequired();
            });  

        }
    }
}