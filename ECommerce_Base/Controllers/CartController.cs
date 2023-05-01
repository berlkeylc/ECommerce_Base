using BusinessLayer.Concrete;
using DataAccessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using ECommerce_Base.Models;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace ECommerce_Base.Controllers
{
    public class CartController : Controller
    {
        // GET: Cart
        //HttpCookie Cookie = new HttpCookie("CartModel");
        //CartModel cart = new CartModel();
        ProductManager pm = new ProductManager(new EFProductDal());
        CartManager cm = new CartManager(new EFCartDal());
        CartItemManager cim = new CartItemManager(new EFCartItemDal());
        UserManager um = new UserManager(new EFUserDal());
        Context c = new Context();

        [Authorize]
        public ActionResult Index()
        {
            //int ProductID = int.Parse(Cookie?["ProductID"]);
            //var productvalue = pm.GetById(ProductID);
            //cart.Product = productvalue;
            //cart.Quantity = int.Parse(Cookie?["Quantity"]);
            
            return View();
        }

        [HttpPost]
        public ActionResult AddtoCart(CartItemModel px)
        {
           
           // CartItem cartItem = new CartItem();
            User user = um.GetByUserName(Session["UserName"].ToString());
            var productvalue = pm.GetById(px.ProductID);
            var cart = cm.GetByUserId(user.UserID);

            if(cart == null)
            {
                cart = new Cart();
                cart.UserID= user.UserID;
                cm.CartAddBL(cart);
            }

            var cartItem = cim.GetList().SingleOrDefault(
           c => c.CartID == cart.CartID
           && c.ProductID == productvalue.ProductID);

            if (cartItem == null)
            {
                cartItem = new CartItem();
                cartItem.ProductID = productvalue.ProductID;
                cartItem.CartItemQuantity += 1;
                cartItem.CartID = cart.CartID;
                cim.CartItemAddBL(cartItem);
            }
            else
            {
                if (px.processCode == "Increase")
                {
                    cartItem.CartItemQuantity++;
                    cim.CartItemUpdate(cartItem);
                }
                else if (px.processCode == "Decrease")
                {
                    cartItem.CartItemQuantity--;
                    if (cartItem.CartItemQuantity < 0)
                    {
                        cartItem.CartItemQuantity = 0;
                    }
                    cim.CartItemUpdate(cartItem);
                }
            }
            

            // var cartItemValues = cim.GetList();
            //if (Response.Cookies["CartModel"] != null)
            //{
            //    //Cookie nesnesi oluşturuyoruz.

            //    //Cookie bilgilerini tanımlıyoruz.
            //    Cookie["ProductID"] = cart.Product.ProductID.ToString();
            //    Cookie["Quantity"] = cart.Quantity.ToString();
            //    //Cookie'nin tutulacak süresini belirtiyoruz.
            //    //Cookie.Expires = DateTime.Now.AddMinutes(1);
            //    //Cookie'yi ekleyerek, fiziksel olarak oluşturuyoruz.
            //    Response.Cookies.Add(Cookie);
            //}

            return RedirectToAction("GetProducts","Product");
        }

        [HttpPost]
        [Authorize]
        public JsonResult GetCarts()
        {
            
            List<CartItemModel> cartItemList = new List<CartItemModel>();
            User user = um.GetByUserName(Session["UserName"].ToString());
            var cart = cm.GetByUserId(user.UserID);
            var cartItemValues = cim.GetList();
            var cartItemValue2 = cim.GetList().SingleOrDefault(
          c => c.CartItemID == 1);
            if (cart !=null) {
                foreach (CartItem p in cartItemValues)
                {
                    if (p.CartID == cart.CartID)
                    {
                        CartItemModel temp = new CartItemModel();
                        temp.ProductID = p.ProductID;
                        temp.CartID = p.CartID;
                        temp.CartItemQuantity = p.CartItemQuantity;
                        temp.CartItemID = p.CartItemID;

                        cartItemList.Add(temp);
                    }

                }
            }
            
            var result =
               (from pl in cartItemList
                join cl in c.Products on pl.ProductID equals cl.ProductID into t
                from nt in t.DefaultIfEmpty()
                select new
                {
                    pl.CartItemQuantity,
                    nt.ProductPrice,
                    nt.ProductName,
                    nt.ProductImage,
                    nt.ProductID
                }).ToList();
            CartItemDto asd = new CartItemDto();
            //asd = result;
            return Json(result, JsonRequestBehavior.AllowGet);
        }

    }
}