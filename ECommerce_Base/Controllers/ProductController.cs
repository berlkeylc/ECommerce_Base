using BusinessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using ECommerce_Base.Infrastructures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ECommerce_Base.Controllers
{
    public class ProductController : Controller
    {

        UtilityOperation utilityOperation = new UtilityOperation();

        [Authorize]
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult GetProducts()
        {
            return Json(utilityOperation.GetProductsOperation(), JsonRequestBehavior.AllowGet);
        }
    }
}