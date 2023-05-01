var AjaxResults = {

    LoginSucc: function (result) {

        switch (result.Type) {
            case Enums.WebResultTypes.Redirect:
                document.location.href = result.Url;
                break;
            case Enums.WebResultTypes.Message:
                alert(result.Message);
                //alert("Hata olustu");
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
        
        const categoryTable = $("#CategoriesTable").find("tbody")
        $.each(result, function (index,row) {
            const tr = `
            <tr name="CategoryRow" >
                <td name="CategoryID">${row.CategoryID}</td>
                <td name="CategoryName">${row.CategoryName}</td>
                <td name="CategoryStatus">${row.CategoryStatus}</td>
                <td name="CategoryDescription">${row.CategoryDescription}</td>
                <td>
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="deleteModalHelper(this)">Delete</button>
                </td>
                <td>
                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="fillInputs(this)">Update</button>
                </td>
            </tr>`
            categoryTable.append(tr);
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

        const productTable = $("#ProductsTable").find("tbody")
        $.each(result, function (index, row) {
            const tr = `
            <tr name="ProductRow" >
                <td name="ProductID">${row.ProductID}</td>
                <td name="ProductName">${row.ProductName}</td>
                <td name="ProductImage"><img src="${row.ProductImage}.jpg" width="50" height="50"></td>
                <td name="CategoryID">${row.CategoryName}</td>
                <td name="ProductPrice">${row.ProductPrice}</td>
                <td name="ProductStock">${row.ProductStock}</td>
                <td name="ProductStatus">${row.ProductStatus}</td>
                <td name="ProductDescription">${row.ProductDescription}</td>
                <td>
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="deleteModalHelper(this)">Delete</button>
                </td>
                <td>
                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal2" onclick="fillInputs(this)">Update</button>
                </td>
            </tr>`
            productTable.append(tr);
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

        const userTable = $("#UsersTable").find("tbody")
        $.each(result, function (index, row) {
            const tr = `
            <tr>
                <td name="UserID">${row.UserID}</td>
                <td name="UserName">${row.UserName}</td>
                <td name="UserEmail">${row.UserEmail}</td>
                <td name="UserFirstName">${row.UserFirstName}</td>
                <td name="UserLastName">${row.UserLastName}</td>
                <td name="UserPassword">${row.UserPassword}</td>
                <td name="UserAddress">${row.UserAddress}</td>
                <td name="UserPostalCode">${row.UserPostalCode}</td>
                <td name="UserCity">${row.UserCity}</td>
                <td name="UserCountry">${row.UserCountry}</td>
                <td name="UserGender">${row.UserGender}</td>
                <td name="UserPhone">${row.UserPhone}</td>
                <td name="UserStatus">${row.UserStatus}</td>
                <td>
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="deleteModalHelper(this)">Delete</button>
                </td>
                <td>
                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal3" onclick="fillInputs(this)">Update</button>
                </td>
            </tr>`
            userTable.append(tr);
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

        const orderTable = $("#OrdersTable").find("tbody")
        $.each(result, function (index, row) {
            const tr = `
            <tr name="OrderRow" >
                <td name="OrderID">${row.OrderID}</td>
                <td name="UserID">${row.UserID}</td>
                <td name="UserFirstName">${row.UserFirstName}</td>
                <td name="UserLastName">${row.UserLastName}</td>
                <td name="OrderDate">${row.OrderDate}</td>
                <td name="OrderRequiredDate">${row.OrderRequiredDate}</td>
                <td name="OrderShippedDate">${row.OrderShippedDate}</td>
                <td name="OrderFreight">${row.OrderFreight}</td>
                <td name="OrderIsDelivered">${row.OrderIsDelivered}</td>
                <td name="OrderStatus">${row.OrderStatus}</td>
                <td>
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="deleteModalHelper(this)">Delete</button>
                </td>
                <td>
                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal4" onclick="fillInputs(this)">Update</button>
                </td>
            </tr>`
            orderTable.append(tr);
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

        const orderDetailTable = $("#OrderDetailsTable").find("tbody")
        $.each(result, function (index, row) {
            const tr = `
            <tr>
                <td name="OrderDetailID">${row.OrderDetailID}</td>
                <td name="OrderID">${row.OrderID}</td>
                <td name="UserFirstName">${row.UserFirstName}</td>
                <td name="UserLastName">${row.UserLastName}</td>
                <td name="UserName">${row.UserName}</td>
                <td name="UserPhone">${row.UserPhone}</td>
                <td name="UserAddress">${row.UserAddress}</td>
                <td name="UserCity">${row.UserCity}</td>
                <td name="UserPostalCode">${row.UserPostalCode}</td>
                <td name="OrderDate">${row.OrderDate}</td>
                <td name="OrderRequiredDate">${row.OrderRequiredDate}</td>
                <td name="ProductID">${row.ProductID}</td>
                <td name="ProductName">${row.ProductName}</td>
                <td name="OrderDetailQuantity">${row.OrderDetailQuantity}</td>
                <td name="OrderDetailUnitPrice">${row.OrderDetailUnitPrice}</td>
                <td name="OrderDetailDiscount">${row.OrderDetailDiscount}</td>
                <td name="OrderIsDelivered">${row.OrderIsDelivered}</td>
                <td name="OrderDetailStatus">${row.OrderDetailStatus}</td>
                <td>
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="deleteModalHelper(this)">Delete</button>
                </td>
                <td>
                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal5" onclick="fillInputs(this)">Update</button>
                </td>
            </tr>`
            orderDetailTable.append(tr);
        });
    },

    GetProductsContainerSucc: function (result) {

        const productsContainer = $("#ProductsContainer")
        $.each(result, function (index, row) {
            const elm = `
                    
                    <div class="card col-3 ms-4" style="width: 18rem;">
                        <input class="form-control" type="hidden" id="ProductID" name="ProductID" value=${row.ProductID}>
                        <img src="${row.ProductImage}.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${row.ProductName}</h5>
                            <p>Category</p>
                            <p>${row.ProductPrice}</p>
                            <div class="d-flex justify-content-center">
                                <button type="button" href="#" class="btn btn-secondary addToCart">Add to Cart</button>
                            </div>

                        </div>
                    </div>`
            productsContainer.append(elm)
        });
    },

    GetCartsSucc: function (result) {

        let totalPrices = 0;
        const cartsTable = $("#CartsTable").find("tbody")
        cartsTable.empty();
        $.each(result, function (index, row) {
            if (row.CartItemQuantity != 0) {
                const elm = `
                <tr data-productID = "${row.ProductID}">
                    <th><img src="${row.ProductImage}.jpg" style="width: 50px; height:50px;"></th>
                    <td>${row.ProductName}</td>
                    <td name="ProductPrice">${row.ProductPrice}</td>
                    <td name="CartItemQuantity">${row.CartItemQuantity}</td>
                    <td>${row.ProductPrice * row.CartItemQuantity}</td>
                    <td>
                        <div class="input-group w-auto justify-content-end align-items-center">
                            <input type="button" value="-" class="button-minus border rounded-circle  icon-shape icon-sm mx-1 " data-field="quantity">
                            <input type="text" step="1" max="10" value="${row.CartItemQuantity}" name="quantity" class="quantity-field border-0 text-center w-25" disabled>
                            <input type="button" value="+" class="button-plus border rounded-circle icon-shape icon-sm " data-field="quantity">
                        </div>
                    </td>
                </tr>`
                totalPrices += row.ProductPrice * row.CartItemQuantity
                cartsTable.append(elm)
            }
        });
        $("#CartTotalPrice").html(totalPrices)
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
        
        const orderTable = $("#OrderTable").find("tbody")
        
        $.each(result, function (index, row) {
                const elm = `
                <tr>
                    <th><img src="${row.ProductImage}.jpg" style="width: 50px; height:50px;"></th>
                    <td>${row.ProductName}</td>
                    <td name="ProductPrice">${row.OrderDetailQuantity}</td>
                    <td name="CartItemQuantity">${row.OrderDetailDiscount}</td>
                    <td>${row.ProductPrice * row.OrderDetailQuantity}</td>
                    <td>${row.OrderDate}</td>
                    <td>${row.OrderRequiredDate}</td>
                    <td style="background-color:${row.OrderIsDelivered ? "green" : "red"};"></td>
                </tr>`
                
                orderTable.append(elm)
        });
    },
}