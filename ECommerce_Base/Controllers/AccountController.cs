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
using System.Xml.Linq;

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

        public ActionResult RegisterPage()
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
                    webResult.Url = Url.Action("Login", "Account");
                }
            }
            else
            {
                webResult.Type = Infrastructures.Enums.WebResultTypes.Message;
                webResult.Message = "Kullanıcı Bulunamadı.";
                webResult.Url = Url.Action("Login", "Account");
            }
            return Json(webResult, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Register(RegisterDTO model)
        {
            var webResult = new WebResult();
            User userIsExist = um.GetByUserName(model.UserName);

            if (userIsExist == null)
            {
                if (model.RepeatPassword == model.Password)
                {
                    User user = new User();
                    
                    user.UserEmail = model.UserEmail;
                    user.UserName = model.UserName;
                    user.UserLastName = model.UserLastName;
                    user.UserFirstName = model.UserFirstName;
                    user.UserPassword = model.Password;
                    user.UserRole = "USER";

                    um.UserAddBL(user);

                    webResult.Url = Url.Action("Login", "Account"); 
                    webResult.Type = Infrastructures.Enums.WebResultTypes.Redirect;
                }
                else
                {
                    webResult.Type = Infrastructures.Enums.WebResultTypes.Message;
                    webResult.Message = "Şifreler Bilbiri İle Uyuşmuyor.";
                }
            }
            else
            {
                webResult.Type = Infrastructures.Enums.WebResultTypes.Message;
                webResult.Message = "Kullanıcı Adı Daha Önceden Alınmış.";
            }
            return Json(webResult, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Logout()
        {
            var webResult = new WebResult();
            FormsAuthentication.SignOut();
            webResult.Url = Url.Action("Login", "Account");
            webResult.Type = Infrastructures.Enums.WebResultTypes.Redirect;
            return Json(webResult, JsonRequestBehavior.AllowGet);
        }
    }
}