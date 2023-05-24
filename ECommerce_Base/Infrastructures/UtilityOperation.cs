using BusinessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using ECommerce_Base.Models;
using ECommerce_Base.Models.ViewModel;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ECommerce_Base.Infrastructures
{
    public class UtilityOperation
    {
        CategoryManager cm = new CategoryManager(new EFCategoryDal());
        ProductManager pm = new ProductManager(new EFProductDal());
        UserManager um = new UserManager(new EFUserDal());
        OrderManager om = new OrderManager(new EFOrderDal());
        OrderDetailManager odm = new OrderDetailManager(new EFOrderDetailDal());
        CartManager cartm = new CartManager(new EFCartDal());
        CartItemManager cim = new CartItemManager(new EFCartItemDal());

        public List<Category> GetCategoriesOperation()
        {
            return cm.GetList();
        }

        public void CrudCategoryOperation(CRUDCategoryModel arg)
        {
            Category category = new Category();
            category.CategoryID = arg.CategoryID;
            category.CategoryName = arg.CategoryName;
            category.CategoryDescription = arg.CategoryDescription;
            category.CategoryStatus = arg.CategoryStatus;

            if (arg.processCode == "Delete")
            {
                var categoryvalue = cm.GetById(arg.CategoryID);
                cm.CategoryDelete(categoryvalue);
            }
            else if (arg.CategoryID > 0 && arg.processCode == "Update")
            {
                cm.CategoryUpdate(category);
            }
            else
            {
                cm.CategoryAddBL(category);
            }
        }

        public List<ProductViewModel> GetProductsOperation()
        {
            var result =
              (from pl in pm.GetList()
               join cl in cm.GetList() on pl.CategoryID equals cl.CategoryID into t
               from nt in t.DefaultIfEmpty()
               select new ProductViewModel
               {
                   ProductName = pl.ProductName,
                   CategoryID = pl.CategoryID,
                   ProductImage = pl.ProductImage,
                   ProductDescription = pl.ProductDescription,
                   ProductStock = pl.ProductStock,
                   ProductPrice = pl.ProductPrice,
                   ProductID = pl.ProductID,
                   ProductStatus = pl.ProductStatus,
                   CategoryName = nt.CategoryName
               }).ToList();

            return result;
        }

        public void CrudProductOperation(CRUDProductModel arg)
        {
            Product product = new Product();
            product.ProductID = arg.ProductID;
            product.ProductName = arg.ProductName;
            product.ProductImage = arg.ProductImage;
            product.ProductDescription = arg.ProductDescription;
            product.ProductPrice = arg.ProductPrice;
            product.ProductStock = arg.ProductStock;
            product.ProductStatus = arg.ProductStatus;
            product.CategoryID = arg.CategoryID;



            if (arg.processCode == "Delete")
            {
                var productvalue = pm.GetById(product.ProductID);
                pm.ProductDelete(productvalue);
            }
            else if (arg.ProductID > 0 && arg.processCode == "Update")
            {
                convertProductImage(product);
                pm.ProductUpdate(product);
            }
            else
            {
                convertProductImage(product);
                pm.ProductAddBL(product);
            }
        }

        public List<User> GetUsersOperation()
        {
            return um.GetList();
        }

        public User GetUserByUserNameOperation(string session)
        {
            return um.GetByUserName(session);
        }

        public void CrudUserOperation(CRUDUserModel arg)
        {
            if (arg.UserID != null)
            {

                var uservalue = um.GetById(arg.UserID);

                if (arg.processCode == "Delete")
                {
                    um.UserDelete(uservalue);
                }

                else if (arg.UserID > 0 && arg.processCode == "Update")
                {
                    uservalue.UserID = arg.UserID == null ? uservalue.UserID : arg.UserID;
                    uservalue.UserEmail = arg.UserEmail == null ? uservalue.UserEmail : arg.UserEmail;
                    uservalue.UserName = arg.UserName == null ? uservalue.UserName : arg.UserName;
                    uservalue.UserLastName = arg.UserLastName == null ? uservalue.UserLastName : arg.UserLastName;
                    uservalue.UserFirstName = arg.UserFirstName == null ? uservalue.UserFirstName : arg.UserFirstName;
                    uservalue.UserPassword = arg.UserPassword == null ? uservalue.UserPassword : arg.UserPassword;
                    uservalue.UserAddress = arg.UserAddress == null ? uservalue.UserAddress : arg.UserAddress;
                    uservalue.UserPostalCode = arg.UserPostalCode == null ? uservalue.UserPostalCode : arg.UserPostalCode;
                    uservalue.UserCity = arg.UserCity == null ? uservalue.UserCity : arg.UserCity;
                    uservalue.UserCountry = arg.UserCountry == null ? uservalue.UserCountry : arg.UserCountry;
                    uservalue.UserGender = arg.UserGender == null ? uservalue.UserGender : arg.UserGender;
                    uservalue.UserPhone = arg.UserPhone == null ? uservalue.UserPhone : arg.UserPhone;
                    uservalue.UserStatus = arg.UserStatus == null ? uservalue.UserStatus : arg.UserStatus;

                    um.UserUpdate(uservalue);
                }

                else
                {
                    um.UserAddBL(uservalue);
                }

            }
            //else
            //{
            //    User user = new User();
            //    user.UserID = arg.UserID;
            //    user.UserEmail = arg.UserEmail;
            //    user.UserName = arg.UserName;
            //    user.UserLastName = arg.UserLastName;
            //    user.UserFirstName = arg.UserFirstName;
            //    user.UserPassword = arg.UserPassword;
            //    user.UserAddress = arg.UserAddress;
            //    user.UserPostalCode = arg.UserPostalCode;
            //    user.UserCity = arg.UserCity;
            //    user.UserCountry = arg.UserCountry;
            //    user.UserGender = arg.UserGender;
            //    user.UserPhone = arg.UserPhone;
            //    user.UserStatus = arg.UserStatus;
            //    um.UserAddBL(user);
            //}
        }

        public List<OrderViewModel> GetOrdersOperation()
        {
            var result =
              (from pl in om.GetList()
               join cl in um.GetList() on pl.UserID equals cl.UserID into t
               from nt in t.DefaultIfEmpty()
               select new OrderViewModel
               {
                   OrderID = pl.OrderID,
                   UserFirstName = nt.UserFirstName,
                   UserLastName = nt.UserLastName,
                   UserID = nt.UserID,
                   OrderDate = pl.OrderDate.ToString("yyyy-MM-dd"),
                   OrderRequiredDate = pl.OrderRequiredDate.ToString("yyyy-MM-dd"),
                   OrderShippedDate = pl.OrderShippedDate.ToString("yyyy-MM-dd"),
                   OrderFreight = pl.OrderFreight,
                   OrderIsDelivered = pl.OrderIsDelivered,
                   OrderStatus = pl.OrderStatus,
               }).ToList();

            return result;
        }

        public void CrudOrderOperation(CRUDOrderModel arg)
        {
            Order order = new Order();
            order.OrderID = arg.OrderID;
            order.OrderDate = DateTime.Now;
            order.OrderRequiredDate = DateTime.Now.AddDays(3);
            order.OrderShippedDate = DateTime.Now;
            order.OrderFreight = arg.OrderFreight;
            order.OrderIsDelivered = arg.OrderIsDelivered;
            order.OrderStatus = arg.OrderStatus;
            order.UserID = arg.UserID;

            if (arg.processCode == "Delete")
            {
                var ordervalue = om.GetById(order.OrderID);
                om.OrderDelete(ordervalue);
            }
            else if (arg.OrderID > 0 && arg.processCode == "Update")
            {
                om.OrderUpdate(order);
            }
            else
            {
               om.OrderAddBL(order);
            }
        }

        public List<OrderDetailViewModel> GetOrderDetailsOperation()
        {
            var result =
              (from od in odm.GetList()
               join t2 in pm.GetList() on od.ProductID equals t2.ProductID into t
               from m in t.DefaultIfEmpty()
               join o in om.GetList() on od.OrderID equals o.OrderID into s
               from nt in s.DefaultIfEmpty()
               select new OrderDetailViewModel
               {
                   UserFirstName = nt.User.UserFirstName,
                   UserLastName = nt.User.UserLastName,
                   UserEmail = nt.User.UserEmail,
                   UserName = nt.User.UserName,
                   UserPhone = nt.User.UserPhone,
                   UserAddress = nt.User.UserAddress,
                   UserCity = nt.User.UserCity,
                   UserPostalCode = nt.User.UserPostalCode,
                   OrderDate = nt.OrderDate.ToString("yyyy-MM-dd"),
                   OrderID = nt.OrderID,
                   OrderRequiredDate = nt.OrderRequiredDate.ToString("yyyy-MM-dd"),
                   OrderFreight = nt.OrderFreight,
                   OrderIsDelivered = nt.OrderIsDelivered,
                   ProductID = m.ProductID,
                   ProductImage = m.ProductImage,
                   ProductName = m.ProductName,
                   ProductPrice = m.ProductPrice,
                   OrderDetailQuantity = od.OrderDetailQuantity,
                   OrderDetailDiscount = od.OrderDetailDiscount,
                   OrderDetailUnitPrice = od.OrderDetailUnitPrice,
                   OrderDetailStatus = od.OrderDetailStatus,
                   OrderDetailID = od.OrderDetailID,
               }).ToList();

            return result;
        }

        public void CrudOrderDetailOperation(CRUDOrderDetailModel arg)
        {
            OrderDetail orderDetail = new OrderDetail();
            orderDetail.OrderDetailID = arg.OrderDetailID;
            orderDetail.OrderDetailDiscount = arg.OrderDetailDiscount;
            orderDetail.OrderDetailQuantity = arg.OrderDetailQuantity;
            orderDetail.OrderDetailUnitPrice = arg.OrderDetailUnitPrice;
            orderDetail.OrderDetailStatus = arg.OrderDetailStatus;
            orderDetail.OrderID = arg.OrderID;
            orderDetail.ProductID = arg.ProductID;

            if (arg.processCode == "Delete")
            {
                var orderDetailvalue = odm.GetById(orderDetail.OrderDetailID); //ProductID , OrderID C omposite key
                odm.OrderDetailDelete(orderDetailvalue);
            }
            else if (arg.processCode == "Update")
            {
                odm.OrderDetailUpdate(orderDetail);
            }
            else
            {
                odm.OrderDetailAddBL(orderDetail);
            }
        }

        public List<CartViewModel> GetCartsOperation(string session)
        {
            User user = um.GetByUserName(session);
            var cart = cartm.GetByUserId(user.UserID);
            if (cart != null)
            {
                var result =
              (from pl in cim.GetByCartID(cart.CartID)
               join cl in pm.GetList() on pl.ProductID equals cl.ProductID into t
               from nt in t.DefaultIfEmpty()
               select new CartViewModel
               {
                   CartItemQuantity = pl.CartItemQuantity,
                   ProductPrice = nt.ProductPrice,
                   ProductName = nt.ProductName,
                   ProductImage = nt.ProductImage,
                   ProductID = nt.ProductID
               }).ToList();

                return result;
            }
            else
            {
                return null;
            }
           
        }

        public void CrudCartOperation(CartItemModel arg, string session)
        {
            User user = um.GetByUserName(session);
            var productvalue = pm.GetById(arg.ProductID);
            var cart = cartm.GetByUserId(user.UserID);

            if (cart == null)
            {
                cart = new Cart();
                cart.UserID = user.UserID;
                cartm.CartAddBL(cart);
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
                if (arg.processCode == "Increase")
                {
                    cartItem.CartItemQuantity++;
                    cim.CartItemUpdate(cartItem);
                }
                else if (arg.processCode == "Decrease")
                {
                    cartItem.CartItemQuantity--;
                    if (cartItem.CartItemQuantity < 0 || cartItem.CartItemQuantity == 0)
                    {
                        cartItem.CartItemQuantity = 0;
                        cim.CartItemDelete(cartItem);
                    }
                    else
                    {
                        cim.CartItemUpdate(cartItem);
                    }
                }
            }
        }

        public List<OrderDetailViewModel> GetOrderDetailsUserOperation(string session)
        {
            User user = um.GetByUserName(session);
            var order = om.GetByUserID(user.UserID).LastOrDefault();

            if(order != null)
            {
                var result =
               (from od in odm.GetByOrderID(order.OrderID)
                join t2 in pm.GetList() on od.ProductID equals t2.ProductID into t
                from m in t.DefaultIfEmpty()
                join o in om.GetList() on od.OrderID equals o.OrderID into s
                from nt in s.DefaultIfEmpty()
                select new OrderDetailViewModel
                {
                    UserFirstName = nt.User.UserFirstName,
                    UserLastName = nt.User.UserLastName,
                    UserEmail = nt.User.UserEmail,
                    UserName = nt.User.UserName,
                    UserPhone = nt.User.UserPhone,
                    UserAddress = nt.User.UserAddress,
                    UserCity = nt.User.UserCity,
                    UserPostalCode = nt.User.UserPostalCode,
                    OrderDate = nt.OrderDate.ToString("yyyy-MM-dd"),
                    OrderID = nt.OrderID,
                    OrderRequiredDate = nt.OrderRequiredDate.ToString("yyyy-MM-dd"),
                    OrderFreight = nt.OrderFreight,
                    OrderIsDelivered = nt.OrderIsDelivered,
                    ProductID = m.ProductID,
                    ProductImage = m.ProductImage,
                    ProductName = m.ProductName,
                    ProductPrice = m.ProductPrice,
                    OrderDetailQuantity = od.OrderDetailQuantity,
                    OrderDetailDiscount = od.OrderDetailDiscount,
                    OrderDetailUnitPrice = od.OrderDetailUnitPrice,
                    OrderDetailStatus = od.OrderDetailStatus,
                    OrderDetailID = od.OrderDetailID,
                }).ToList();

                return result;
            }
            else
            {
                return null;
            }
            
        }

        public void CrudOrderDetailUserOperation(string session)
        {
            User user = um.GetByUserName(session);

            var cart = cartm.GetList().SingleOrDefault(x => x.UserID == user.UserID);
            var cartItems = cim.GetByCartID(cart.CartID);

            if(cartItems != null)
            {
                Order orderTemp = new Order();
                //orderTemp.OrderID = arg.OrderID;
                orderTemp.OrderDate = DateTime.Now;
                orderTemp.OrderRequiredDate = DateTime.Now.AddDays(3);
                orderTemp.OrderShippedDate = DateTime.Now;
                //orderTemp.OrderFreight = arg.OrderFreight;
                //orderTemp.OrderIsDelivered = arg.OrderIsDelivered;
                //orderTemp.OrderStatus = arg.OrderStatus;
                orderTemp.UserID = user.UserID;
                om.OrderAddBL(orderTemp);

                var order = om.GetByUserID(user.UserID).LastOrDefault();

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
            }
            

        }

        public void convertProductImage(Product product)
        {
            string base64 = product.ProductImage.Replace("data:image/jpeg;base64,", "");
            System.IO.File.WriteAllBytes("C:\\Users\\90535\\Desktop\\projects\\ASP .NET\\ECommerce_Base\\ECommerce_Base\\Image\\" + product.ProductName + product.ProductID + ".jpg", Convert.FromBase64String(base64));
            product.ProductImage = "/Image/" + product.ProductName + product.ProductID;
        }



    }
}