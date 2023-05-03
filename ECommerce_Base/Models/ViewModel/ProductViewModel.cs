using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ECommerce_Base.Models.ViewModel
{
    public class ProductViewModel
    {
        public int ProductID { get; set; }

        public string ProductName { get; set; }

        public string ProductImage { get; set; }

        public string ProductDescription { get; set; }

        public int ProductPrice { get; set; }

        public int ProductStock { get; set; }

        public bool ProductStatus { get; set; }

        public string CategoryName { get; set; }

        public int CategoryID { get; set; }
    }
}