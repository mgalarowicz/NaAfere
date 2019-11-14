using System.Collections.Generic;
using System.Threading.Tasks;
using NaAfere.API.Helpers;
using NaAfere.API.Models;

namespace NaAfere.API.Repositories
{
    public interface IUserRepository : INaAfereRepository<User>
    {
        Task<PagedList<User>> GetUsers(UserParams userParams);
        Task<User> GetUserById(int id);
    }
}
