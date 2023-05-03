using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ECommerce_Base.Models.ViewModel
{
    public class OrderDetailViewModel
    {
        public string UserEmail { get; set; }

        public string UserName { get; set; }

        public string UserFirstName { get; set; }

        public string UserLastName { get; set; }

        public string UserAddress { get; set; }

        public string UserPostalCode { get; set; }

        public string UserCity { get; set; }

        public string UserPhone { get; set; }

        public int OrderID { get; set; }

        public string OrderDate { get; set; }

        public string OrderRequiredDate { get; set; }

        public int OrderFreight { get; set; }

        public bool OrderIsDelivered { get; set; }

        public int ProductID { get; set; }

        public string ProductName { get; set; }

        public string ProductImage { get; set; }

        public int ProductPrice { get; set; }

        public int OrderDetailID { get; set; }

        public int OrderDetailUnitPrice { get; set; }

        public int OrderDetailQuantity { get; set; }

        public int OrderDetailDiscount { get; set; }

        public bool OrderDetailStatus { get; set; }
    }
}