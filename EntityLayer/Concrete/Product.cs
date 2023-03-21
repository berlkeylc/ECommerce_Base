using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class Product
    {
        [Key]
        public int ProductID { get; set; }

        [StringLength(50)]
        public string ProductName { get; set; }

        [StringLength(200)]
        public string ProductDescription { get; set; }

        public string ProductImage { get; set; }

        public int ProductPrice { get; set; }

        public int ProductStock { get; set; }

        public bool ProductStatus { get; set; }

        public int CategoryID { get; set; }
        public virtual Category Category { get; set; }

        public ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
