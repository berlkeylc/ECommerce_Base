using BusinessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ECommerce_Base.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        CategoryManager cm = new CategoryManager(new EFCategoryDal());
        ProductManager pm = new ProductManager(new EFProductDal());
        // GET: Category

        [Authorize]
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult GetProducts()
        {
            var categoryvalues = cm.GetList();
            var productvalues = pm.GetList();
            //return View(productvalues);
            return Json(productvalues, JsonRequestBehavior.AllowGet);
        }
    }
}