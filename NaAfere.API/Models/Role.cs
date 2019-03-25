using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace NaAfere.API.Models
{
    public class Role : IdentityRole<int>
    {
        public ICollection<UserRole> UserRoles { get; set; }
    }
}