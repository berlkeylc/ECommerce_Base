/*/*/// <reference path="./typings/globals/jquery/index.d.ts" />*/*/

//"use strict";

var AppForm = {
    FormKeys: {
        CategoryModalSaveForm: "#CategoryModalSaveForm",
        ProductModalSaveForm: "#ProductModalSaveForm",
        deleteModal: "#deleteModal"
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
        }

    },
    Init: function () {
        var formKeys = Object.keys(this.Forms); // ['LoginForm', 'RegisterForm'] vs

        function commonHelper(formkey) {

            var $form = $(formkey);
            
            if ($form.length == 0) return;

            $form.removeAttr('novalidate').attr('data-parsley-validate', '')

            AppParsley.Forms[Object.keys(AppForm.FormKeys).find((key) => AppForm.FormKeys[key] === formkey)].Fields.forEach(field => {

                var $elm = $form.find(`[name="${field.Name}"]`);

                if (typeof field.Required != 'undefined' && field.Required == true) {
                    $elm.attr('data-parsley-required', 'true');
                }

                if (typeof field.StringLength != 'undefined') {
                    var min = field.StringLength.min;
                    var max = field.StringLength.max;

                    if (typeof min == 'undefined' || min < 0) min = 0;

                    if (typeof max != 'undefined' && max > 0) {
                        $elm.attr('data-parsley-minlength', min).attr('data-parsley-maxlength', max);
                    }
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

                var model = AppForm.ObjectifyForm($(AppForm.FormKeys.ProductModalSaveForm));

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

        if ($("#deletemodal").length >= 1) {
            $("#DeleteModalSaveForm").find("#deletemodal").on('click', function () {
               
                var model = {}
                model.processCode = $("#DeleteModalSaveForm").attr("data-processCode")
                model[`${$("#DeleteModalSaveForm").attr("data-id-name")}`] = $("#DeleteModalSaveForm").attr("data-id")

                switch ($("#DeleteModalSaveForm").attr("data-table-id")) {
                    case "CategoriesTable":
                        SaveModals.CrudCategories(model)
                    case "ProductsTable":
                        SaveModals.CrudProducts(model)
                }

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




//#region Test amaçlı kodlar
//var Test = {
//    //javascript json notation


//    /**
//     * Test amaçlı login
//     * @param {string} formid Form ıd bilgisini içerir.
//     * @param {int} token Token değeri sadece numeric veri içermelidir.
//     */
//    Login: function(formid, token){

//    },

//    /**
//     * 
//     * @param {*} formid 
//     * @param {*} token 
//     * @returns {int} daima 1 değerini döner
//     */
//     Login2: function(formid, token){
//        return 1;
//    },

//    Login3: function(){
//        //return "abc" + " " + "d";

//        return `${Test.Login2(1, 2)} Merhaba`;
//    },

//    Init : function(){
//        this.Login();
//        this.Login2();
//        this.Login3();
//    }
//    //Startup
//}

///*var tesdt =function Test2 (){

//}();



//window.onload( function () {
//    Test.Init();
//})*/



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



