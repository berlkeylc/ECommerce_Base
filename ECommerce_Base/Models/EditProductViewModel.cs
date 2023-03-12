using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ECommerce_Base.Models
{
    public class EditProductViewModel
    {
        public Product productvalue { get; set; }
        public List<Product> products { get; set; }
    }
}