using System.Collections.Generic;

namespace NaAfere.API.Models
{
    public class UStats
    {
        public int Id { get; set; }
        public int FootballGames { get; set; }
        public int BasketballGames { get; set; }
        public int VolleyballGames { get; set; }
        public int HockeyGames { get; set; }
        public int HandballGames { get; set; }
        public int Absences { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public ICollection<UStatsGame> UStatsGames { get; set; }
    }
}