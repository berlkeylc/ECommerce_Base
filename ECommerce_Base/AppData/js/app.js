
function fillInputs(element) {
    
    $($(element).attr("data-bs-target")).find("input,option").each(function (index, input) {
        $(element).closest('tr').children().each(function (index, row) {
            if (!$(row).children().is("button")) {

                if ($(input).attr("class") == "form-control") {

                    if ($(row).attr("name") == $(input).attr("name")) { $(input).attr("value", $(row).html()) }
                }
                else if ($(input).attr("class") == "form-check-input") {

                    if ($(row).attr("name") == $(input).attr("name")) {
                        
                        if ($(input).attr("value") == "True") { $(input).attr("checked", $(row).html() == "true" ? true : false) }

                        if ($(input).attr("value") == "False") { $(input).attr("checked", $(row).html() == "false" ? true : false) }
                    }
                }
                else if ($(input).prop('nodeName') == "OPTION") {
                    if ($(row).html() == $(input).html()) { $(input).prop('selected', true) }
                }
            }
        })
        
    })
    $($(element).attr("data-bs-target")).find("form").attr("data", "Update")
}

function clearModalInputs() {
    $(`.modal`).on('hidden.bs.modal', function (e) {
        $(this).find("input,option").each(function (index, input) {
                if ($(input).attr("class") == "form-control") {
                    $(input).attr("value", "")
                }
                else if ($(input).attr("class") == "form-check-input") {
                    if ($(input).attr("value") == "True") { $(input).removeAttr("checked") }
                    if ($(input).attr("value") == "False") { $(input).removeAttr("checked") }
                }
                else if ($(input).prop('nodeName') == "OPTION") {
                    if ($(input).attr("id") == "selectedOption") { $(input).prop('selected', true) }
                }
            })
    })
}



function deleteModalHelper(element) {
    console.log($("thead").find("th")[0].innerHTML)
    $("#deleteModal").find("form").attr("data-processCode", "Delete");
    $("#deleteModal").find("form").attr("data-id", $(element.closest('tr')).children()[0].innerHTML);
    $("#deleteModal").find("form").attr("data-table-id", $(element.closest('table')).attr("id"));
    $("#deleteModal").find("form").attr("data-id-name", $("thead").find("th")[0].innerHTML);
    
}

function file2Base64() {
    const fileInput = $("#ProductImage");

    // Listen for the change event so we can capture the file
    fileInput.on('change', (e) => {
        // Get a reference to the file
        const file = e.target.files[0];

        // Encode the file using the FileReader API
        const reader = new FileReader();
        reader.onloadend = () => {
            //console.log(reader.result);
            $("#ProductImage").attr("value", reader.result);
            // Logs data:<type>;base64,wL2dvYWwgbW9yZ...
        };
        reader.readAsDataURL(file);

    });
}