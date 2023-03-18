﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ECommerce_Base.Models
{
    public class UserDTO
    {
        [Key]
        public int UserID { get; set; }

        [StringLength(50)]
        public string UserEmail { get; set; }

        [StringLength(15)]
        public string UserName { get; set; }

        [StringLength(15)]
        public string UserFirstName { get; set; }

        [StringLength(15)]
        public string UserLastName { get; set; }

        [StringLength(15)]
        public string UserPassword { get; set; }

        [StringLength(50)]
        public string UserAdress { get; set; }

        [StringLength(5)]
        public string UserPostalCode { get; set; }

        [StringLength(25)]
        public string UserCity { get; set; }

        [StringLength(25)]
        public string UserCountry { get; set; }

        [StringLength(10)]
        public string UserGender { get; set; }

        [StringLength(11)]
        public string UserPhone { get; set; }

        public string processCode { get; set; }
    }
}