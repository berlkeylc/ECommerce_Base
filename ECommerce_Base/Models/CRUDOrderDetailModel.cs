using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ECommerce_Base.Models
{
    public class CRUDOrderDetailModel : CRUDBaseModel
    {
        public int OrderDetailID { get; set; }

        public int OrderDetailUnitPrice { get; set; }

        public int OrderDetailQuantity { get; set; }

        public int OrderDetailDiscount { get; set; }

        public bool OrderDetailStatus { get; set; }

        public int OrderID { get; set; }
        public virtual Order Order { get; set; }

        public int ProductID { get; set; }
        public virtual Product Product { get; set; }
    }
}