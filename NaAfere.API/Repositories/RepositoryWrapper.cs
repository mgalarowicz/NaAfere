using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NaAfere.API.Data;

namespace NaAfere.API.Repositories
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private IUserRepository _user;
        private ILocationRepository _location;
        private readonly DataContext _context;

        public RepositoryWrapper(DataContext context)
        {
            _context = context;
        }

        public IUserRepository User => _user ?? (_user = new UserRepository(_context));

        public ILocationRepository Location => _location ?? (_location = new LocationRepository(_context));

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
