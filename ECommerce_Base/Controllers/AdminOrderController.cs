using BusinessLayer.Concrete;
using DataAccessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using ECommerce_Base.Infrastructures;
using ECommerce_Base.Models;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ECommerce_Base.Controllers
{
    public class AdminOrderController : Controller
    {
        
        UtilityOperation utilityOperation = new UtilityOperation();

        [Authorize(Roles = "ADMIN")]
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult GetOrders()
        {
            return Json(utilityOperation.GetOrdersOperation(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult CrudOrder(CRUDOrderModel order)
        {
            utilityOperation.CrudOrderOperation(order);
            return Json(true, JsonRequestBehavior.AllowGet);
        }
    }
}