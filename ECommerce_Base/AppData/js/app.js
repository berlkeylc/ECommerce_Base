/*$('#buttonmodal').on('click', function (e) {
    e.preventDefault();
    $('#exampleModal').modal('show').find('.modal-content').load($(this).attr('href'));
});*/

//$(document).ready(function () {
//    $('#CategorySaveModal').click(function () {
//        $.get("adminCategorySaveModal", function (data) {
//            console.log('asd');
//            $('#CategoriesTable').append(data);
//            $('#exampleModal').modal('show');
//        })
//    })
//})
function fillInputs(element) {
    
    $($(element).attr("data-bs-target")).find("input").each(function (index, input) {
        $(element).closest('tr').children().each(function (index, row) {

            if (!$(row).children().is("button")) {

                if ($(input).attr("class") != "form-check-input") {

                    if ($(row).attr("name") == $(input).attr("name")) { $(input).attr("value", $(row).html()) }
                }
                else {

                    if ($(row).attr("name") == $(input).attr("name")) {
                        
                        if ($(input).attr("value") == "True") { $(input).attr("checked", $(row).html() == "true" ? true : false) }

                        if ($(input).attr("value") == "False") { $(input).attr("checked", $(row).html() == "false" ? true : false) }
                    }
                }
            }
        })
        
    })
    
    $($(element).attr("data-bs-target")).find("form").attr("data", "Update")
    console.log($("#exampleModal").find("form").attr("data"))
    
}

function deleteModalHelper(element) {
    console.log($($(element.closest('tr')).children()[0]).attr("name"))
    $("#deleteModal").find("form").attr("data-processCode", "Delete");
    $("#deleteModal").find("form").attr("data-id", $(element.closest('tr')).children()[0].innerHTML);
    $("#deleteModal").find("form").attr("data-table-id", $(element.closest('table')).attr("id"));
    $("#deleteModal").find("form").attr("data-id-name", $($(element.closest('tr')).children()[0]).attr("name"));
    
}