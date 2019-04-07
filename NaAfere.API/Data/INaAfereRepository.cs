using System.Collections.Generic;
using System.Threading.Tasks;
using NaAfere.API.Models;

namespace NaAfere.API.Data
{
    public interface INaAfereRepository
    {
         void Add<T>(T entity) where T: class;

         void Delete<T>(T entity) where T: class;

         Task<bool> SaveAll();

         Task<IEnumerable<User>> GetUsers();

         Task<User> GetUser(int id);
    }
}