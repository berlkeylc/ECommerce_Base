using BusinessLayer.Concrete;
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
    public class AdminUserController : Controller
    {
        
        UtilityOperation utilityOperation = new UtilityOperation();
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult GetUsers()
        {
            return Json(utilityOperation.GetUsersOperation(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [Authorize]
        public JsonResult GetUserByUserName()
        {
            return Json(utilityOperation.GetUserByUserNameOperation(Session["UserName"].ToString()), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult CrudUser(CRUDUserModel user)
        {
            utilityOperation.CrudUserOperation(user);
            return Json(true, JsonRequestBehavior.AllowGet);
        }
    }
}