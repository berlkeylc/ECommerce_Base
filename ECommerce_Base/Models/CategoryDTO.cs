using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ECommerce_Base.Models
{
    public class CategoryDTO
    {
        [StringLength(200)]
        public string CategoryDescription { get; set; }

        [Key]
        public int CategoryID { get; set; }

        [StringLength(50)]
        public string CategoryName { get; set; }

        public bool CategoryStatus { get; set; }

        public ICollection<Product> Products { get; set; }

        public string processCode { get; set; }
    }
}