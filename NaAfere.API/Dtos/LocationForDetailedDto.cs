﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NaAfere.API.Helpers;

namespace NaAfere.API.Dtos
{
    public class LocationForDetailedDto : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Address { get; set; }
        public string ZipCode { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Website { get; set; }
        public string PhotoUrl {get; set;}
    }
}
