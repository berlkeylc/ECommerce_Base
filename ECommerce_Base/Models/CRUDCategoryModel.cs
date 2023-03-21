using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ECommerce_Base.Models
{
    public class CRUDCategoryModel : CRUDBaseModel
    {
        public string CategoryDescription { get; set; }

        public int CategoryID { get; set; }

        public string CategoryName { get; set; }

        public bool CategoryStatus { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}