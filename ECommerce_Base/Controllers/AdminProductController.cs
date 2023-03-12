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
    public class AdminProductController : Controller
    {
        // GET: AdminProduct
        ProductManager cm = new ProductManager(new EFProductDal());
        public ActionResult Index()
        {
            var productvalues = cm.GetList();
            return View(productvalues);
        }
        [HttpGet]
        public ActionResult AddProduct()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddProduct(Product p)
        {
            //ProductValidator productvalidator = new ProductValidator();
            //ValidationResult results = productvalidator.Validate(p);
            //if (results.IsValid)
            //{
            cm.ProductAddBL(p);
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
        public ActionResult DeleteProduct(int id)
        {
            var productvalue = cm.GetById(id);
            cm.ProductDelete(productvalue);
            return RedirectToAction("Index");
        }

        [HttpGet]
        public ActionResult EditProduct(int id)
        {
            var products = cm.GetList();
            var productvalue = cm.GetById(id);
            EditProductViewModel model = new EditProductViewModel()
            {
                products= products,
                productvalue= productvalue
            };
            
            return View(model);
        }

        [HttpPost]
        public ActionResult EditProduct(Product p)
        {
            cm.ProductUpdate(p);
            return RedirectToAction("Index");
        }
    }
}