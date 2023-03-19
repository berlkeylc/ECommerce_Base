using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ECommerce_Base.Models
{
    public class OrderDetailDTO
    {
        public int OrderDetailUnitPrice { get; set; }
        public int OrderDetailQuantity { get; set; }

        public int OrderDetailDiscount { get; set; }

        [Key, Column(Order = 0)]
        public int OrderID { get; set; }
        public virtual Order Order { get; set; }

        [Key, Column(Order = 1)]
        public int ProductID { get; set; }
        public virtual Product Product { get; set; }

        public string processCode { get; set; }
    }
}