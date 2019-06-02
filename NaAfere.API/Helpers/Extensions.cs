using System;
using Microsoft.AspNetCore.Http;

namespace NaAfere.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);  //naglowek headera i jego tresc
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");   //komunikacja z Angularem, zezwalaja nam na wystwietlenie headera
            response.Headers.Add("Access-Control-Allow-Origin", "*");       //komunikacja z Angularem, zezwalaja nam na wystwietlenie headera 
        }

        public static int CalculateAge(this DateTime theDateTime)
        {
            var age = DateTime.Today.Year - theDateTime.Year;
            if (theDateTime.AddYears(age) > DateTime.Today)
                age--;
            
            return age;
        }
    }
}