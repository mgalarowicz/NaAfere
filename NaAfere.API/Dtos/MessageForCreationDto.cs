using System;

namespace NaAfere.API.Dtos
{
    public class MessageForCreationDto
    {
        public int SenderId { get; set; }
        public int RecipientId { get; set; }
        public DateTime SendDate { get; set; }
        public string Content { get; set; }

        public MessageForCreationDto()
        {
            SendDate = DateTime.Now;
        }
    }
}