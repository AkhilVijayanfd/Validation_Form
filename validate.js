// validating form

var name1 = document.forms['form']['name1'];
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var name_error=document.getElementById('name_error');
var email_error=document.getElementById('email_error');
var password_error=document.getElementById('password_error');

name1.addEventListener('textInput',name1_verify);
email.addEventListener('textInput',email_verify);
password.addEventListener('textInput',password_verify);


function validated(){
    if (name1.value.length < 5){
        name1.style.border= "1px solid red";
        name_error.style.display="block";
        name1.focus();
        return false;
    }  if (email.value.length < 9){
        email.style.border= "1px solid red";
        email_error.style.display="block";
        email.focus();
        return false;
    } if (password.value.length < 6){
        password.style.border= "1px solid red";
        password_error.style.display="block";
        password.focus();
        return false;
    }

}

function name1_verify(){
    if(name1.value.length >= 5){
        name1.style.border="1px solid silver";
        name_error.style.display = "none";
        return true;
    }
}


function email_verify(){
    if(email.value.length >= 9){
        email.style.border="1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}

function password_verify(){
    if(password.value.length >= 6){
        password.style.border="1px solid silver";
        password_error.style.display = "none";
        return true;
    }
}