using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace NaAfere.API.Models
{
    public class Message
    {
        public int Id { get; set; }
        public bool IsRead { get; set; }
        public string Content { get; set; }
        public DateTime? ReadDate { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime SendDate { get; set; }
        public bool SenderDeleted { get; set; }
        public bool RecipientDeleted { get; set; }
        public int? SenderId { get; set; }
        public User Sender { get; set; }
        public int? RecipientId { get; set; }
        public User Recipient { get; set; }

    }
}