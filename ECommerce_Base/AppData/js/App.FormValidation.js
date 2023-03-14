/*/*/// <reference path="./typings/globals/jquery/index.d.ts" />*/*/

//"use strict";

var AppForm = {
    FormKeys: {
        CategoryModalSaveForm: "#CategoryModalSaveForm",
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
        }
    },
    Init: function () {
        var formKeys = Object.keys(this.Forms); // ['LoginForm', 'RegisterForm'] vs

        //function commonHelper(formkey) {
        //    var $form = $(formkey);
        //    console.log($form.length)
        //    if ($form.length == 0) return;

        //    $form.removeAttr('novalidate').attr('data-parsley-validate', '')

        //    AppParsley.Forms[Object.keys(AppForm.FormKeys).find((key) => AppForm.FormKeys[key] === formkey)].Fields.forEach(field => {
        //        // field.Name = 'UserName'
        //        //$(`[name="${field.Name}"]`);
        //        var $elm = $form.find(`[name="${field.Name}"]`);
        //        console.log($elm)
        //        //$(`${formkey} [name="${field.Name}"]`);
        //        //$('[name="' + field.Name + '"]');

        //        if (typeof field.Required != 'undefined' && field.Required == true) {
        //            // Required ile ilgili parsley entegrasyonlarımızı içericek
        //            $elm.attr('data-parsley-required', 'true');
        //            console.log($elm)
        //        }

        //        if (typeof field.StringLength != 'undefined') {
        //            var min = field.StringLength.min;
        //            var max = field.StringLength.max;

        //            if (typeof min == 'undefined' || min < 0) min = 0;
        //            if (typeof max != 'undefined' && max > 0) {
        //                // StringLenght ile ilgili parsley entegrasyonlarımızı içericek
        //                $elm.attr('data-parsley-minlength', min).attr('data-parsley-maxlength', max);
        //                //$elm.attr('minlength', min);
        //                //$elm.attr('maxlength', max);
        //                console.log($elm)
        //            }
        //        }
        //    });
        //}

        //formKeys.forEach(key => {
        //    // key = LoginForm
        //    var formkey = AppForm.FormKeys[key];
        //    var $form = $(formkey);

        //    if ($form.length == 0) return;

        //    $form.removeAttr('novalidate').attr('data-parsley-validate', '')

        //    this.Forms[key].Fields.forEach(field => {
        //        // field.Name = 'UserName'
        //        //$(`[name="${field.Name}"]`);
        //        var $elm = $form.find(`[name="${field.Name}"]`);
        //        //$(`${formkey} [name="${field.Name}"]`);
        //        //$('[name="' + field.Name + '"]');

        //        if (typeof field.Required != 'undefined' && field.Required == true) {
        //            // Required ile ilgili parsley entegrasyonlarımızı içericek
        //            $elm.attr('data-parsley-required', 'true');
        //        }

        //        if (typeof field.StringLength != 'undefined') {
        //            var min = field.StringLength.min;
        //            var max = field.StringLength.max;

        //            if (typeof min == 'undefined' || min < 0) min = 0;
        //            if (typeof max != 'undefined' && max > 0) {
        //                // StringLenght ile ilgili parsley entegrasyonlarımızı içericek
        //                $elm.attr('data-parsley-minlength', min).attr('data-parsley-maxlength', max);
        //                //$elm.attr('minlength', min);
        //                //$elm.attr('maxlength', max);
        //            }
        //        }
        //    });

        //    /*$form.parsley().on('form:submit', function () {
        //        // model
        //        var model = AppForm.ObjectifyForm($form);

        //        // yönlendirme işleminin geçeceği method
        //        Account.Login(model);

        //        return false;
        //    });*/
        //});
        //if ($(AppForm.FormKeys.CategoryModalSaveForm).length >= 1)
        //{
        //    $(AppForm.FormKeys.CategoryModalSaveForm).parsley().on('form:submit', function () {
        //        //commonHelper(AppForm.FormKeys.CategoryModalSaveForm)
        //        var model = AppForm.ObjectifyForm($(AppForm.FormKeys.CategoryModalSaveForm));
        //        console.log(model)
                
        //        return false;
        //    });
        //}
        //SaveModals.GetCategories();
        console.log(this.Forms.CategoryModalSaveForm)

    }
}

var AppParsleySubmit = {

}







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



