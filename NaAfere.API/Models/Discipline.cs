using System.Collections.Generic;

namespace NaAfere.API.Models
{
    public class Discipline
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Game> Games { get; set; }
    }
}