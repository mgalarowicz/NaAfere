using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using NaAfere.API.Models;
using Newtonsoft.Json;

namespace NaAfere.API.Data
{
    public class SeedU
    {
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<Role> _roleManager;
        public SeedU(UserManager<User> userManager, RoleManager<Role> roleManager)
        {
            _roleManager = roleManager;
            _userManager = userManager;
        }

        public void SeedUsers()
        {
            if (!_userManager.Users.Any())
            {
                var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userData);

                var roles = new List<Role>
                {
                    new Role{Name = "Member"},
                    new Role{Name = "Admin"},
                    new Role{Name = "Moderator"},
                };

                foreach (var role in roles)
                {
                    _roleManager.CreateAsync(role).Wait();
                }

                foreach (var user in users)
                {
                    // user.Photos.SingleOrDefault().IsApproved = true;
                    _userManager.CreateAsync(user, "Pass.word156").Wait();
                    _userManager.AddToRoleAsync(user, "Member").Wait();
                }

                var adminUser = new User
                {
                    Email = "rezi610@gmail.com"
                };

                IdentityResult result = _userManager.CreateAsync(adminUser, "Pass.word156").Result;

                if (result.Succeeded)
                {
                    var admin = _userManager.FindByNameAsync("Admin").Result;
                    _userManager.AddToRolesAsync(admin, new[] { "Admin", "Moderator" }).Wait();
                }
            }
        }
    }
}