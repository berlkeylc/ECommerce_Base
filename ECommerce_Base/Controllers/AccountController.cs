using BusinessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using ECommerce_Base.Models;
using ECommerce_Base.Models.DTOs;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace ECommerce_Base.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account
        UserManager um = new UserManager(new EFUserDal());
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Login(LoginDTO model)
        {
            var webResult = new WebResult();
            User user = um.GetByUserName(model.UserName);
            if(user != null)
            {
                if (user.UserPassword == model.Password)
                {
                    FormsAuthentication.SetAuthCookie(model.UserName, false);
                    Session["UserName"] = model.UserName;

                    //return View();
                    webResult.Url = Url.Action("Index", "Home");
                    webResult.Type = Infrastructures.Enums.WebResultTypes.Redirect;
                }
                else
                {
                    webResult.Type = Infrastructures.Enums.WebResultTypes.Message;
                    webResult.Message = "Yanlış Şifre.";
                }
            }
            
            else
            {
                webResult.Type = Infrastructures.Enums.WebResultTypes.Message;
                webResult.Message = "Kullanıcı Bulunamadı.";
            }
            return Json(webResult, JsonRequestBehavior.AllowGet);

        }
        public ActionResult Register()
        {
            return View();
        }
    }
}