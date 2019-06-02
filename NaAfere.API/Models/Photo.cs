using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace NaAfere.API.Models
{
    public class Photo
    {
        public enum PhotoType
        {
            Team,
            User,
            Location
        }

        public int Id { get; set; }
        public string Url { get; set; }
        public int PublicId { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime SendDate { get; set; }
        public PhotoType Type { get; set; }
        public User User {get; set;}
        public int? UserId {get; set;}
        public Team Team {get; set;}
        public int? TeamId {get; set;}
        public Location Location {get; set;}
        public int? LocationId {get; set;}
    }
}