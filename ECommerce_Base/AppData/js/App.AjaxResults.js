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

    GetCategoriesSucc: function (result) {
        
        const categoryTable = $("#CategoriesTable").find("tbody")
        $.each(result, function (index,row) {
            console.log(result)
            const tr = `
            <tr name="CategoryRow" >
                <td name="CategoryID">${row.CategoryID}</td>
                <td name="CategoryName">${row.CategoryName}</td>
                <td name="CategoryStatus">${row.CategoryStatus}</td>
                <td name="CategoryDescription">${row.CategoryDescription}</td>
                <td>
                    <a href="/AdminCategory/DeleteCategory/${row.CategoryID}" class="btn btn-danger">Delete</a>
                </td>
                <td>
                    <button type="button" class="btn btn-warning CategorySaveModal" data-bs-toggle="modal" data-bs-target="#exampleModal" name="EditCategory">Update</button>
                </td>
            </tr>`
            categoryTable.append(tr);
        });

        $('.CategorySaveModal').click(function () {

            if (this.name == "AddCategory") {
                $('#SaveChangesButton').click(function () {
                    CategoryName = $("#exampleModal").find("input[name='CategoryName']")[0].value
                    CategoryDescription = $("#exampleModal").find("input[name='CategoryDescription']")[0].value
                    CategoryStatus = "True"
                    var model = {};
                    model.CategoryName = CategoryName;
                    model.CategoryDescription = CategoryDescription;
                    model.CategoryStatus = CategoryStatus;
                    console.log(model)
                    SaveModals.AddCategories(model)
                });
            }

            if (this.name == "EditCategory") {
                $categoryRow = $(this).closest('tr[name="CategoryRow"]')
                
                CategoryID = $categoryRow.find('td[name="CategoryID"]').html()
                CategoryName = $categoryRow.find('td[name="CategoryName"]').html()
                CategoryDescription = $categoryRow.find('td[name="CategoryDescription"]').html()
                CategoryStatus = $categoryRow.find('td[name="CategoryStatus"]').html()
                
                $("#exampleModal").find("input[name='CategoryID']").attr("value", CategoryID)
                $("#exampleModal").find("input[name='CategoryName']").attr("value", CategoryName)
                $("#exampleModal").find("input[name='CategoryDescription']").attr("value", CategoryDescription)

                $($("#exampleModal").find("input[name='CategoryStatus']")[0]).attr("checked", CategoryStatus == "true" ? true : false)
                $($("#exampleModal").find("input[name='CategoryStatus']")[1]).attr("checked", CategoryStatus == "false" ? true : false)

                $('#SaveChangesButton').click(function () {
                    CategoryID = $("#exampleModal").find("input[name='CategoryID']")[0].value
                    CategoryName = $("#exampleModal").find("input[name='CategoryName']")[0].value
                    CategoryDescription = $("#exampleModal").find("input[name='CategoryDescription']")[0].value
                    CategoryStatus = $("#exampleModal").find("input[name='CategoryStatus']")[0].checked == true ? "True" : "False"
                    var model = {};
                    model.CategoryID = CategoryID;
                    model.CategoryName = CategoryName;
                    model.CategoryDescription = CategoryDescription;
                    model.CategoryStatus = CategoryStatus;
                    console.log(model)
                    SaveModals.EditCategories(model)
                });
                    $('#exampleModal').modal('show');
            }
            
        })

    }
}