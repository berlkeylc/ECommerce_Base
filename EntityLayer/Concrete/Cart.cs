using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class Cart
    {
        public int CartID { get; set; }

        public int UserID { get; set; }
        public virtual User User { get; set; }

        public ICollection<CartItem> CartItems { get; set; }
    }
}
