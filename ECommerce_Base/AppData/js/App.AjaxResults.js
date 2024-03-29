﻿var AjaxResults = {

    LoginSucc: function (result) {

        switch (result.Type) {
            case Enums.WebResultTypes.Redirect:
                document.location.href = result.Url;
                break;
            case Enums.WebResultTypes.Message:
                alert(result.Message);
                document.location.href = result.Url;
            default:
        }
    },

    RegisterSucc: function (result) {

        switch (result.Type) {
            case Enums.WebResultTypes.Redirect:
                document.location.href = result.Url;
                break;
            case Enums.WebResultTypes.Message:
                alert(result.Message);
            default:
        }
    },

    LogoutSucc: function (result) {

        switch (result.Type) {
            case Enums.WebResultTypes.Redirect:
                document.location.href = result.Url;
                break;
            case Enums.WebResultTypes.Message:
                alert(result.Message);
            default:
        }
    },

    Error: function (result) {

    },

    AddCategorySucc: function (result) {
        if (result == "true") {
            SaveModals.GetCategories();
        }
        else {
            console.log("Kayıt basarıyla eklenemedi")
        }
    },

    EditCategorySucc: function (result) {
        if (result == "true") {
            SaveModals.GetCategories();
        }
        else {
            console.log("Kayıt basarıyla güncellenemedi")
        }

    },

    CrudCategorySucc: function (result) {
        if (result == "true") {
            SaveModals.GetCategories();
        }
        else {
            console.log("İşlem Başarısız")
        }

    },

    GetCategoriesSucc: function (result) {
        
        $('#CategoriesTable').DataTable({
            data: result,
            columns: [
                { title: "CategoryID", "data": 'CategoryID'},
                { title: "CategoryName", data: 'CategoryName' },
                { title: "CategoryStatus", data: 'CategoryStatus'},
                { title: "CategoryDescription", data: 'CategoryDescription'},
                {
                    "data": null, "title": "Delete",
                    "render": function (data, type, row) {
                        return '<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="deleteModalHelper(this)">Delete</button>';
                    }
                },
                {
                    "data": null,"title": "Update",
                    "render": function (data, type, row) {
                        return '<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="fillInputs(this)">Update</button>';
                    }
                },
                
            ],
            'columnDefs': [
                { 'targets': 0, 'createdCell': function (td) { $(td).attr('name', 'CategoryID'); } },
                { 'targets': 1, 'createdCell': function (td) { $(td).attr('name', 'CategoryName'); } },
                { 'targets': 2, 'createdCell': function (td) { $(td).attr('name', 'CategoryStatus'); } },
                { 'targets': 3, 'createdCell': function (td) { $(td).attr('name', 'CategoryDescription'); } }
            ],

        });
    },

    CrudProductSucc: function (result) {
        if (result == "true") {
            SaveModals.GetProducts();
        }
        else {
            console.log("İşlem Başarısız")
        }

    },

    GetProductsSucc: function (result) {

        $('#ProductsTable').DataTable({
            data: result,
            columns: [
                { title: "ProductID", data: 'ProductID' },
                { title: "ProductName", data: 'ProductName' },
                {
                    "data": null, title: "ProductImage", 
                    "render": function (data, type, row) {
                        //return `<img src="${row.ProductImage}.jpg" width="50" height="50">`;
                        return ` <div style="overflow: hidden;" class="d-flex align-items-center justify-content-center" >
                            <img src="${row.ProductImage}.jpg" class="rounded mx-auto d-block" height="50px" >
                        </div>`;
                        //return `
                        //    <img src="${row.ProductImage}.jpg" class="w-100 h-100 rounded mx-auto d-block" width="50" height="50">
                        //`;
                    }
                },
                { title: "CategoryName", data: 'CategoryName' },
                { title: "ProductPrice", data: 'ProductPrice' },
                { title: "ProductStock", data: 'ProductStock' },
                { title: "ProductStatus", data: 'ProductStatus' },
                { title: "ProductDescription", data: 'ProductDescription' },
                {
                    "data": null, "name": "buttonColumn",
                    "render": function (data, type, row) {
                        return '<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="deleteModalHelper(this)">Delete</button>';
                    }
                },
                {
                    "data": null, "name": "buttonColumn",
                    "render": function (data, type, row) {
                        return '<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal2" onclick="fillInputs(this)">Update</button>';
                    }
                }
            ],
            'columnDefs': [
                { 'targets': 0, 'createdCell': function (td) { $(td).attr('name', 'ProductID'); } },
                { 'targets': 1, 'createdCell': function (td) { $(td).attr('name', 'ProductName'); } },
                { 'targets': 2, 'createdCell': function (td) { $(td).attr('name', 'ProductImage'); } },
                { 'targets': 3, 'createdCell': function (td) { $(td).attr('name', 'CategoryName'); } },
                { 'targets': 4, 'createdCell': function (td) { $(td).attr('name', 'ProductPrice'); } },
                { 'targets': 5, 'createdCell': function (td) { $(td).attr('name', 'ProductStock'); } },
                { 'targets': 6, 'createdCell': function (td) { $(td).attr('name', 'ProductStatus'); } },
                { 'targets': 7, 'createdCell': function (td) { $(td).attr('name', 'ProductDescription'); } }
            ],
        });
    },

    CrudUserSucc: function (result) {
        if (result == "true") {
            SaveModals.GetUsers();
        }
        else {
            console.log("İşlem Başarısız")
        }

    },

    GetUsersSucc: function (result) {

        $('#UsersTable').DataTable({
            data: result,
            scrollX: true,
            columns: [
                { title: "UserID", data: 'UserID' },
                { title: "UserName", data: 'UserName' },
                { title: "UserEmail", data: 'UserEmail' },
                { title: "UserFirstName", data: 'UserFirstName' },
                { title: "UserLastName", data: 'UserLastName' },
                { title: "UserPassword", data: 'UserPassword' },
                { title: "UserAddress", data: 'UserAddress' },
                { title: "UserPostalCode", data: 'UserPostalCode' },
                { title: "UserCity", data: 'UserCity' },
                { title: "UserCountry", data: 'UserCountry' },
                { title: "UserGender", data: 'UserGender' },
                { title: "UserPhone", data: 'UserPhone' },
                { title: "UserRole", data: 'UserRole' },
                { title: "UserStatus", data: 'UserStatus' },
                {
                    "data": null, "name": "buttonColumn",
                    "render": function (data, type, row) {
                        return '<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="deleteModalHelper(this)">Delete</button>';
                    }
                },
                {
                    "data": null, "name": "buttonColumn",
                    "render": function (data, type, row) {
                        return '<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal3" onclick="fillInputs(this)">Update</button>';
                    }
                }
            ],
            'columnDefs': [
                { 'targets': 0, 'createdCell': function (td) { $(td).attr('name', 'UserID'); } },
                { 'targets': 1, 'createdCell': function (td) { $(td).attr('name', 'UserName'); } },
                { 'targets': 2, 'createdCell': function (td) { $(td).attr('name', 'UserEmail'); } },
                { 'targets': 3, 'createdCell': function (td) { $(td).attr('name', 'UserFirstName'); } },
                { 'targets': 4, 'createdCell': function (td) { $(td).attr('name', 'UserLastName'); } },
                { 'targets': 5, 'createdCell': function (td) { $(td).attr('name', 'UserPassword'); } },
                { 'targets': 6, 'createdCell': function (td) { $(td).attr('name', 'UserAddress'); } },
                { 'targets': 7, 'createdCell': function (td) { $(td).attr('name', 'UserPostalCode'); } },
                { 'targets': 8, 'createdCell': function (td) { $(td).attr('name', 'UserCity'); } },
                { 'targets': 9, 'createdCell': function (td) { $(td).attr('name', 'UserCountry'); } },
                { 'targets': 10, 'createdCell': function (td) { $(td).attr('name', 'UserGender'); } },
                { 'targets': 11, 'createdCell': function (td) { $(td).attr('name', 'UserPhone'); } },
                { 'targets': 12, 'createdCell': function (td) { $(td).attr('name', 'UserRole'); } },
                { 'targets': 13, 'createdCell': function (td) { $(td).attr('name', 'UserStatus'); } }
            ],
        });
    },

    CrudOrderSucc: function (result) {
        if (result == "true") {
            SaveModals.GetOrders();
        }
        else {
            console.log("İşlem Başarısız")
        }

    },

    GetOrdersSucc: function (result) {

        $('#OrdersTable').DataTable({
            data: result,
            scrollX: true,
            columns: [
                { title: "OrderID", data: 'OrderID' },
                { title: "UserID", data: 'UserID' },
                { title: "UserFirstName", data: 'UserFirstName' },
                { title: "UserLastName", data: 'UserLastName' },
                { title: "OrderDate", data: 'OrderDate' },
                { title: "OrderRequiredDate", data: 'OrderRequiredDate' },
                { title: "OrderShippedDate", data: 'OrderShippedDate' },
                { title: "OrderFreight", data: 'OrderFreight' },
                { title: "OrderIsDelivered", data: 'OrderIsDelivered' },
                { title: "OrderStatus", data: 'OrderStatus' },
                {
                    "data": null, "name": "buttonColumn",
                    "render": function (data, type, row) {
                        return '<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="deleteModalHelper(this)">Delete</button>';
                    }
                },
                {
                    "data": null, "name": "buttonColumn",
                    "render": function (data, type, row) {
                        return '<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal4" onclick="fillInputs(this)">Update</button>';
                    }
                }
            ],
            'columnDefs': [
                { 'targets': 0, 'createdCell': function (td) { $(td).attr('name', 'OrderID'); } },
                { 'targets': 1, 'createdCell': function (td) { $(td).attr('name', 'UserID'); } },
                { 'targets': 2, 'createdCell': function (td) { $(td).attr('name', 'UserFirstName'); } },
                { 'targets': 3, 'createdCell': function (td) { $(td).attr('name', 'UserLastName'); } },
                { 'targets': 4, 'createdCell': function (td) { $(td).attr('name', 'OrderDate'); } },
                { 'targets': 5, 'createdCell': function (td) { $(td).attr('name', 'OrderRequiredDate'); } },
                { 'targets': 6, 'createdCell': function (td) { $(td).attr('name', 'OrderShippedDate'); } },
                { 'targets': 7, 'createdCell': function (td) { $(td).attr('name', 'OrderFreight'); } },
                { 'targets': 8, 'createdCell': function (td) { $(td).attr('name', 'OrderIsDelivered'); } },
                { 'targets': 9, 'createdCell': function (td) { $(td).attr('name', 'OrderStatus'); } },
            ],
        });
    },

    CrudOrderDetailSucc: function (result) {
        if (result == "true") {
            SaveModals.GetOrderDetails();
        }
        else {
            console.log("İşlem Başarısız")
        }

    },

    GetOrderDetailsSucc: function (result) {

        $('#OrderDetailsTable').DataTable({
            data: result,
            scrollX: true,
            columns: [
                { title: "OrderDetailID", data: 'OrderDetailID' },
                { title: "OrderID", data: 'OrderID' },
                { title: "UserFirstName", data: 'UserFirstName' },
                { title: "UserLastName", data: 'UserLastName' },
                { title: "UserName", data: 'UserName' },
                { title: "UserPhone", data: 'UserPhone' },
                { title: "UserAddress", data: 'UserAddress' },
                { title: "UserCity", data: 'UserCity' },
                { title: "UserPostalCode", data: 'UserPostalCode' },
                { title: "OrderDate", data: 'OrderDate' },
                { title: "OrderRequiredDate", data: 'OrderRequiredDate' },
                { title: "ProductID", data: 'ProductID' },
                { title: "ProductName", data: 'ProductName' },
                { title: "OrderDetailQuantity", data: 'OrderDetailQuantity' },
                { title: "OrderDetailUnitPrice", data: 'OrderDetailUnitPrice' },
                { title: "OrderDetailDiscount", data: 'OrderDetailDiscount' },
                { title: "OrderIsDelivered", data: 'OrderIsDelivered' },
                { title: "OrderDetailStatus", data: 'OrderDetailStatus' },
                {
                    "data": null, "name": "buttonColumn",
                    "render": function (data, type, row) {
                        return '<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="deleteModalHelper(this)">Delete</button>';
                    }
                },
                {
                    "data": null, "name": "buttonColumn",
                    "render": function (data, type, row) {
                        return '<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal5" onclick="fillInputs(this)">Update</button>';
                    }
                }
            ],
            'columnDefs': [
                { 'targets': 0, 'createdCell': function (td) { $(td).attr('name', 'OrderDetailID'); } },
                { 'targets': 1, 'createdCell': function (td) { $(td).attr('name', 'OrderID'); } },
                { 'targets': 2, 'createdCell': function (td) { $(td).attr('name', 'UserFirstName'); } },
                { 'targets': 3, 'createdCell': function (td) { $(td).attr('name', 'UserLastName'); } },
                { 'targets': 4, 'createdCell': function (td) { $(td).attr('name', 'UserName'); } },
                { 'targets': 5, 'createdCell': function (td) { $(td).attr('name', 'UserPhone'); } },
                { 'targets': 6, 'createdCell': function (td) { $(td).attr('name', 'UserAddress'); } },
                { 'targets': 7, 'createdCell': function (td) { $(td).attr('name', 'UserCity'); } },
                { 'targets': 8, 'createdCell': function (td) { $(td).attr('name', 'UserPostalCode'); } },
                { 'targets': 9, 'createdCell': function (td) { $(td).attr('name', 'OrderDate'); } },
                { 'targets': 10, 'createdCell': function (td) { $(td).attr('name', 'OrderRequiredDate'); } },
                { 'targets': 11, 'createdCell': function (td) { $(td).attr('name', 'ProductID'); } },
                { 'targets': 12, 'createdCell': function (td) { $(td).attr('name', 'ProductName'); } },
                { 'targets': 13, 'createdCell': function (td) { $(td).attr('name', 'OrderDetailQuantity'); } },
                { 'targets': 14, 'createdCell': function (td) { $(td).attr('name', 'OrderDetailUnitPrice'); } },
                { 'targets': 15, 'createdCell': function (td) { $(td).attr('name', 'OrderDetailDiscount'); } },
                { 'targets': 16, 'createdCell': function (td) { $(td).attr('name', 'OrderIsDelivered'); } },
                { 'targets': 17, 'createdCell': function (td) { $(td).attr('name', 'OrderDetailStatus'); } }
            ],
        });
    },

    GetProductsContainerSucc: function (result) {

        const productsContainer = $("#ProductsContainer")
        $.each(result, function (index, row) {
            const elm = `
                    
                    <div class="card col-3 ms-4" style="width: 18rem;">
                        <input class="form-control" type="hidden" id="ProductID" name="ProductID" value=${row.ProductID} data-filter=${row.CategoryName}>
                        <br/>
                        <div style="height:250px;overflow: hidden;" class="d-flex align-items-center justify-content-center">
                            <img src="${row.ProductImage}.jpg" class="w-100 rounded mx-auto d-block"  >
                        </div>
                        <hr/>
                        <div class="card-body">
                            <h5 class="card-title">${row.ProductName}</h5>
                            <p>${row.CategoryName}</p>
                            <p>Price : ${row.ProductPrice}</p>
                            <div class="d-flex justify-content-center">
                                <button type="button" class="btn btn-secondary" onclick="add2Cart(this)">Add to Cart</button>
                            </div>

                        </div>
                    </div>`
            productsContainer.append(elm)
        });
    },

    GetCartsSucc: function (result) {

        let totalPrices = 0;
        let totalItem = 0;
        const cartsTable = $("#CartsTable").find("tbody")
        cartsTable.empty();
        $.each(result, function (index, row) {
            if (row.CartItemQuantity != 0) {
                const elm = `
                <tr data-productID = "${row.ProductID}">
                    <th>
                        <div style="overflow: hidden;" class="d-flex align-items-center justify-content-center" >
                            <img src="${row.ProductImage}.jpg" class="rounded mx-auto d-block" height="50px" >
                        </div>
                    </th>
                    <td>${row.ProductName}</td>
                    <td name="ProductPrice">${row.ProductPrice}</td>
                    <td name="CartItemQuantity">${row.CartItemQuantity}</td>
                    <td name="CartTotalPrice">${row.ProductPrice * row.CartItemQuantity}</td>
                    <td>
                        <div class="input-group w-auto justify-content-end align-items-center">
                            <input type="button" value="-" class="button-minus border rounded-circle  icon-shape icon-sm mx-1 " data-field="quantity" onclick="decrementCart(event,this)">
                            <input type="text" step="1" max="10" value="${row.CartItemQuantity}" name="quantity" class="quantity-field border-0 text-center w-25" disabled>
                            <input type="button" value="+" class="button-plus border rounded-circle icon-shape icon-sm " data-field="quantity" onclick="incrementCart(event,this)">
                        </div>
                    </td>
                </tr>`
                totalPrices += row.ProductPrice * row.CartItemQuantity
                totalItem += row.CartItemQuantity
                cartsTable.append(elm)
            }
        });
        $("#CartTotalPrice").html(totalPrices)
        if (totalItem > 0) {
            $("#CartBadge").attr("hidden",false).html(totalItem)
        }
        if (totalItem == 0) {
            $("#CartBadge").attr("hidden", true)
        }
        
    },

    CrudCartsSucc: function (result) {
        if (result == "true") {
            SaveModals.GetCarts();
        }
        else {
            console.log("İşlem Başarısız")
        }
    },

    GetCartCheckOutSucc: function (result) {
        const cartCheckOut = $("#CartCheckOut")
        let totalPrices = 0;
        $.each(result, function (index, row) {
            const elm = `
                <li class="d-flex justify-content-between py-2">
                    <p class="px-2">${row.ProductName} x ${row.CartItemQuantity}</p>
                    <p class="px-5">${row.ProductPrice * row.CartItemQuantity}</p>
                </li>
                `
            totalPrices += row.ProductPrice * row.CartItemQuantity
            cartCheckOut.append(elm)
        });
        let elm2 = `
            <li><hr/></li>
            <li class="d-flex justify-content-between py-2">
                  <p class="px-2">Total</p>
                  <p class="px-5">${totalPrices}</p>
            </li>
            <li><hr/></li>
            `
        cartCheckOut.append(elm2)
    },

    GetUserInfoCheckOutSucc: function (result) {
        
        console.log(Object.keys(result))
        $('#CheckOutInfos').find(':input').each(function (index, row) {
            Object.keys(result).forEach(function (element) {
                if (element == $(row).attr("name")) {
                    $(row).attr("value",result[element])
                }
        });
        })
    },

    AddOrderSucc: function (result) {
        if (result == "true") {
            SaveModals.GetOrderDetails();
        }
        else {
            console.log("İşlem Başarısız")
        }
    },

    GetOrderDetailSucc: function (result) {

            var table = $('#OrderTable').DataTable({
            data: result,
            /*scrollX: true,*/
            columns: [
                //{ title: "OrderID", data: 'OrderID' },
                //{ title: "UserID", data: 'UserID' },
               // { title: "UserFirstName", data: 'UserFirstName' },
                //{ title: "UserLastName", data: 'UserLastName' },
                {
                    className: 'dt-control',
                    orderable: false,
                    defaultContent: '',
                },
                //{ title: "OrderID", data: 'OrderID' },
                { title: "OrderDate", data: 'OrderDate' },
                { title: "OrderRequiredDate", data: 'OrderRequiredDate' },
                //{ title: "OrderShippedDate", data: 'OrderShippedDate' },
                { title: "OrderFreight", data: 'OrderFreight' },
                { title: "OrderIsDelivered", data: 'OrderIsDelivered' },
                //{ title: "OrderStatus", data: 'OrderStatus' },
                
                ],
                'createdRow': function (row, data, dataIndex) {
                    $(row).attr('data-OrderID', data.OrderID);
                },
            'columnDefs': [
               // { 'targets': 0, 'createdCell': function (td) { $(td).attr('name', 'OrderID'); } },
               // { 'targets': 1, 'createdCell': function (td) { $(td).attr('name', 'UserID'); } },
               // { 'targets': 2, 'createdCell': function (td) { $(td).attr('name', 'UserFirstName'); } },
               // { 'targets': 3, 'createdCell': function (td) { $(td).attr('name', 'UserLastName'); } },
                //{ 'targets': 1, 'createdCell': function (td) { $(td).attr('name', 'OrderID'); }, },
                { 'targets': 1, 'createdCell': function (td) { $(td).attr('name', 'OrderDate'); } },
                { 'targets': 2, 'createdCell': function (td) { $(td).attr('name', 'OrderRequiredDate'); } },
               // { 'targets': 6, 'createdCell': function (td) { $(td).attr('name', 'OrderShippedDate'); } },
                { 'targets': 3, 'createdCell': function (td) { $(td).attr('name', 'OrderFreight'); } },
                { 'targets': 4, 'createdCell': function (td) { $(td).attr('name', 'OrderIsDelivered'); } },
                //{ 'targets': 9, 'createdCell': function (td) { $(td).attr('name', 'OrderStatus'); } },
            ],
        });

        $('#OrderTable tbody').on('click', 'td.dt-control', function () {
            var tr = $(this).closest('tr');
            console.log(tr.next())
            var row = table.row(tr);

            if (tr.hasClass("shown")) {
                // This row is already open - close it
                while (tr.next().attr("name") == "ProductRow") {
                    tr.next().remove();
                }
                
                tr.removeClass('shown');
            } else {
                // Open this row
                var model = {}
                model.orderID = parseInt(row.data().OrderID)
                SaveModals.GetOrderDetailsByOrderID(model)
            }
        });

        
    },

    GetOrderDetailsByOrderIDSucc: function (result) { 
       
        $.each($("#OrderTable").find('tr'), function (index, elm) {
            if (result != null || result != []) {
                
                result.forEach(orderDetail => {
                    if (orderDetail.OrderID == $(elm).attr("data-orderid")) {
                        
                        $(format(orderDetail)).insertAfter($(elm));
                        $(elm).addClass('shown');
                        return
                    }
                })
            }
        })
        
        function format(d) {
            // `d` is the original data object for the row
            return (
                `
            <tr name="ProductRow" >
                <td name="ProductImage">
                    <div style = "overflow: hidden;" class="d-flex align-items-center justify-content-center" >
                        <img src="${d.ProductImage}.jpg" class="rounded mx-auto d-block" height="50px" >
                    </div>
                </td>
                <td name="ProductName" style="width: 100px">${d.ProductName}</td>
                <td name="OrderDetailQuantity">Quantity : ${d.OrderDetailQuantity}</td>
                <td name="OrderDetailUnitPrice">Total Price : ${parseInt(d.OrderDetailUnitPrice) * parseInt(d.OrderDetailQuantity)} </td >
                <td name="OrderDate">Ordered Date : ${d.OrderDate} </td >
                <td name="OrderIsDelivered">${d.OrderIsDelivered ? "Delivered" : "Not Delivered"}</td>
            </tr>`
            );
        }
    }
}