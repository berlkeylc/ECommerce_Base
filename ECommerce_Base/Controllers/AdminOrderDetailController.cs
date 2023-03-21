﻿using BusinessLayer.Concrete;
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
    public class AdminOrderDetailController : Controller
    {
        // GET: AdminOrderDetail
        OrderDetailManager cm = new OrderDetailManager(new EFOrderDetailDal());
        ProductManager cmp = new ProductManager(new EFProductDal());

        Context c = new Context();
        public ActionResult Index()
        {
            var orderDetailvalues = cm.GetList();
            return View(orderDetailvalues);
        }

        [HttpPost]
        public JsonResult GetOrderDetails()
        {
            var orderDetailvalues = cm.GetList();
            List<CRUDOrderDetailModel> orderDetailList = new List<CRUDOrderDetailModel>();
            foreach (OrderDetail p in orderDetailvalues)
            {
                CRUDOrderDetailModel temp = new CRUDOrderDetailModel();
                temp.OrderDetailID = p.OrderDetailID;
                temp.OrderDetailDiscount = p.OrderDetailDiscount;
                temp.OrderDetailQuantity = p.OrderDetailQuantity;
                temp.OrderDetailUnitPrice = p.OrderDetailUnitPrice;
                temp.OrderDetailStatus = p.OrderDetailStatus;
                temp.OrderID = p.OrderID;
                temp.ProductID = p.ProductID;
                orderDetailList.Add(temp);
            }

            var productvalues = cmp.GetList();
            List<CRUDProductModel> productList = new List<CRUDProductModel>();
            foreach (Product p in productvalues)
            {
                CRUDProductModel temp = new CRUDProductModel();
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
               (from od in orderDetailList
                join t2 in productList on od.ProductID equals t2.ProductID into t
                from m in t.DefaultIfEmpty()
                join o in c.Orders on od.OrderID equals o.OrderID into s
                from nt in s.DefaultIfEmpty()
                select new
                {
                    nt.User.UserFirstName,
                    nt.User.UserLastName,
                    nt.User.UserEmail,
                    nt.User.UserName,
                    nt.User.UserPhone,
                    nt.User.UserAddress,
                    nt.User.UserCity,
                    nt.User.UserPostalCode,
                    OrderDate = nt.OrderDate.ToString("yyyy-MM-dd"),
                    nt.OrderID,
                    OrderRequiredDate = nt.OrderRequiredDate.ToString("yyyy-MM-dd"),
                    nt.OrderFreight,
                    nt.OrderIsDelivered,
                    m.ProductID,
                    m.ProductName,
                    m.ProductPrice,
                    od.OrderDetailQuantity,
                    od.OrderDetailDiscount,
                    od.OrderDetailUnitPrice,
                    od.OrderDetailStatus,
                    od.OrderDetailID,
                }).ToList();
            //var result =
            //   (from od in orderDetailList
            //    join pr in c.Products on od.ProductID equals pr.ProductID
            //    join or in c.Orders on od.OrderID equals or.OrderID into s
            //    select new
            //    {
            //        pr

            //    }).ToList();

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult CrudOrderDetail(CRUDOrderDetailModel p)
        {
            OrderDetail c = new OrderDetail();
            c.OrderDetailID= p.OrderDetailID;
            c.OrderDetailDiscount = p.OrderDetailDiscount;
            c.OrderDetailQuantity = p.OrderDetailQuantity;
            c.OrderDetailUnitPrice = p.OrderDetailUnitPrice;
            c.OrderDetailStatus = p.OrderDetailStatus;
            c.OrderID = p.OrderID;
            c.ProductID = p.ProductID;

            if (p.processCode == "Delete")
            {
                var orderDetailvalue = cm.GetById(p.OrderDetailID); //ProductID , OrderID C omposite key
                //OrderDetail prdct = new OrderDetail();
                //prdct.OrderDetailID = orderDetailvalue.OrderDetailID;
                //prdct.CategoryID = orderDetailvalue.CategoryID;
                //prdct.OrderDetailName = orderDetailvalue.OrderDetailName;
                //prdct.OrderDetailDescription = orderDetailvalue.OrderDetailDescription;
                //prdct.OrderDetailPrice = orderDetailvalue.OrderDetailPrice;
                //prdct.OrderDetailStock = orderDetailvalue.OrderDetailStock;
                //prdct.OrderDetailStatus = orderDetailvalue.OrderDetailStatus;


                cm.OrderDetailDelete(orderDetailvalue);
            }
            else if (p.processCode == "Update")
            {
                cm.OrderDetailUpdate(c);
            }
            else
            {
                cm.OrderDetailAddBL(c);
            }
            return Json(true, JsonRequestBehavior.AllowGet);
        }
    }
}