using BusinessLayer.Concrete;
using DataAccessLayer.Abstract;
using DataAccessLayer.EntityFramework;
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

        CategoryManager cm = new CategoryManager(new EFCategoryDal());
        public ActionResult Index()
        {
            var categoryvalues = cm.GetList();
            return View(categoryvalues);
        }

        [HttpPost]
        public JsonResult GetCategories()
        {
            var categoryvalues = cm.GetList();
            return Json(categoryvalues, JsonRequestBehavior.AllowGet);
        }

        public ActionResult AdminCategorySaveModal()
        { 
            return PartialView();
        }

        [HttpPost]
        public ActionResult AdminCategorySaveModal(int id)
        {
            return PartialView();
        }

        [HttpGet]
        public ActionResult AddCategory()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddCategory(Category p)
        {
            //CategoryValidator categoryvalidator = new CategoryValidator();
            //ValidationResult results = categoryvalidator.Validate(p);
            //if (results.IsValid)
            //{
                cm.CategoryAddBL(p);
                return RedirectToAction("Index");
            //}
            /*else
            {
                foreach (var item in results.Errors)
                {
                    ModelState.AddModelError(item.PropertyName, item.ErrorMessage);
                }
            }*/
            //return View();
        }
        public ActionResult DeleteCategory(int id)
        {
            var categoryvalue = cm.GetById(id);
            cm.CategoryDelete(categoryvalue);
            return RedirectToAction("Index");
        }

        [HttpGet]
        public ActionResult EditCategory(int id)
        {
            var categoryvalue = cm.GetById(id);
            return View(categoryvalue);
        }

        [HttpPost]
        public ActionResult EditCategory(Category p)
        {
            cm.CategoryUpdate(p);
            return RedirectToAction("Index");
        }

    }
}