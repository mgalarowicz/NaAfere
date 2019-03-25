using System;

namespace NaAfere.API.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public string Subject { get; set; }
        public int TeamId { get; set; }
        public Team Team { get; set; }
    }
}