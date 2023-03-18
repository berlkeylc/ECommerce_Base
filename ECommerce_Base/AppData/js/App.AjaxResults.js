var AjaxResults = {
    /*LoginSucc: function (result) {
        // SfsBool, WebResult, Login


        switch (result.Type) {
            case Enums.WebResultTypes.Redirect:
                document.location.href = result.Url;
                break;
            case Enums.WebResultTypes.Message:
                alert(result.Message);
            default:
        }
    },*/
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
                <td name="UserAdress">${row.UserAdress}</td>
                <td name="UserPostalCode">${row.UserPostalCode}</td>
                <td name="UserCity">${row.UserCity}</td>
                <td name="UserCountry">${row.UserCountry}</td>
                <td name="UserGender">${row.UserGender}</td>
                <td name="UserPhone">${row.UserPhone}</td>
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
}