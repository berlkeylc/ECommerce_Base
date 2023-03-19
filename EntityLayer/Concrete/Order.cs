using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class Order
    {
        [Key]
        public int OrderID { get; set; }

        public DateTime OrderDate { get; set; }

        public DateTime OrderRequiredDate { get; set; }

        public DateTime OrderShippedDate { get; set; }

        public int OrderFreight { get; set; } //SONRADAN SET EKLENDİ

        public bool OrderIsDelivered { get; set;}

        public int UserID { get; set; }
        public virtual User User { get; set; }

        public ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
