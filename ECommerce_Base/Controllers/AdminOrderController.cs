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
            List<OrderDTO> orderList = new List<OrderDTO>();
            foreach (Order p in ordervalues)
            {
                OrderDTO temp = new OrderDTO();
                temp.OrderID = p.OrderID;
                temp.OrderDate = p.OrderDate;
                temp.OrderRequiredDate = p.OrderRequiredDate;
                temp.OrderShippedDate = p.OrderShippedDate;
                temp.OrderFreight = p.OrderFreight;
                temp.OrderIsDelivered = p.OrderIsDelivered;
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
                    pl.OrderDate,
                    pl.OrderRequiredDate,
                    pl.OrderShippedDate,
                    pl.OrderFreight,
                    pl.OrderIsDelivered,
                }).ToList();

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult CrudOrder(OrderDTO p)
        {
            Order c = new Order();
            c.OrderID = p.OrderID;
            c.OrderDate = p.OrderDate;
            c.OrderRequiredDate = p.OrderRequiredDate;
            c.OrderShippedDate = p.OrderShippedDate;
            c.OrderFreight = p.OrderFreight;
            c.OrderIsDelivered = p.OrderIsDelivered;
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
            else if (p.OrderID > 1 && p.processCode == "Update")
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