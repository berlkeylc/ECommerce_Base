using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ECommerce_Base.Infrastructures
{
    public class Enums
    {
        public enum WebResultTypes
        {
         
            Nothing = -1,

            Message = 1,

            Html = 2,

            Redirect = 3,

            Data = 4,
        }
    }
}