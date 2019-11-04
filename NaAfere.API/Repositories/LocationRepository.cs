using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NaAfere.API.Data;
using NaAfere.API.Models;

namespace NaAfere.API.Repositories
{
    public class LocationRepository : NaAfereRepository<Location>, ILocationRepository
    {
        public LocationRepository(DataContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Location>> GetLocations()
        {
            return await FindAll()
                .OrderBy(l => l.Id)
                .Include(p => p.Photo)
                .ToListAsync();
        }

        public async Task<Location> GetLocationById(int id)
        {
            return await FindByCondition(l => l.Id.Equals(id))
                .Include(p => p.Photo)
                .SingleAsync();
        }
    }
}
