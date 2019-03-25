using System;
using System.Collections.Generic;

namespace NaAfere.API.Models
{
    public class Team
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime CreateDate { get; set; }
        public ICollection<Post> Posts { get; set; }
        public ICollection<UserTeam> UserTeams { get; set; }
        public ICollection<Event> Events { get; set; }
        public Photo Photo { get; set; }
        public ICollection<Game> Games { get; set; }
    }
}