using System;

namespace NaAfere.API.Dtos
{
    public class UStatForDetailedDto
    {
        public int Id { get; set; }
        public int FootballGames { get; set; }
        public int BasketballGames { get; set; }
        public int VolleyballGames { get; set; }
        public int HockeyGames { get; set; }
        public int HandballGames { get; set; }
        public int Absences { get; set; }
    }
}