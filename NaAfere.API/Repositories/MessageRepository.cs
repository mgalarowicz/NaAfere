using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NaAfere.API.Data;
using NaAfere.API.Helpers;
using NaAfere.API.Models;

namespace NaAfere.API.Repositories
{
    public class MessageRepository : NaAfereRepository<Message>, IMessageRepository
    {
        public MessageRepository(DataContext context) : base(context)
        {
        }

        public async Task<Message> GetMessage(int id)
        {
            return await FindByCondition(m => m.Id.Equals(id))
                .SingleAsync();
        }

        public async Task<PagedList<Message>> GetMessagesForUser(MessageParams messageParams)
        {
            var messages = FindAll()
                .Include(u => u.Sender).ThenInclude(p => p.Photo)
                .Include(u => u.Recipient).ThenInclude(p => p.Photo)
                .AsQueryable();

            switch (messageParams.MessageContainer)
            {
                case "Inbox":
                    messages = messages.Where(u => u.RecipientId == messageParams.UserId);
                    break;
                case "Outbox":
                    messages = messages.Where(u => u.SenderId == messageParams.UserId);
                    break;
                default:
                    messages = messages.Where(u => u.RecipientId == messageParams.UserId && u.IsRead == false);
                    break;
            }

            messages = messages.OrderByDescending(d => d.SendDate);
            return await PagedList<Message>.CreateAsync(messages, messageParams.PageNumber, messageParams.PageSize);

        }

        public Task<IEnumerable<Message>> GetMessageThread(int userId, int recipientId)
        {
            throw new NotImplementedException();
        }
    }
}