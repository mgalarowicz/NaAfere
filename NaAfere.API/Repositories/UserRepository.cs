using System;
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
                .Include(p => p.Photo).AsQueryable();

            users = users.Where(u => (u.Id != userParams.UserId) && (u.City == userParams.City));

            //users = users.Where(u => u.City == userParams.City);

            if (userParams.MinAge != 10 || userParams.MaxAge != 99)
            {
                var minDob = DateTime.Today.AddYears(-userParams.MaxAge - 1); 
                var maxDob = DateTime.Today.AddYears(-userParams.MinAge); 
            
                users = users.Where(u => (u.DateOfBirth >= minDob) && (u.DateOfBirth <= maxDob));
            }


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
