using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Abstract
{
    public interface ICartItemService
    {
        List<CartItem> GetList();
        void CartItemAddBL(CartItem cartItem);
        CartItem GetById(int id);
        void CartItemDelete(CartItem cartItem);
        void CartItemUpdate(CartItem cartItem);
    }
}
