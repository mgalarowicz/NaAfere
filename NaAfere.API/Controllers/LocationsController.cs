using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NaAfere.API.Dtos;
using NaAfere.API.Logger;
using NaAfere.API.Repositories;

namespace NaAfere.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class LocationsController : Controller
    {
        private readonly IRepositoryWrapper _repo;
        private readonly IMapper _mapper;
        private readonly ILoggerManager _logger;

        public LocationsController(IRepositoryWrapper repo, IMapper mapper, ILoggerManager logger)
        {
            _mapper = mapper;
            _logger = logger;
            _repo = repo;
        }

        [HttpGet(Name = nameof(GetLocations))]
        public async Task<IActionResult> GetLocations()
        {

            var locations = await _repo.Location.GetLocations();

            var locationsToReturn = _mapper.Map<IEnumerable<LocationForListDto>>(locations);

            _logger.LogInfo($"Returned all locations from database.");

            return Ok(locationsToReturn);
        }

        [HttpGet("{id}", Name = nameof(GetLocationById))]
        public async Task<IActionResult> GetLocationById(int id)
        {

            var location = await _repo.Location.GetLocationById(id);

            if (location == null)
            {
                _logger.LogError($"Location with id: {id}, hasn't been found in db");
                return NotFound();
            }

            var locationToReturn = _mapper.Map<LocationForDetailedDto>(location);
            _logger.LogInfo($"Returned location with id: {id}");
            return Ok(locationToReturn);
        }
    }
}