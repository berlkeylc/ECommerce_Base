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
    public class AdminUserController : Controller
    {
        // GET: AdminUser
        UserManager cm = new UserManager(new EFUserDal());
        public ActionResult Index()
        {
            var uservalues = cm.GetList();
            return View(uservalues);
        }

        [HttpPost]
        public JsonResult GetUsers()
        {
            var uservalues = cm.GetList();
            return Json(uservalues, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [Authorize]
        public JsonResult GetUserByUserName()
        {
            //var uservalues = cm.GetByUserName();
            User user = cm.GetByUserName(Session["UserName"].ToString());
            return Json(user, JsonRequestBehavior.AllowGet);
        }



        [HttpPost]
        public JsonResult CrudUser(CRUDUserModel p)
        {
            User c = new User();
            c.UserID = p.UserID;
            c.UserEmail = p.UserEmail;
            c.UserName = p.UserName;
            c.UserLastName = p.UserLastName;
            c.UserFirstName = p.UserFirstName;
            c.UserPassword = p.UserPassword;
            c.UserAddress = p.UserAddress;
            c.UserPostalCode= p.UserPostalCode;
            c.UserCity = p.UserCity;
            c.UserCountry = p.UserCountry;
            c.UserGender= p.UserGender;
            c.UserPhone = p.UserPhone;
            c.UserStatus= p.UserStatus;
            
            if (p.processCode == "Delete")
            {
                var uservalue = cm.GetById(p.UserID);
                cm.UserDelete(uservalue);
            }
            else if (p.UserID > 0 && p.processCode == "Update")
            {
                cm.UserUpdate(c);
            }
            else
            {
                cm.UserAddBL(c);
            }
            return Json(true, JsonRequestBehavior.AllowGet);
        }
    }
}