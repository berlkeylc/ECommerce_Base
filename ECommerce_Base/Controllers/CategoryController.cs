using BusinessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ECommerce_Base.Controllers
{
    public class CategoryController : Controller
    {
        CategoryManager cm = new CategoryManager(new EFCategoryDal());
        ProductManager pm = new ProductManager(new EFProductDal());
        // GET: Category
        public ActionResult Index()
        {
            return View();
        }

        [Authorize]
        public ActionResult GetCategories()
        {
            var categoryvalues = cm.GetList();
            var productvalues = pm.GetList();
            return View(productvalues);
        }
    }
}