
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
        };
        reader.readAsDataURL(file);

    });
}

function add2Cart(elm) {
    var model = {}
    console.log($(elm))
    model.ProductID = $(elm).closest('.card').find('input').attr('value')
    model.processCode = "Increase"
    SaveModals.CrudCarts(model)
    $("#CartBadge").html(parseInt($("#CartBadge").html()) == 0 ? 0 : parseInt($("#CartBadge").html()) + 1)
    $("#CartBadge").attr("hidden",false)
}

function incrementCart(e,elm) {
    incrementValue(e);
    var model = {}
    model.ProductID = $(elm).closest('tr').attr('data-productid')
    model.processCode = "Increase"
    SaveModals.CrudCarts(model)
    $("#CartBadge").html(parseInt($("#CartBadge").html()) + 1)
    $("#CartBadge").removeAttr("hidden")
}

function decrementCart(e,elm) {
    decrementValue(e);
    var model = {}
    model.ProductID = $(elm).closest('tr').attr('data-productid')
    model.processCode = "Decrease"
    SaveModals.CrudCarts(model)
    $("#CartBadge").html(parseInt($("#CartBadge").html()) - 1)
    if (parseInt($("#CartBadge").html()) < 1) {
        $("#CartBadge").removeAttr("hidden")
    }
}

function incrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
    var currentTotalPrice = parseInt($(e.target).closest('tr').find('td[name = "CartTotalPrice"]').html())
    var productPrice = parseInt($(e.target).closest('tr').find('td[name = "ProductPrice"]').html())

    if (!isNaN(currentVal)) {
        parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
        $(e.target).closest('tr').find('td[name = "CartItemQuantity"]').html(currentVal + 1)
        $(e.target).closest('tr').find('td[name = "CartTotalPrice"]').html(currentTotalPrice + productPrice)
        $("#CartTotalPrice").html(parseInt($("#CartTotalPrice").html()) + parseInt($(e.target).closest('tr').find('td[name = "ProductPrice"]').html()))
    } else {
        parent.find('input[name=' + fieldName + ']').val(0);
    }
}

function decrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
    var currentTotalPrice = parseInt($(e.target).closest('tr').find('td[name = "CartTotalPrice"]').html())
    var productPrice = parseInt($(e.target).closest('tr').find('td[name = "ProductPrice"]').html())

    if (!isNaN(currentVal) && currentVal > 0) {
        parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
        $(e.target).closest('tr').find('td[name = "CartTotalPrice"]').html(currentTotalPrice - productPrice)
        $(e.target).closest('tr').find('td[name = "CartItemQuantity"]').html(currentVal - 1)
        if (currentVal -1 == 0) {
            $(e.target).closest('tr').remove()
        }
        $("#CartTotalPrice").html(parseInt($("#CartTotalPrice").html()) - parseInt($(e.target).closest('tr').find('td[name = "ProductPrice"]').html()))
    } else {
        parent.find('input[name=' + fieldName + ']').val(0);
    }
}

function filterSelection(categoryName) {
    $.each($("#ProductsContainer").find("input"), function (row, elm) {
        if ($(elm).attr("data-filter") == categoryName) {
            $(elm).parent().attr("hidden", false)
        }
        else {
            $(elm).parent().attr("hidden", true)
        }
    })
}


