using DataAccessLayer.Abstract;
using DataAccessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Concrete
{
    public static class CacheManager
    {
        static readonly CategoryManager cm = new CategoryManager(new EFCategoryDal());
        static readonly Context c = new Context();
        public static List<Category> GetAllCategories()
        {
            //ICategoryDal _categoryDal;

            //return _categoryDal.List();
            var result = (from s in c.Categories
                          select s).ToList();

            return result;
        }
    }
}
