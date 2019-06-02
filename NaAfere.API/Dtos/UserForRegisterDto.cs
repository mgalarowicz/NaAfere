using System;
using System.ComponentModel.DataAnnotations;

namespace NaAfere.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        
        [Required]
        public string Password { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Gender { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string Country { get; set; }

        public string PhoneNumber { get; set; } 

        public DateTime LastActive { get; set; }

        public DateTime CreateDate { get; set; } 

        public UserForRegisterDto()
        {
            LastActive = DateTime.UtcNow;
            CreateDate = DateTime.UtcNow;
        }
    }
}