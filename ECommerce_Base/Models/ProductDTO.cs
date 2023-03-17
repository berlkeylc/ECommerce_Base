using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ECommerce_Base.Models
{
    public class ProductDTO
    {
        [Key]
        public int ProductID { get; set; }

        [StringLength(50)]
        public string ProductName { get; set; }

        [StringLength(200)]
        public string ProductDescription { get; set; }

        public int ProductPrice { get; set; }

        public int ProductStock { get; set; }

        public bool ProductStatus { get; set; }

        public int CategoryID { get; set; }
        public virtual Category Category { get; set; }

        public string processCode { get; set; }

        public string CategoryName { get; set; }
    }
}