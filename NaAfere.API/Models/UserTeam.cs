using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace NaAfere.API.Models
{
    public class UserTeam
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime JoinDate { get; set; }
        public bool isHost { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int TeamId { get; set; }
        public Team Team { get; set; }

    }
}