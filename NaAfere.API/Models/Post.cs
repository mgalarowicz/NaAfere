using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace NaAfere.API.Models
{
    public class Post
    {
        public enum PostType
        {
            Team,
            Public,
            Game
        }
        public int Id { get; set; }
        public string Content { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime SendDate { get; set; }
        public PostType Type { get; set; }
        public int? SenderId { get; set; }
        public User Sender { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public int? TeamId { get; set; }
        public Team Team { get; set; }
        public int? GameId { get; set; }
        public Game Game { get; set; }

    }
}