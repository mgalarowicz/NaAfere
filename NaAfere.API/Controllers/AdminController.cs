using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NaAfere.API.Data;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace NaAfere.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly DataContext _context;
        public AdminController(DataContext context)
        {
            _context = context;
        }

        [Authorize(Policy = "RequireAdminRole")]
        [HttpGet("onlyForAdmin")]
        public async Task<IActionResult> GetUsersWithRoles()
        {
            var userList = await (from user in _context.Users orderby user.UserName
                                    select new
                                    {
                                        Id = user.Id,
                                        Email = user.Email,
                                        Roles = (from userRole in user.UserRoles
                                                    join role in _context.Roles
                                                    on userRole.RoleId
                                                    equals role.Id
                                                    select role.Name).ToList()
                                    }).ToListAsync();
                                    
            return Ok("Only admins can see this");
        }
    }
}