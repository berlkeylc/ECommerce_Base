using BusinessLayer.Abstract;
using DataAccessLayer.Abstract;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Concrete
{
    public class CartItemManager : ICartItemService
    {

        ICartItemDal _cartItemDal;

        public CartItemManager(ICartItemDal cartItemDal)
        {
            _cartItemDal = cartItemDal;
        }

        public void CartItemAddBL(CartItem cartItem)
        {
            _cartItemDal.Insert(cartItem);
        }

        public void CartItemDelete(CartItem cartItem)
        {
            _cartItemDal.Delete(cartItem);
        }

        public void CartItemUpdate(CartItem cartItem)
        {
            _cartItemDal.Update(cartItem);
        }

        public CartItem GetById(int id)
        {
            return _cartItemDal.Get(x => x.CartItemID == id);
        }

        public List<CartItem> GetList()
        {
            return _cartItemDal.List();
        }
    }
}
