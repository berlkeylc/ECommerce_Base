using BusinessLayer.Concrete;
using DataAccessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using ECommerce_Base.Infrastructures;
using ECommerce_Base.Models;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace ECommerce_Base.Controllers
{
    public class CartController : Controller
    {
       
        UtilityOperation utilityOperation = new UtilityOperation();

        [Authorize]
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult CrudCart(CartItemModel cartItem)
        {
            string session = Session["UserName"].ToString();
            utilityOperation.CrudCartOperation(cartItem, session);
            return Json(true, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [Authorize]
        public JsonResult GetCarts()
        {
            string session = Session["UserName"].ToString();
            return Json(utilityOperation.GetCartsOperation(session), JsonRequestBehavior.AllowGet);
        }

    }
}