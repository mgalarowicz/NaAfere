using System.Collections.Generic;
using System.Threading.Tasks;
using NaAfere.API.Helpers;
using NaAfere.API.Models;

namespace NaAfere.API.Repositories
{
    public interface IMessageRepository : INaAfereRepository<Message>
    {
        Task<PagedList<Message>> GetMessagesForUser(MessageParams messageParams);
        Task<Message> GetMessage(int id);
        Task<IEnumerable<Message>> GetMessageThread(int userId, int recipientId);
    }
}