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
    public class AdminProductController : Controller
    {
        // GET: AdminProduct
        ProductManager cm = new ProductManager(new EFProductDal());
        Context c = new Context();
        public ActionResult Index()
        {
            var productvalues = cm.GetList();
            return View(productvalues);
        }

        [HttpPost]
        public JsonResult GetProducts()
        {
            var productvalues = cm.GetList();
            List<ProductDTO> productList = new List<ProductDTO>();
            foreach (Product p in productvalues)
            {
                ProductDTO temp = new ProductDTO();
                temp.ProductID = p.ProductID;
                temp.ProductStatus = p.ProductStatus;
                temp.ProductStock = p.ProductStock;
                temp.ProductPrice = p.ProductPrice;
                temp.ProductName = p.ProductName;
                temp.CategoryID = p.CategoryID;
                temp.ProductDescription = p.ProductDescription;
                productList.Add(temp);
            }

            var result =
               (from pl in productList
                join cl in c.Categories on pl.CategoryID equals cl.CategoryID into t
               from nt in t.DefaultIfEmpty() select new 
               { pl.ProductName,
               pl.CategoryID,
               pl.ProductDescription,
               pl.ProductStock,
               pl.ProductPrice,
               pl.ProductID,
               pl.ProductStatus,
                 nt.CategoryName,
               } ).ToList();

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult CrudProduct(ProductDTO p)
        {
            Product c = new Product();
            c.ProductID = p.ProductID;
            c.ProductName = p.ProductName;
            c.ProductDescription = p.ProductDescription;
            c.ProductPrice = p.ProductPrice;
            c.ProductStock = p.ProductStock;
            c.ProductStatus = p.ProductStatus;
            c.CategoryID = p.CategoryID;

            if (p.processCode == "Delete")
            {
                var productvalue = cm.GetById(p.ProductID);
                //Product prdct = new Product();
                //prdct.ProductID = productvalue.ProductID;
                //prdct.CategoryID = productvalue.CategoryID;
                //prdct.ProductName = productvalue.ProductName;
                //prdct.ProductDescription = productvalue.ProductDescription;
                //prdct.ProductPrice = productvalue.ProductPrice;
                //prdct.ProductStock = productvalue.ProductStock;
                //prdct.ProductStatus = productvalue.ProductStatus;


                cm.ProductDelete(productvalue);
            }
            else if (p.ProductID > 1 && p.processCode == "Update")
            {
                cm.ProductUpdate(c);
            }
            else
            {
                cm.ProductAddBL(c);
            }
            return Json(true, JsonRequestBehavior.AllowGet);
        }
    }
}