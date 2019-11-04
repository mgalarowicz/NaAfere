using System.Collections.Generic;
using System.Threading.Tasks;
using NaAfere.API.Models;

namespace NaAfere.API.Repositories
{
    public interface ILocationRepository : INaAfereRepository<Location>
    {
        Task<IEnumerable<Location>> GetLocations();
        Task<Location> GetLocationById(int id);
    }
}
