using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace NaAfere.API.Controllers
{
    public class FallBack : Controller
    {
        // It's gonna redirect my request to and send it back to index.html which is my Angular application
        // and Angular router will deal with it
        public IActionResult Index() {
            return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "index.html"), "text/HTML");
        }
    }
}