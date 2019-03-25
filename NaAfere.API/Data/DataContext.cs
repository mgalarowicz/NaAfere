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

        // public DbSet<Photo> Photos {get; set;}
        public DbSet<Team> Teams {get; set;}
        public DbSet<UStats> UStats {get; set;}
        // public DbSet<Message> Messages {get; set;}
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<UserTeam>(userTeam =>
            {
                userTeam.HasKey(ut => new {ut.UserId, ut.TeamId});

                userTeam.HasOne(ut => ut.User)
                    .WithMany(u => u.UserTeams)
                    .HasForeignKey(ut => ut.UserId);

                userTeam.HasOne(ut => ut.Team)
                    .WithMany(t => t.UserTeams)
                    .HasForeignKey(ut => ut.TeamId);
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

            //  builder.Entity<Message>()
            //     .HasOne(u => u.Sender)
            //     .WithMany(m => m.MessagesSent)
            //     .OnDelete(DeleteBehavior.Restrict);

            // builder.Entity<Message>()
            //     .HasOne(u => u.Recipient)
            //     .WithMany(m => m.MessagesReceived)
            //     .OnDelete(DeleteBehavior.Restrict);

            // builder.Entity<Photo>().HasQueryFilter(p => p.IsApproved);
        }
    }
}