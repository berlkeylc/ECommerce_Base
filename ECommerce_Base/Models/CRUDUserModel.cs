using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ECommerce_Base.Models
{
    public class CRUDUserModel : CRUDBaseModel
    {
        public int UserID { get; set; }

        public string UserEmail { get; set; }

        public string UserName { get; set; }

        public string UserFirstName { get; set; }

        public string UserLastName { get; set; }

        public string UserPassword { get; set; }

        public string UserAddress { get; set; }

        public string UserPostalCode { get; set; }

        public string UserCity { get; set; }

        public string UserCountry { get; set; }

        public string UserGender { get; set; }

        public string UserPhone { get; set; }

        public string UserRole { get; set; }

        public bool UserStatus { get; set; }

        public ICollection<Order> Orders { get; set; }
    }
}