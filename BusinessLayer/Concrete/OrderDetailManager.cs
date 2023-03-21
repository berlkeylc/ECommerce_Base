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
    public class OrderDetailManager : IOrderDetailService
    {
        IOrderDetailDal _orderDetailDal;

        public OrderDetailManager(IOrderDetailDal orderDetailDal)
        {
            _orderDetailDal = orderDetailDal;
        }

        public void OrderDetailAddBL(OrderDetail orderDetail)
        {
            _orderDetailDal.Insert(orderDetail);
        }

        public void OrderDetailDelete(OrderDetail orderDetail)
        {
            _orderDetailDal.Delete(orderDetail);
        }

        public void OrderDetailUpdate(OrderDetail orderDetail)
        {
            _orderDetailDal.Update(orderDetail);
        }

        public OrderDetail GetById(int id)
        {
            return _orderDetailDal.Get(x => x.OrderDetailID == id);
        }

        public List<OrderDetail> GetList()
        {
            return _orderDetailDal.List();
        }

    }
}
