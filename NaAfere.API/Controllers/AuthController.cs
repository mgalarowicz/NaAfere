using Microsoft.AspNetCore.Mvc;
using NaAfere.API.Data;

namespace NaAfere.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        public AuthController(IAuthRepository repo)
        {
            
        }
    }
}