using BusinessLayer.Concrete;
using DataAccessLayer.Concrete;
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
    public class AdminOrderController : Controller
    {
        // GET: AdminOrder
        OrderManager cm = new OrderManager(new EFOrderDal());
        Context c = new Context();
        public ActionResult Index()
        {
            var ordervalues = cm.GetList();
            return View(ordervalues);
        }

        [HttpPost]
        public JsonResult GetOrders()
        {
            var ordervalues = cm.GetList();
            List<CRUDOrderModel> orderList = new List<CRUDOrderModel>();
            foreach (Order p in ordervalues)
            {
                CRUDOrderModel temp = new CRUDOrderModel();
                temp.OrderID = p.OrderID;
                temp.OrderDate = p.OrderDate;
                temp.OrderRequiredDate = p.OrderRequiredDate;
                temp.OrderShippedDate = p.OrderShippedDate;
                temp.OrderFreight = p.OrderFreight;
                temp.OrderIsDelivered = p.OrderIsDelivered;
                temp.OrderStatus= p.OrderStatus;
                temp.UserID = p.UserID;
                orderList.Add(temp);
            }

            var result =
               (from pl in orderList
                join cl in c.Users on pl.UserID equals cl.UserID into t
                from nt in t.DefaultIfEmpty()
                select new
                {
                    pl.OrderID,
                    nt.UserFirstName,
                    nt.UserLastName,
                    nt.UserID,
                    OrderDate = pl.OrderDate.ToString("yyyy-MM-dd"),
                    OrderRequiredDate = pl.OrderRequiredDate.ToString("yyyy-MM-dd"),
                    OrderShippedDate = pl.OrderShippedDate.ToString("yyyy-MM-dd"),
                    pl.OrderFreight,
                    pl.OrderIsDelivered,
                    pl.OrderStatus,
                }).ToList();

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult CrudOrder(CRUDOrderModel p)
        {
            Order c = new Order();
            c.OrderID = p.OrderID;
            c.OrderDate = p.OrderDate;
            c.OrderRequiredDate = p.OrderRequiredDate;
            c.OrderShippedDate = p.OrderShippedDate;
            c.OrderFreight = p.OrderFreight;
            c.OrderIsDelivered = p.OrderIsDelivered;
            c.OrderStatus= p.OrderStatus;
            c.UserID = p.UserID;

            if (p.processCode == "Delete")
            {
                var ordervalue = cm.GetById(p.OrderID);
                //Order prdct = new Order();
                //prdct.OrderID = ordervalue.OrderID;
                //prdct.CategoryID = ordervalue.CategoryID;
                //prdct.OrderName = ordervalue.OrderName;
                //prdct.OrderDescription = ordervalue.OrderDescription;
                //prdct.OrderPrice = ordervalue.OrderPrice;
                //prdct.OrderStock = ordervalue.OrderStock;
                //prdct.OrderStatus = ordervalue.OrderStatus;


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