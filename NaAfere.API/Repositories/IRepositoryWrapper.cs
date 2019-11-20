using System.Threading.Tasks;

namespace NaAfere.API.Repositories
{
    public interface IRepositoryWrapper
    {
        IUserRepository User { get; }
        ILocationRepository Location { get; }
        IMessageRepository Message { get; }
        Task<bool> SaveAll();

    }
}
