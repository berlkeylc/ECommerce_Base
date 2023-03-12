using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class Category
    {
        [StringLength(200)]
        public string CategoryDescription { get; set; }

        [Key]
        public int CategoryID { get; set; }

        [StringLength(50)]
        public string CategoryName { get; set; }

        public bool CategoryStatus { get; set; }

        public ICollection<Product> Products { get; set; }

    }
}
