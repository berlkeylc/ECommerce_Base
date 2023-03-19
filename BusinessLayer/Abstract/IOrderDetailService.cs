using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Abstract
{
    public interface IOrderDetailService
    {
        List<OrderDetail> GetList();
        void OrderDetailAddBL(OrderDetail orderDetail);
        OrderDetail GetById(int id);
        void OrderDetailDelete(OrderDetail orderDetail);
        void OrderDetailUpdate(OrderDetail orderDetail);
    }
}
