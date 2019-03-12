using Microsoft.EntityFrameworkCore;

namespace NaAfere.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}

        //props are table names in our db
    }
}