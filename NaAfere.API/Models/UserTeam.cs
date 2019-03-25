using System;

namespace NaAfere.API.Models
{
    public class UserTeam
    {
        public int Id { get; set; }
        public DateTime JoinDate { get; set; }
        public bool isHost { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int TeamId { get; set; }
        public Team Team { get; set; }

    }
}