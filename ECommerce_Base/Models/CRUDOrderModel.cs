using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ECommerce_Base.Models
{
    public class CRUDOrderModel : CRUDBaseModel
    {
        public int OrderID { get; set; }

        public DateTime OrderDate { get; set; }

        public DateTime OrderRequiredDate { get; set; }

        public DateTime OrderShippedDate { get; set; }

        public int OrderFreight { get; set; }

        public bool OrderIsDelivered { get; set; }

        public bool OrderStatus { get; set; }

        public int UserID { get; set; }

        public virtual User User { get; set; }
    }
}