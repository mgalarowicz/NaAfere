namespace NaAfere.API.Models
{
    public class UStatGame
    {
        public int UStatsId { get; set; }
        public UStat UStat { get; set; }
        public int GameId { get; set; }
        public Game Game { get; set; }
    }
}