using System.Collections.Generic;
using System.Linq;
using NaAfere.API.Models;
using Newtonsoft.Json;

namespace NaAfere.API.Data
{
    public class SeedR
    {
        private readonly DataContext _context;
        
        public SeedR(DataContext context)
        {
            _context = context;
        }

        public void SeedLocations()
        {
            if (!_context.Locations.Any())
            {
                var locationData = System.IO.File.ReadAllText("Data/LocationSeedData.json");
                var locations = JsonConvert.DeserializeObject<List<Location>>(locationData);

                foreach (var location in locations)
                {
                    _context.Locations.Add(location);
                }
            }
            _context.SaveChanges();
        }

        public void SeedTeams()
        {
            if (!_context.Teams.Any())
            {            
                var teamData = System.IO.File.ReadAllText("Data/TeamSeedData.json");
                var teams = JsonConvert.DeserializeObject<List<Team>>(teamData);

                foreach (var team in teams)
                {
                    _context.Teams.Add(team);
                }
            }
            _context.SaveChanges();
        }

        public void SeedDisciplines()
        {
            if(_context.Disciplines.Any())
            {
                var disciplineData = System.IO.File.ReadAllText("Data/DisciplineSeedData.json");
                var disciplines = JsonConvert.DeserializeObject<List<Discipline>>(disciplineData);

                foreach (var discipline in disciplines)
                {
                    _context.Disciplines.Add(discipline);
                }
            }
            _context.SaveChanges();
        }
    }
}