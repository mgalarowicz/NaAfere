using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NaAfere.API.Data;
using NaAfere.API.Models;

namespace NaAfere.API.Repositories
{
    public class UserRepository : NaAfereRepository<User>, IUserRepository
    {

        public UserRepository(DataContext context) : base(context)
        {
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            return await FindAll()
                .OrderBy(u => u.LastName)
                .Include(p => p.Photo)
                .ToListAsync();
        }

        public async Task<User> GetUserById(int id)
        {
            return await FindByCondition(user => user.Id.Equals(id))
                .Include(p => p.Photo)
                .SingleAsync();
        }
    }
}
