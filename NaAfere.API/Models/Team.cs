using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace NaAfere.API.Models
{
    public class Team
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Website { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime CreateDate { get; set; }
        public ICollection<Post> Posts { get; set; }
        public ICollection<UserTeam> UserTeams { get; set; }
        public ICollection<Event> Events { get; set; }
        public Photo Photo { get; set; }
        public ICollection<Game> Games { get; set; }
    }
}