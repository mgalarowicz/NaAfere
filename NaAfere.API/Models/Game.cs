using System;
using System.Collections.Generic;

namespace NaAfere.API.Models
{
    public class Game
    {
        public enum GameDifficulty
        {
            Begginer,
            Intermediate,
            Advanced,
            Pro
        }
        public int Id { get; set; }
        public string Description { get; set; }
        public int MaxNumbOfPlayers { get; set; }
        public int MinNumbOfPlayers { get; set; }
        public DateTime GameDate { get; set; }
        public DateTime CreateDate { get; set; }
        public bool Played { get; set; }
        public bool Ball { get; set; }
        public bool Shirts { get; set; }
        public bool Paid { get; set; }
        public bool Indoor { get; set; }
        public double Duration { get; set; }
        public decimal PriceMax { get; set; }
        public decimal PriceMin { get; set; }
        public GameDifficulty Difficulty { get; set; }
        public Discipline Discipline { get; set; }
        public int DisciplineId { get; set; }
        public Location Location { get; set; }
        public int LocationId { get; set; }
        public Team Team { get; set; }
        public int TeamId { get; set; }
        public ICollection<UStatsGame> UStatsGames { get; set; }
        public ICollection<UserGame> UserGames { get; set; }
        public ICollection<Post> Posts { get; set; }
    }
}