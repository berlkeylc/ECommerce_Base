using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class CartItem
    {
        public int CartItemID { get; set; }

        public int CartItemQuantity { get; set; }

        public int CartID { get; set; }
        public virtual Cart Cart { get; set; }

        public int ProductID { get; set; }
        public virtual Product Product { get; set; }
    }
}
