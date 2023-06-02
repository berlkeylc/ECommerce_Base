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
    public class OrderDetailController : Controller
    {

        UtilityOperation utilityOperation = new UtilityOperation();
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [Authorize]
        public JsonResult CrudOrderDetail(CRUDOrderDetailModel p)
        {
            utilityOperation.CrudOrderDetailUserOperation(Session["UserName"].ToString());
            return Json(true, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [Authorize]
        public JsonResult GetOrderDetail()
        {
            return Json(utilityOperation.getOrdersByUserIDOperation(Session["UserName"].ToString()), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [Authorize]
        public JsonResult GetOrderDetailsByOrderID(int orderID)
        {
            return Json(utilityOperation.getOrderDetailsByOrderIDOperation(Session["UserName"].ToString(), orderID), JsonRequestBehavior.AllowGet);
        }
    }
}