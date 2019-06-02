using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace NaAfere.API.Models
{
    public class UserGame
    {
        public bool IsHost { get; set; }
        public bool OnWaitlist { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime JoinTime { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int GameId { get; set; }
        public Game Game { get; set; }
    }
}