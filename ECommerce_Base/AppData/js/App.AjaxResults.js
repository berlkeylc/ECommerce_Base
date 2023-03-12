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
    GetCategoriesSucc: function (result) {
        /*const ilce = document.getElementById('ilceselect');
        ilce.removeAttribute('disabled');
        $.each(result, function (index, row) {
            const option = document.createElement('option');

            option.value = row;
            option.text = row;

            ilce.appendChild(option);
        });*/
        
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
                    <button type="button" class="btn btn-warning CategorySaveModal" name="EditCategory">Update</button>
                </td>
            </tr>`
            categoryTable.append(tr);
        });

        $('.CategorySaveModal').click(function () {
            console.log(this.name)
            if (this.name == "AddCategory") {
                $("#exampleModal").remove()
                $.get("adminCategorySaveModal", function (data) {
                    $data = $(data);
                    $data.find("form").attr("action", "/AdminCategory/AddCategory")
                    console.log($("form"))

                    $('#CategoriesTable').append($data);
                    $('#exampleModal').modal('show');
                })

            }
            if (this.name == "EditCategory") {
                $("#exampleModal").remove()
                $.get("adminCategorySaveModal", (data) => {
                    $data = $(data);
                    
                    $categoryRow = $(this).closest('tr[name="CategoryRow"]')
                   
                    CategoryID = $categoryRow.find('td[name="CategoryID"]').html()
                    CategoryName = $categoryRow.find('td[name="CategoryName"]').html()
                    CategoryDescription = $categoryRow.find('td[name="CategoryDescription"]').html()
                    CategoryStatus = $categoryRow.find('td[name="CategoryStatus"]').html()
                    console.log(CategoryStatus == "true")
                    $data.find("form").attr("action", `/AdminCategory/EditCategory/${CategoryID}`)
                    //console.log($data.find("input[name='CategoryStatus']"))
                    $data.find("input[name='CategoryID']").attr("value", CategoryID)
                    $data.find("input[name='CategoryName']").attr("value", CategoryName)
                    $data.find("input[name='CategoryDescription']").attr("value", CategoryDescription)
                    $($data.find("input[name='CategoryStatus']")[0]).attr("checked", CategoryStatus == "true" ? true : false)
                    $($data.find("input[name='CategoryStatus']")[1]).attr("checked", CategoryStatus == "false" ? true : false)
                    
                    $('#CategoriesTable').append($data);
                    $('#exampleModal').modal('show');
                })
            }
            
        })

    }
}