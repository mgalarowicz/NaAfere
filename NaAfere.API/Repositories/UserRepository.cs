using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NaAfere.API.Data;
using NaAfere.API.Helpers;
using NaAfere.API.Models;

namespace NaAfere.API.Repositories
{
    public class UserRepository : NaAfereRepository<User>, IUserRepository
    {

        public UserRepository(DataContext context) : base(context)
        {
        }

        public async Task<PagedList<User>> GetUsers(UserParams userParams)
        {
            var users = FindAll()
                .OrderBy(u => u.LastName)
                .Include(p => p.Photo);

            return await PagedList<User>.CreateAsync(users, userParams.PageNumber, userParams.PageSize);
        }

        public async Task<User> GetUserById(int id)
        {
            return await FindByCondition(user => user.Id.Equals(id))
                .Include(p => p.Photo)
                .SingleAsync();
        }
    }
}
