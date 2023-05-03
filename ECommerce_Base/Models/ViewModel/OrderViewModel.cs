using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ECommerce_Base.Models.ViewModel
{
    public class OrderViewModel
    {
        public int OrderID { get; set; }

        public string OrderDate { get; set; }

        public string OrderRequiredDate { get; set; }

        public string OrderShippedDate { get; set; }

        public int OrderFreight { get; set; }

        public bool OrderIsDelivered { get; set; }

        public bool OrderStatus { get; set; }

        public int UserID { get; set; }

        public string UserFirstName { get; set; }

        public string UserLastName { get; set; }
    }
}