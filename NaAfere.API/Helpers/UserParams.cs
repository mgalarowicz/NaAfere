using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NaAfere.API.Helpers
{
    public class UserParams
    {
        private const int MaxPageSize = 50;
        
        public int PageNumber { get; set; } = 1;

        private int pageSize = 10;          
            
        public int PageSize
        {
            get => pageSize;
            set => pageSize = (value > MaxPageSize) ? MaxPageSize : value;
        }

        public int UserId { get; set; }
        
        public string City {get; set; }

        public int MinAge { get; set; } = 10;

        public int MaxAge { get; set; } = 99;
    }
}
