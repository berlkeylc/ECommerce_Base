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
    public class AdminOrderDetailController : Controller
    {
        
        UtilityOperation utilityOperation = new UtilityOperation();
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult GetOrderDetails()
        {
            return Json(utilityOperation.GetOrderDetailsOperation(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult CrudOrderDetail(CRUDOrderDetailModel orderDetail)
        {
            utilityOperation.CrudOrderDetailOperation(orderDetail);
            return Json(true, JsonRequestBehavior.AllowGet);
        }
    }
}