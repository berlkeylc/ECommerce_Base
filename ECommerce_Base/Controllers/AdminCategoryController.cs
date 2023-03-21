﻿using BusinessLayer.Concrete;
using DataAccessLayer.Abstract;
using DataAccessLayer.EntityFramework;
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

        //[HttpPost]
        //public ActionResult AddCategory(Category p)
        //{
        //    //CategoryValidator categoryvalidator = new CategoryValidator();
        //    //ValidationResult results = categoryvalidator.Validate(p);
        //    //if (results.IsValid)
        //    //{
        //        cm.CategoryAddBL(p);
        //        return RedirectToAction("Index");
        //    //}
        //    /*else
        //    {
        //        foreach (var item in results.Errors)
        //        {
        //            ModelState.AddModelError(item.PropertyName, item.ErrorMessage);
        //        }
        //    }*/
        //    //return View();
        //}

        [HttpPost]
        public JsonResult AddCategory(Category p)
        {
            cm.CategoryAddBL(p);
            return Json(true, JsonRequestBehavior.AllowGet);
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
        public JsonResult EditCategory(Category p)
        {
            cm.CategoryUpdate(p);
            return Json(true, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult CrudCategory(CRUDCategoryModel p)
        {
            Category c = new Category();
            c.CategoryID = p.CategoryID;
            c.CategoryName = p.CategoryName;
            c.CategoryDescription = p.CategoryDescription;
            c.CategoryStatus = p.CategoryStatus;

            if(p.processCode == "Delete")
            {
                var categoryvalue = cm.GetById(p.CategoryID);
                cm.CategoryDelete(categoryvalue);
            }
            else if(p.CategoryID > 0 && p.processCode == "Update")
            {
                cm.CategoryUpdate(c);
            }
            else
            {
                cm.CategoryAddBL(c);
            }
            return Json(true, JsonRequestBehavior.AllowGet);
        }

    }
}