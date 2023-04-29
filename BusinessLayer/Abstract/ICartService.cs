using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Abstract
{
    public interface ICartService
    {
        List<Cart> GetList();
        void CartAddBL(Cart cart);
        Cart GetById(int id);
        Cart GetByUserId(int userID);
        void CartDelete(Cart cart);
        void CartUpdate(Cart cart);
    }
}
