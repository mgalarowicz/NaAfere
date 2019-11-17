using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NaAfere.API.Dtos;
using NaAfere.API.Helpers;
using NaAfere.API.Logger;
using NaAfere.API.Repositories;

namespace NaAfere.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IRepositoryWrapper _repo;
        private readonly IMapper _mapper;
        private readonly ILoggerManager _logger;

        public UsersController(IRepositoryWrapper repo, IMapper mapper, ILoggerManager logger)
        {
            _mapper = mapper;
            _logger = logger;
            _repo = repo;
        }

        [HttpGet(Name = nameof(GetUsers))]
        public async Task<IActionResult> GetUsers([FromQuery]UserParams userParams)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            var userFromRepo = await _repo.User.GetUserById(currentUserId);

            userParams.UserId = currentUserId;

            if (String.IsNullOrEmpty(userParams.City))
                userParams.City = userFromRepo.City;
            
            var users = await _repo.User.GetUsers(userParams);

            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);

            Response.AddPagination(users.CurrentPage, users.PageSize, users.TotalCount, users.TotalPages);

            _logger.LogInfo($"Returned all users from database.");

            return Ok(usersToReturn);
        }

        [HttpGet("{id}", Name = nameof(GetUserById))]
        public async Task<IActionResult> GetUserById(int id)
        {

            var user = await _repo.User.GetUserById(id);

            if (user.IsObjectNull())
            {
                _logger.LogError($"User with id: {id}, hasn't been found in db");
                return NotFound();
            }

            var userToReturn = _mapper.Map<UserForDetailedDto>(user);
            _logger.LogInfo($"Returned user with id: {id}");
            return Ok(userToReturn);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto userForUpdateDto)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var userFromRepo = await _repo.User.GetUserById(id);

            _mapper.Map(userForUpdateDto, userFromRepo);

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Updating user {id} failed on save");
        }
    }
}