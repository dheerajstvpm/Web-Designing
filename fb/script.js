$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:10,
            },
            lname:{
                required:true,
                minlength:4,
                maxlength:10,
            },
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                passwordCheck:true,
            },
            confirmPassword:{
                required:true,
                equalTo:'#password-form',
            },
            day:{
                required:true,
            },
            month:{
                required:true,
            },
            year:{
                required:true,
            },
            Gender:{
                required:true,
            },
        }
    })
    $.validator.addMethod("passwordCheck", function (value, element) {
        let password = value;
        if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&])(.{8,20}$)/.test(password))) {
            return false;
        }
        return true;
    }, function (value, element) {
        let password = $(element).val();
        if (!(/^(.{8,20}$)/.test(password))) {
            return 'Password must be between 8 to 20 characters long.';
        }
        else if (!(/^(?=.*[A-Z])/.test(password))) {
            return 'Password must contain at least one uppercase.';
        }
        else if (!(/^(?=.*[a-z])/.test(password))) {
            return 'Password must contain at least one lowercase.';
        }
        else if (!(/^(?=.*[0-9])/.test(password))) {
            return 'Password must contain at least one digit.';
        }
        else if (!(/^(?=.*[!@#$%^&*()-+=<>?])/.test(password))) {
            return "Password must contain special characters from !@#$%^&*()-+=<>?";
        }
        return false;
    });
})
