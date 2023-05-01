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
    public class OrderDetailController : Controller
    {
        // GET: OrderDetail

        OrderManager om = new OrderManager(new EFOrderDal());
        OrderDetailManager odm = new OrderDetailManager(new EFOrderDetailDal());
        CartItemManager cim = new CartItemManager(new EFCartItemDal());
        ProductManager pm = new ProductManager(new EFProductDal());
        UserManager um = new UserManager(new EFUserDal());
        CartManager cm = new CartManager(new EFCartDal());

        Context c = new Context();
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [Authorize]
        public JsonResult CrudOrderDetail(CRUDOrderDetailModel p)
        {
            
            User user = um.GetByUserName(Session["UserName"].ToString());
            //var orderDetails = odm.GetByOrderID(p.OrderID);
            var order = om.GetByUserID(user.UserID).LastOrDefault();
            var cart = cm.GetList().SingleOrDefault(x => x.UserID == user.UserID);
            var cartItems = cim.GetByCartID(cart.CartID);

            cartItems.ForEach(cartItem => {
                OrderDetail orderDetail = new OrderDetail();
                //orderDetail.OrderDetailID = p.OrderDetailID;
                //orderDetail.OrderDetailDiscount = p.OrderDetailDiscount;
                orderDetail.OrderDetailQuantity = cartItem.CartItemQuantity;
                orderDetail.OrderDetailUnitPrice = pm.GetById(cartItem.ProductID).ProductPrice;
                //orderDetail.OrderDetailStatus = p.OrderDetailStatus;
                orderDetail.OrderID = order.OrderID;
                orderDetail.ProductID = cartItem.ProductID;

                
                    odm.OrderDetailAddBL(orderDetail);
                cim.CartItemDelete(cartItem);
            });

            
            return Json(true, JsonRequestBehavior.AllowGet);
        }

        [Authorize]
        public JsonResult GetOrderDetail()
        {
            User user = um.GetByUserName(Session["UserName"].ToString());
            //var orderDetails = odm.GetByOrderID(p.OrderID);
            var order = om.GetByUserID(user.UserID).LastOrDefault();
            var orderDetailvalues = odm.GetByOrderID(order.OrderID);
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

            var productvalues = pm.GetList();
            List<CRUDProductModel> productList = new List<CRUDProductModel>();
            foreach (Product p in productvalues)
            {
                CRUDProductModel temp = new CRUDProductModel();
                temp.ProductID = p.ProductID;
                temp.ProductStatus = p.ProductStatus;
                temp.ProductStock = p.ProductStock;
                temp.ProductPrice = p.ProductPrice;
                temp.ProductName = p.ProductName;
                temp.ProductImage= p.ProductImage;
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
                    m.ProductImage,
                    m.ProductName,
                    m.ProductPrice,
                    od.OrderDetailQuantity,
                    od.OrderDetailDiscount,
                    od.OrderDetailUnitPrice,
                    od.OrderDetailStatus,
                    od.OrderDetailID,
                }).ToList();

            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}