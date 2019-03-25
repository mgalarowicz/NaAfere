using Microsoft.AspNetCore.Identity;

namespace NaAfere.API.Models
{
    public class UserRole : IdentityUserRole<int>
    {
        public int Id { get; set; }
        public User User { get; set; }
        public Role Role { get; set; }
    }
}