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
            /// <summary>
            /// Set edilmemiş
            /// </summary>
            Nothing = -1,

            /// <summary>
            /// Ekranda gösterilecek mesajdır
            /// </summary>
            Message = 1,

            /// <summary>
            /// Ekrana basılacak Html ifadedir
            /// </summary>
            Html = 2,

            /// <summary>
            /// Başka sayfaya yönlendirme yapılacağını belirtir
            /// </summary>
            Redirect = 3,

            /// <summary>
            /// İşlem sonucundaki datayı döndürür
            /// </summary>
            Data = 4,

            /// <summary>
            /// Ekrana basılacak Html ifadedir. Quick için eklendi
            /// </summary>
            ProposalHtml = 5,

            /// <summary>
            /// Login olan kullanıcının timeout olduğu belirtir
            /// </summary>
            LoginUsersSessionTimeout = 6,

            /// <summary>
            /// Resource kodunu döndüğüne dair flag
            /// </summary>
            ResourceCode = 7,

            /// <summary>
            /// Yarım kalan işlemleri devam ettirmek için kullanılabilir.
            /// </summary>
            IntermediateProcess = 8,

            /// <summary>
            /// Client tarafında hint uyarı mesajları
            /// </summary>
            WarningMessage = 9
        }
    }
}