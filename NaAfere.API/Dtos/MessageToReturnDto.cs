using System;

namespace NaAfere.API.Dtos
{
    public class MessageToReturnDto
    {
        public int Id { get; set; }
        public bool IsRead { get; set; }
        public string Content { get; set; }
        public DateTime? ReadDate { get; set; }
        public DateTime SendDate { get; set; }
        public int? SenderId { get; set; }
        public string SenderFirstName { get; set; }
        public string SenderPhotoUrl { get; set; }
        public int? RecipientId { get; set; }
        public string RecipientFirstName { get; set; }
        public string RecipientPhotoUrl { get; set; }
    }
}