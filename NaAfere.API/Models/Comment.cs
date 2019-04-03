using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace NaAfere.API.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string Content { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime SendDate { get; set; }
        public int PostId { get; set; }
        public Post Post { get; set; }
        public int? SenderId { get; set; }
        public User Sender { get; set; }
    }
}