using System;
using System.Collections.Generic;
using NaAfere.API.Helpers;

namespace NaAfere.API.Dtos
{
    public class UserForDetailedDto : IEntity
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public string Email { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public DateTime LastActive { get; set; }         
        public DateTime CreateDate { get; set; }
        public string PhotoUrl {get; set;}
        public ICollection<UStatForDetailedDto> UStats {get; set;}
        public ICollection<TeamForListDto> Teams {get; set;}
        public ICollection<UserForListDto> Friends {get; set;}
    }
}