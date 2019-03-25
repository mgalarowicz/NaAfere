using System;

namespace NaAfere.API.Models
{
    public class UserGame
    {
        public int Id { get; set; }
        public bool IsHost { get; set; }
        public DateTime JoinTime { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int GameId { get; set; }
        public Game Game { get; set; }
    }
}