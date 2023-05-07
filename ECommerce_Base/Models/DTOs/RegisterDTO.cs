using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ECommerce_Base.Models.DTOs
{
    public class RegisterDTO
    {
        public string UserEmail { get; set; }

        public string UserName { get; set; }

        public string UserFirstName { get; set; }

        public string UserLastName { get; set; }

        public string Password { get; set; }

        public string RepeatPassword { get; set; }
    }
}