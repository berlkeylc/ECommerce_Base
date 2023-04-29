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
    public class CartManager : ICartService
    {

        ICartDal _cartDal;

        public CartManager(ICartDal cartDal)
        {
            _cartDal = cartDal;
        }

        public void CartAddBL(Cart cart)
        {
            _cartDal.Insert(cart);
        }

        public void CartDelete(Cart cart)
        {
            _cartDal.Delete(cart);
        }

        public void CartUpdate(Cart cart)
        {
            _cartDal.Update(cart);
        }

        public Cart GetById(int id)
        {
            return _cartDal.Get(x => x.CartID == id);
        }

        public Cart GetByUserId(int userID)
        {
            return _cartDal.Get(x => x.UserID == userID);
        }

        public List<Cart> GetList()
        {
            return _cartDal.List();
        }
    }
}
