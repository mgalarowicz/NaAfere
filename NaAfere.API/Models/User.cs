using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
using NaAfere.API.Helpers;

namespace NaAfere.API.Models
{
    public class User : IdentityUser<int>, IEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public DateTime LastActive { get; set; } 

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]     
        public DateTime CreateDate { get; set; }

        // [InverseProperty("Sender")]      
        public ICollection<Message> MessageSent { get; set; }

        // [InverseProperty("Recipient")]    
        public ICollection<Message> MessageReceived { get; set; }

        // [InverseProperty("UserF")]    
        public ICollection<Friendship> FriendshipPropSent { get; set; }

        // [InverseProperty("Friend")]    
        public ICollection<Friendship> FriendshipPropReceived { get; set; }
        public ICollection<Comment> CommentsSent { get; set; }
        public ICollection<Post> PostsSent { get; set; }
        public ICollection<UserTeam> UserTeams { get; set; }
        public Photo Photo { get; set; }
        public ICollection<UserGame> UserGames { get; set; }
        public UStat UStat { get; set; }
        public ICollection<UserRole> UserRoles {get; set;}
    }
}