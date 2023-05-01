using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ECommerce_Base.Models
{
    public class CartItemModel : CRUDBaseModel
    {
        public int CartItemID { get; set; }

        public int CartItemQuantity { get; set; }

        public int CartID { get; set; }
        public virtual Cart Cart { get; set; }

        public int ProductID { get; set; }
        public virtual Product Product { get; set; }

        //public string ProductName { get; set; }
        //public int ProductPrice { get; set; }
        //public string ProductImage { get; set; }
    }
}