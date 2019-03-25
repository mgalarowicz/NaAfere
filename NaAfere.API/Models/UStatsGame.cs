namespace NaAfere.API.Models
{
    public class UStatsGame
    {
        public int Id { get; set; }
        public int UStatsId { get; set; }
        public UStats UStats { get; set; }
        public int GameId { get; set; }
        public Game Game { get; set; }
    }
}