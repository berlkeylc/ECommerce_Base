using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ECommerce_Base.Models
{
    public class CartItemDto : IEnumerable
    {
        public string ProductName { get; set; }
        public int ProductPrice { get; set; }
        public string ProductImage { get; set; }

        public int CartItemQuantity { get; set; }



        IEnumerator IEnumerable.GetEnumerator()
        {
            throw new NotImplementedException();
        }
    }
}