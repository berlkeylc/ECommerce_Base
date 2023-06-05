using BusinessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using ECommerce_Base.Models;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ECommerce_Base.Controllers
{
    public class OrderController : Controller
    {
        // GET: Checkout

        OrderManager cm = new OrderManager(new EFOrderDal());
        OrderDetailManager odm = new OrderDetailManager(new EFOrderDetailDal());

        [Authorize]
        public ActionResult Index()
        {
            return View();
        }

        [Authorize]
        [HttpPost]
        public JsonResult CrudOrder(CRUDOrderModel p)
        {
            Order c = new Order();
            //c.OrderID = p.OrderID;
            c.OrderDate = DateTime.Now;
            c.OrderRequiredDate = DateTime.Now.AddDays(3);
            c.OrderShippedDate = DateTime.Now;
            //c.OrderFreight = p.OrderFreight;
            //c.OrderIsDelivered = p.OrderIsDelivered;
            //c.OrderStatus= p.OrderStatus;
            c.UserID = p.UserID;

            if (p.processCode == "Delete")
            {
                var ordervalue = cm.GetById(p.OrderID);
                cm.OrderDelete(ordervalue);
            }
            else if (p.OrderID > 0 && p.processCode == "Update")
            {
                cm.OrderUpdate(c);
            }
            else
            {
                cm.OrderAddBL(c);
            }
            return Json(true, JsonRequestBehavior.AllowGet);
        }
    }
}