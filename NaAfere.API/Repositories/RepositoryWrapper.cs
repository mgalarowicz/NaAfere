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
        private IMessageRepository _message;
        private readonly DataContext _context;

        public RepositoryWrapper(DataContext context)
        {
            _context = context;
        }

        public IUserRepository User => _user ?? (_user = new UserRepository(_context));

        public ILocationRepository Location => _location ?? (_location = new LocationRepository(_context));

        public IMessageRepository Message => _message ?? (_message = new MessageRepository(_context));

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
