using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using static ECommerce_Base.Infrastructures.Enums;

namespace ECommerce_Base.Models
{
    public class WebResult
    {
        public string Url { get; set; }
        public WebResultTypes Type { get; set; } = WebResultTypes.Nothing;

        // boxing
        public object Data { get; set; }

        public string Message { get; set; }
    }
}