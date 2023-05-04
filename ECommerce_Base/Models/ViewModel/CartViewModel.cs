using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ECommerce_Base.Models.ViewModel
{
    public class CartViewModel
    {
        public int CartItemQuantity { get; set; }

        public int ProductID { get; set; }

        public string ProductName { get; set; }

        public string ProductImage { get; set; }

        public int ProductPrice { get; set; }
    }
}