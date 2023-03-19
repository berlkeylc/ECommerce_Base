using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class OrderDetail
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
    }
}
