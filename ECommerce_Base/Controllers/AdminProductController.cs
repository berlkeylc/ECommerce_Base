using BusinessLayer.Concrete;
using DataAccessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using ECommerce_Base.Models;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.IO;
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
            string fileName = Path.GetFileName("001.jpg");
            string fileExtension = Path.GetExtension(fileName);
            var productvalues = cm.GetList();
            List<CRUDProductModel> productList = new List<CRUDProductModel>();
            foreach (Product p in productvalues)
            {
                CRUDProductModel temp = new CRUDProductModel();
                temp.ProductID = p.ProductID;
                temp.ProductImage = p.ProductImage;
                temp.ProductStatus = p.ProductStatus;
                temp.ProductStock = p.ProductStock;
                temp.ProductPrice = p.ProductPrice;
                temp.ProductName = p.ProductName;
                temp.CategoryID = p.CategoryID;
                temp.ProductDescription = p.ProductDescription;

                //temp.ProductImage.SaveAs(Server.MapPath(fileName));
                

                productList.Add(temp);
            }

            var result =
               (from pl in productList
                join cl in c.Categories on pl.CategoryID equals cl.CategoryID into t
               from nt in t.DefaultIfEmpty() select new 
               { pl.ProductName,
               pl.CategoryID,
               pl.ProductImage,
               pl.ProductDescription,
               pl.ProductStock,
               pl.ProductPrice,
               pl.ProductID,
               pl.ProductStatus,
                 nt.CategoryName
               } ).ToList();

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult CrudProduct(CRUDProductModel p)
        {
            Product c = new Product();
            c.ProductID = p.ProductID;
            c.ProductName = p.ProductName;
            c.ProductImage= p.ProductImage;
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
            else if (p.ProductID > 0 && p.processCode == "Update")
            {
                string base64 = c.ProductImage.Replace("data:image/jpeg;base64,", "");
                System.IO.File.WriteAllBytes("C:\\Users\\90535\\Desktop\\projects\\ASP .NET\\ECommerce_Base\\ECommerce_Base\\Image\\" + c.ProductName + c.ProductID + ".jpg", Convert.FromBase64String(base64));
                c.ProductImage = "/Image/" + c.ProductName + c.ProductID;
                cm.ProductUpdate(c);
            }
            else
            {
                string base64 = c.ProductImage.Replace("data:image/jpeg;base64,", "");
                System.IO.File.WriteAllBytes("C:\\Users\\90535\\Desktop\\projects\\ASP .NET\\ECommerce_Base\\ECommerce_Base\\Image\\" + c.ProductName + c.ProductID + ".jpg", Convert.FromBase64String(base64));
                c.ProductImage = "/Image/" + c.ProductName + c.ProductID;
                cm.ProductAddBL(c);
            }
            return Json(true, JsonRequestBehavior.AllowGet);
        }
    }
}