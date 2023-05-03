using BusinessLayer.Concrete;
using DataAccessLayer.Abstract;
using DataAccessLayer.EntityFramework;
using ECommerce_Base.Infrastructures;
using ECommerce_Base.Models;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ECommerce_Base.Controllers
{
    public class AdminCategoryController : Controller
    {
        // GET: AdminCategory

        UtilityOperation utilityOperation = new UtilityOperation();
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult GetCategories()
        {
            return Json(utilityOperation.GetCategoriesOperation(), JsonRequestBehavior.AllowGet);
        }
        
        [HttpPost]
        public JsonResult CrudCategory(CRUDCategoryModel category)
        {
            utilityOperation.CrudCategoryOperation(category);
            return Json(true, JsonRequestBehavior.AllowGet);
        }

    }
}