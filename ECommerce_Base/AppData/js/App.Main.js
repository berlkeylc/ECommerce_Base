/*/*/// <reference path="./typings/globals/jquery/index.d.ts" />*/*/

"use strict";

var Enums = {
    WebResultTypes: { Nothing: -1, Message: 1, Html: 2, Redirect: 3, Data: 4, ProposalHtml: 5, LoginUsersSessionTimeout: 6, ResourceCode: 7 },
}

var Account = {
    Login: function (model) {
        AjaxPost("/Account/Login", model, AjaxResults.LoginSucc);
    }

}

var SaveModals = {
    GetCategories: function (model = {}) {
        AjaxPost("/AdminCategory/GetCategories", model, AjaxResults.GetCategoriesSucc);
    },
    AddCategories: function (model = {}) {
        AjaxPost("/AdminCategory/AddCategory", model, AjaxResults.AddCategorySucc);
    },
    EditCategories: function (model = {}) {
        AjaxPost("/AdminCategory/EditCategory", model, AjaxResults.EditCategorySucc);
    },
    CrudCategories: function (model = {}) {
        AjaxPost("/AdminCategory/CrudCategory", model, AjaxResults.CrudCategorySucc);
    },

    GetProducts: function (model = {}) {
        AjaxPost("/AdminProduct/GetProducts", model, AjaxResults.GetProductsSucc);
    },
    CrudProducts: function (model = {}) {
        AjaxPost("/AdminProduct/CrudProduct", model, AjaxResults.CrudProductSucc);
    },

    GetUsers: function (model = {}) {
        AjaxPost("/AdminUser/GetUsers", model, AjaxResults.GetUsersSucc);
    },
    CrudUsers: function (model = {}) {
        AjaxPost("/AdminUser/CrudUser", model, AjaxResults.CrudUserSucc);
    },

    GetOrders: function (model = {}) {
        AjaxPost("/AdminOrder/GetOrders", model, AjaxResults.GetOrdersSucc);
    },
    CrudOrders: function (model = {}) {
        AjaxPost("/AdminOrder/CrudOrder", model, AjaxResults.CrudOrderSucc);
    },

    GetOrderDetails: function (model = {}) {
        AjaxPost("/AdminOrderDetail/GetOrderDetails", model, AjaxResults.GetOrderDetailsSucc);
    },
    CrudOrderDetails: function (model = {}) {
        AjaxPost("/AdminOrderDetail/CrudOrderDetail", model, AjaxResults.CrudOrderDetailSucc);
    },

    GetProductsContainer: function (model = {}) {
        AjaxPost("/AdminProduct/GetProducts", model, AjaxResults.GetProductsContainerSucc);
    },

    GetCarts: function (model = {}) {
        AjaxPost("/Cart/GetCarts", model, AjaxResults.GetCartsSucc);
    },
    CrudCarts: function (model = {}) {
        AjaxPost("/Cart/AddToCart", model, AjaxResults.CrudCartsSucc);
    },
}


function AjaxPost(url, data, fnSuccess, fnError = AjaxResults.Error) {
    try {
        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(data),
            dataType: "json",
            contentType: 'application/json; charset=utf-8',
            async: true,
            success: fnSuccess,// callback
            error: fnError,// callback
        });
    } catch (e) {
        console.error(e);
    }
}

window.onload = function () {

    if (typeof AppParsley == 'undefined') {
        console.log("AppParsley cannot start!");
    }
    else{
        AppParsley.Init();
    }

    if (typeof AppData == 'undefined') {
        console.log("AppData cannot start!");
    }
    else {
        AppData.Init();
    }

    
    
    const fileInput = $("#ProductImage");
    
    // Listen for the change event so we can capture the file
    fileInput.on('change', (e) => {
        // Get a reference to the file
        const file = e.target.files[0];

        // Encode the file using the FileReader API
        const reader = new FileReader();
        reader.onloadend = () => {
            console.log(reader.result);
            $("#ProductImage").attr("value", reader.result);
            // Logs data:<type>;base64,wL2dvYWwgbW9yZ...
        };
        reader.readAsDataURL(file);

    });

    let items = document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })

    setTimeout(myGreeting, 1000);
    function myGreeting() {
        $(".addToCart").on("click", function () {
            var model = {}
            model.ProductID = $(this).closest('.card').find('input').attr('value')
            SaveModals.CrudCarts(model)
            console.log("sepete eklendi..")
        });
    }
    

}