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
    }
}