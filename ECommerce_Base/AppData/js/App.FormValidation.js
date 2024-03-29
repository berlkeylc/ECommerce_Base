/*/*/// <reference path="./typings/globals/jquery/index.d.ts" />*/*/

//"use strict";

var AppForm = {
    FormKeys: {
        LoginForm: "#loginform",
        RegisterForm: "#registerform",
        CategoryModalSaveForm: "#CategoryModalSaveForm",
        ProductModalSaveForm: "#ProductModalSaveForm",
        UserModalSaveForm: "#UserModalSaveForm",
        OrderModalSaveForm: "#OrderModalSaveForm",
        OrderDetailModalSaveForm: "#OrderDetailModalSaveForm",
        deleteModal: "#deleteModal",
        CheckOutSaveForm: "#CheckOutSaveForm",
        LogoutModalSaveForm: "#LogoutModalSaveForm"
    },

    ObjectifyForm: function (form) {
        
        

        var serializeData = form.serializeArray();
        
        var returnArray = {};
        for (var i = 0; i < serializeData.length; i++) {
            returnArray[serializeData[i]['name']] = serializeData[i]['value'];
        }
        return returnArray;
    },


    SubmitLoginForm: function () {
        if ($(AppForm.FormKeys.LoginForm).length > 0) {
            var $form = $(AppForm.FormKeys.LoginForm);
        }
    },
    SubmitRegisterForm: function () {

    }
}

var AppParsley = {
    Forms: {
        LoginForm: {
            Fields: [
                {
                    Name: "UserName",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 15
                    }
                },
                {
                    Name: "Password",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 50
                    }
                }
            ]
        },
        RegisterForm: {
            Fields: [
                {
                    Name: "UserFirstName",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 15
                    }
                },
                {
                    Name: "UserLastName",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 15
                    }
                },
                {
                    Name: "UserName",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 15
                    }
                },
                {
                    Name: "UserEmail",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 50
                    }
                },
                {
                    Name: "Password",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 50
                    }
                },
                {
                    Name: "RepeatPassword",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 50
                    }
                }
            ]
        },
        CategoryModalSaveForm: {
            Fields: [
                {
                    Name: "CategoryName",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 10
                    }
                },
                {
                    Name: "CategoryStatus",
                    Required: true
                },
                {
                    Name: "CategoryDescription",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 50
                    }
                }
            ]
        },
        ProductModalSaveForm: {
            Fields: [
                {
                    Name: "ProductName",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 10
                    }
                },
                {
                    Name: "ProductImage",
                    Required: true,
                },
                {
                    Name: "CategoryID",
                    Required: true
                },
                {
                    Name: "ProductPrice",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 5
                    }
                },
                {
                    Name: "ProductStock",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 5
                    }
                },
                {
                    Name: "ProductStatus",
                    Required: true
                },
                {
                    Name: "ProductDescription",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 50
                    }
                }
            ]
        },
        UserModalSaveForm: {
            Fields: [
                {
                    Name: "UserName",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 15
                    }
                },
                {
                    Name: "UserEmail",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 50
                    }
                },
                {
                    Name: "UserFirstName",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 15
                    }
                },
                {
                    Name: "UserLastName",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 15
                    }
                },
                {
                    Name: "UserPassword",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 15
                    }
                },
                {
                    Name: "UserAddress",
                    StringLength: {
                        min: 0,
                        max: 50
                    }
                },
                {
                    Name: "UserPostalCode",
                    StringLength: {
                        min: 0,
                        max: 5
                    }
                },
                {
                    Name: "UserCity",
                    StringLength: {
                        min: 0,
                        max: 25
                    }
                },
                {
                    Name: "UserCountry",
                    StringLength: {
                        min: 0,
                        max: 25
                    }
                },
                {
                    Name: "UserGender",
                    StringLength: {
                        min: 0,
                        max: 10
                    }
                },
                {
                    Name: "UserPhone",
                    StringLength: {
                        min: 0,
                        max: 11
                    }
                },
                {
                    Name: "UserRole",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 11
                    }
                },
                {
                    Name: "UserStatus",
                    Required: true
                },
            ]
        },
        OrderModalSaveForm: {
            Fields: [
                {
                    Name: "UserID",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 10
                    }
                },
                {
                    Name: "OrderDate",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 15
                    }
                },
                {
                    Name: "OrderRequiredDate",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 15
                    }
                },
                {
                    Name: "OrderShippedDate",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 15
                    }
                },
                {
                    Name: "OrderFreight",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 5
                    }
                },
                {
                    Name: "OrderIsDelivered",
                    Required: true,
                },
                {
                    Name: "OrderStatus",
                    Required: true
                },
            ]
        },
        OrderDetailModalSaveForm: {
            Fields: [
                {
                    Name: "OrderID",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 10
                    }
                },
                {
                    Name: "ProductID",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 10
                    }
                },
                {
                    Name: "OrderDetailUnitPrice",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 5
                    }
                },
                {
                    Name: "OrderDetailQuantity",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 5
                    }
                },
                {
                    Name: "OrderDetailDiscount",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 5
                    }
                },
                {
                    Name: "OrderDetailStatus",
                    Required: true
                },
            ]
        },
        CheckOutSaveForm: {
            Fields: [
                {
                    Name: "UserFirstName",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 15
                    }
                },
                {
                    Name: "UserLastName",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 15
                    }
                },
                {
                    Name: "UserCountry",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 25
                    }
                },
                {
                    Name: "UserCity",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 25
                    }
                },
                {
                    Name: "UserAddress",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 50
                    }
                },
                {
                    Name: "UserPostalCode",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 5
                    }
                },
                {
                    Name: "UserPhone",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 11
                    }
                },
                {
                    Name: "UserEmail",
                    Required: true,
                    StringLength: {
                        min: 0,
                        max: 50
                    }
                },
                
            ]
        },

    },
    Init: function () {
        var formKeys = Object.keys(this.Forms); // ['LoginForm', 'RegisterForm'] vs

        //Object.keys(AppForm.FormKeys).forEach(function (key) {

        //    clearModalInputs(AppForm.FormKeys[key]);

        //});

        function commonHelper(formkey) {

            var $form = $(formkey);
            
            if ($form.length == 0) return;

            $form.removeAttr('novalidate').attr('data-parsley-validate', '')

            AppParsley.Forms[Object.keys(AppForm.FormKeys).find((key) => AppForm.FormKeys[key] === formkey)].Fields.forEach(field => {

                var $elm = $form.find(`[name="${field.Name}"]`);

                if (typeof field.Required != 'undefined' && field.Required == true) {
                    $elm.attr('data-parsley-required', 'true');
                    $elm.attr('data-parsley-required-message', 'Bu alanı doldurmak zorunludur.');
                }

                if (typeof field.StringLength != 'undefined') {
                    var min = field.StringLength.min;
                    var max = field.StringLength.max;

                    if (typeof min == 'undefined' || min < 0) min = 0;

                    if (typeof max != 'undefined' && max > 0) {
                        $elm.attr('data-parsley-minlength', min).attr('data-parsley-maxlength', max)
                            .attr('data-parsley-minlength-message', `${min} veya daha fazla karakter içermelidir.`)
                            .attr('data-parsley-maxlength-message', `${min} veya daha az karakter içermelidir.`)
                    }
                }
            });
        }
        if ($(AppForm.FormKeys.LoginForm).length >= 1) {
            commonHelper(AppForm.FormKeys.LoginForm)
            $(AppForm.FormKeys.LoginForm).parsley().on('form:submit', function () {

                var model = AppForm.ObjectifyForm($(AppForm.FormKeys.LoginForm));

                Account.Login(model)
                return true;
            });
        } 

        if ($(AppForm.FormKeys.RegisterForm).length >= 1) {
            commonHelper(AppForm.FormKeys.RegisterForm)
            $(AppForm.FormKeys.RegisterForm).parsley().on('form:submit', function () {

                var model = AppForm.ObjectifyForm($(AppForm.FormKeys.RegisterForm));
                if (model.Password == model.RepeatPassword) {
                    Account.Register(model)
                    return true;
                }
            });
        } 

        if ($(AppForm.FormKeys.CategoryModalSaveForm).length >= 1)
        {
            commonHelper(AppForm.FormKeys.CategoryModalSaveForm)
            $(AppForm.FormKeys.CategoryModalSaveForm).parsley().on('form:submit', function () {
                console.log($(AppForm.FormKeys.CategoryModalSaveForm).length)
                
                var model = AppForm.ObjectifyForm($(AppForm.FormKeys.CategoryModalSaveForm));

                if (model.CategoryID != "" && model.CategoryID != null && model.CategoryID > 0) {
                    $(AppForm.FormKeys.CategoryModalSaveForm).attr("data-processCode", "Update")
                    model.processCode = "Update"
                }
                else {
                    model.processCode = "Create"
                }
                SaveModals.CrudCategories(model)
                
                return true;
            });
        }

        if ($(AppForm.FormKeys.ProductModalSaveForm).length >= 1) {
            commonHelper(AppForm.FormKeys.ProductModalSaveForm)
            $(AppForm.FormKeys.ProductModalSaveForm).parsley().on('form:submit', function () {
                console.log($(AppForm.FormKeys.ProductModalSaveForm).length)
                var reader = new FileReader();
                logFile = $("#ProductModalSaveForm").find("input")[2].files[0]
                reader.readAsText(logFile);
                
                var model = AppForm.ObjectifyForm($(AppForm.FormKeys.ProductModalSaveForm));
                model.ProductImage = $(AppForm.FormKeys.ProductModalSaveForm).find("#ProductImage").attr("value")
                if (model.ProductID != "" && model.ProductID != null && model.ProductID > 0) {
                    $(AppForm.FormKeys.ProductModalSaveForm).attr("data-processCode", "Update")
                    model.processCode = "Update"
                }
                else {
                    model.processCode = "Create"
                }
                SaveModals.CrudProducts(model)
                return true;
            });
        }

        if ($(AppForm.FormKeys.UserModalSaveForm).length >= 1) {
            commonHelper(AppForm.FormKeys.UserModalSaveForm)
            $(AppForm.FormKeys.UserModalSaveForm).parsley().on('form:submit', function () {
                console.log($(AppForm.FormKeys.UserModalSaveForm).length)

                var model = AppForm.ObjectifyForm($(AppForm.FormKeys.UserModalSaveForm));

                if (model.UserID != "" && model.UserID != null && model.UserID > 0) {
                    $(AppForm.FormKeys.UserModalSaveForm).attr("data-processCode", "Update")
                    model.processCode = "Update"
                }
                else {
                    model.processCode = "Create"
                }
                SaveModals.CrudUsers(model)
                return true;
            });
        }

        if ($(AppForm.FormKeys.OrderModalSaveForm).length >= 1) {
            commonHelper(AppForm.FormKeys.OrderModalSaveForm)
            $(AppForm.FormKeys.OrderModalSaveForm).parsley().on('form:submit', function () {
                console.log($(AppForm.FormKeys.OrderModalSaveForm).length)

                var model = AppForm.ObjectifyForm($(AppForm.FormKeys.OrderModalSaveForm));

                if (model.OrderID != "" && model.OrderID != null && model.OrderID > 0) {
                    $(AppForm.FormKeys.OrderModalSaveForm).attr("data-processCode", "Update")
                    model.processCode = "Update"
                }
                else {
                    model.processCode = "Create"
                }
                SaveModals.CrudOrders(model)
                return true;
            });
        }

        if ($(AppForm.FormKeys.OrderDetailModalSaveForm).length >= 1) {
            commonHelper(AppForm.FormKeys.OrderDetailModalSaveForm)
            $(AppForm.FormKeys.OrderDetailModalSaveForm).parsley().on('form:submit', function () {
                console.log($(AppForm.FormKeys.OrderDetailModalSaveForm).length)

                var model = AppForm.ObjectifyForm($(AppForm.FormKeys.OrderDetailModalSaveForm));

                if (model.OrderDetailID != "" && model.OrderDetailID != null && model.OrderDetailID > 0) {
                    $(AppForm.FormKeys.OrderDetailModalSaveForm).attr("data-processCode", "Update")
                    model.processCode = "Update"
                }
                else {
                    model.processCode = "Create"
                }
                SaveModals.CrudOrderDetails(model)
                return true;
            });
        }

        if ($(AppForm.FormKeys.CheckOutSaveForm).length >= 1) {
            commonHelper(AppForm.FormKeys.CheckOutSaveForm)
            $(AppForm.FormKeys.CheckOutSaveForm).parsley().on('form:submit', function () {
                console.log($(AppForm.FormKeys.CheckOutSaveForm).length)

                var model = AppForm.ObjectifyForm($(AppForm.FormKeys.CheckOutSaveForm));

                if (model.UserID != "" && model.UserID != null && model.UserID > 0) {
                    $(AppForm.FormKeys.UserModalSaveForm).attr("data-processCode", "Update")
                    model.processCode = "Update"
                }

                if (model.OrderID != "" && model.OrderID != null && model.OrderID > 0) {
                    $(AppForm.FormKeys.CheckOutSaveForm).attr("data-processCode", "Update")
                    model.processCode = "Update"
                }

                SaveModals.AddOrderDetail(model)
                return true;
            });
        }

        if ($("#deleteModal").length >= 1) {
            $("#DeleteModalSaveForm").find("#deleteModalButton").on('click', function () {
               
                var model = {}
                model.processCode = $("#DeleteModalSaveForm").attr("data-processCode")
                model[`${$("#DeleteModalSaveForm").attr("data-id-name")}`] = $("#DeleteModalSaveForm").attr("data-id")

                switch ($("#DeleteModalSaveForm").attr("data-table-id")) {
                    case "CategoriesTable":
                        SaveModals.CrudCategories(model)
                        break;
                    case "ProductsTable":
                        SaveModals.CrudProducts(model)
                        break;
                    case "UsersTable":
                        SaveModals.CrudUsers(model)
                        break;
                    case "OrdersTable":
                        SaveModals.CrudOrders(model)
                        break;
                    case "OrderDetailsTabl":
                        SaveModals.CrudOrderDetails(model)
                        break;
                }

                return true;
            });
        }
        
        if ($("#logoutModal").length >= 1) {
            $("#logoutModalButton").on('click', function () {

                Account.Logout();

                return true;
            });
        }
    }
}

var AppParsleySubmit = {

}


//$('.CategorySaveModal').click(function () {

            //    if (this.name == "AddCategory") {

            //        $('#SaveChangesButton').click(function () {
            //            CategoryName = $("#exampleModal").find("input[name='CategoryName']")[0].value
            //            CategoryDescription = $("#exampleModal").find("input[name='CategoryDescription']")[0].value
            //            CategoryStatus = $("#exampleModal").find("input[name='CategoryStatus']")[0].checked == true ? "True" : "False"
            //            var model = {};
            //            model.CategoryName = CategoryName;
            //            model.CategoryDescription = CategoryDescription;
            //            model.CategoryStatus = CategoryStatus;
            //            console.log(model)
            //            SaveModals.AddCategories(model)
            //        });
            //    }
            //    console.log(this.name)
            //    if (this.name == "EditCategory") {
            //        $categoryRow = $(this).closest('tr[name="CategoryRow"]')

            //        CategoryID = $categoryRow.find('td[name="CategoryID"]').html()
            //        CategoryName = $categoryRow.find('td[name="CategoryName"]').html()
            //        CategoryDescription = $categoryRow.find('td[name="CategoryDescription"]').html()
            //        CategoryStatus = $categoryRow.find('td[name="CategoryStatus"]').html()

            //        $("#exampleModal").find("input[name='CategoryID']").attr("value", CategoryID)
            //        $("#exampleModal").find("input[name='CategoryName']").attr("value", CategoryName)
            //        $("#exampleModal").find("input[name='CategoryDescription']").attr("value", CategoryDescription)
            //        console.log(CategoryName)
            //        $($("#exampleModal").find("input[name='CategoryStatus']")[0]).attr("checked", CategoryStatus == "true" ? true : false)
            //        $($("#exampleModal").find("input[name='CategoryStatus']")[1]).attr("checked", CategoryStatus == "false" ? true : false)

            //        $('#SaveChangesButton').click(function () {
            //            CategoryID = $("#exampleModal").find("input[name='CategoryID']")[0].value
            //            CategoryName = $("#exampleModal").find("input[name='CategoryName']")[0].value
            //            CategoryDescription = $("#exampleModal").find("input[name='CategoryDescription']")[0].value
            //            CategoryStatus = $("#exampleModal").find("input[name='CategoryStatus']")[0].checked == true ? "True" : "False"
            //            var model = {};

            //            model.CategoryID = CategoryID;
            //            model.CategoryName = CategoryName;
            //            model.CategoryDescription = CategoryDescription;
            //            model.CategoryStatus = CategoryStatus;
            //            console.log(model)
            //            SaveModals.EditCategories(model)
            //        });
            //        $('#exampleModal').modal('show');
            //    }

            //})

//var AppValidation = {

//    /**
//     * 
//     */
//    Init: function () {
//        // Fetch all the forms we want to apply custom Bootstrap validation styles to
//        var forms = document.querySelectorAll('.needs-validation');

//        // Loop over them and prevent submission
//        Array.prototype.slice.call(forms)
//            .forEach(function (form) {
//                form.addEventListener('submit', function (event) {
//                    if (!form.checkValidity()) {
//                        event.preventDefault()
//                        event.stopPropagation()
//                    }

//                    form.classList.add('was-validated')
//                }, false)
//            })
//    }
//};
//#endregion



