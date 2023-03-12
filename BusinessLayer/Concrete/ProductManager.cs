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
    public class ProductManager : IProductService
    {

        IProductDal _productDal;

        public ProductManager(IProductDal productDal)
        {
            _productDal = productDal;
        }

        public void ProductAddBL(Product product)
        {
            _productDal.Insert(product);
        }

        public void ProductDelete(Product product)
        {
            _productDal.Delete(product);
        }

        public void ProductUpdate(Product product)
        {
            _productDal.Update(product);
        }

        public Product GetById(int id)
        {
            return _productDal.Get(x => x.ProductID == id);
        }

        public List<Product> GetList()
        {
            return _productDal.List();
        }
    }
}
