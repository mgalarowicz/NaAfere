using System.Threading.Tasks;
using NaAfere.API.Models;

namespace NaAfere.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);
         Task<User> Login(string email, string password);
         Task<bool> EmailExists(string email);
    }
}