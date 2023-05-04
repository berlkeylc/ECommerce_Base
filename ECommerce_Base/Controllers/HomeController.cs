using ECommerce_Base.Infrastructures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ECommerce_Base.Controllers
{
    public class HomeController : Controller
    {

        UtilityOperation utilityOperation = new UtilityOperation();
        public ActionResult Index()
        {
            return View(utilityOperation.GetProductsOperation());
        }
    }
}