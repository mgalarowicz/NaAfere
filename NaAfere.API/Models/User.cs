using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace NaAfere.API.Models
{
    public class User : IdentityUser<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public DateTime LastActive { get; set; }      
        public ICollection<Message> MessageSent { get; set; }
        public ICollection<Message> MessageReceived { get; set; }
        public ICollection<Friendship> FriendshipPropSent { get; set; }
        public ICollection<Message> FriendshipPropReceived { get; set; }
        public ICollection<Comment> CommentsSent { get; set; }
        public ICollection<Post> PostsSent { get; set; }
        public ICollection<UserTeam> UserTeams { get; set; }
        public Photo Photo { get; set; }
        public ICollection<UserGame> UserGames { get; set; }
        public UStats UStats { get; set; }
        public ICollection<UserRole> UserRoles {get; set;}
    }
}