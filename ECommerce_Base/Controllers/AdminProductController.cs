using BusinessLayer.Concrete;
using DataAccessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using ECommerce_Base.Infrastructures;
using ECommerce_Base.Models;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ECommerce_Base.Controllers
{
    public class AdminProductController : Controller
    {
        UtilityOperation utilityOperation = new UtilityOperation();

        [Authorize(Roles = "ADMIN")]
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult GetProducts()
        {
            return Json(utilityOperation.GetProductsOperation(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult CrudProduct(CRUDProductModel product)
        {
            utilityOperation.CrudProductOperation(product);
            return Json(true, JsonRequestBehavior.AllowGet);
        }
    }
}