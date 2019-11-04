using System.Collections.Generic;
using System.Threading.Tasks;
using NaAfere.API.Models;

namespace NaAfere.API.Repositories
{
    public interface IUserRepository : INaAfereRepository<User>
    {
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUserById(int id);
    }
}
