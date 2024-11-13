
document.querySelector('#login_button').onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');
}
document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
}

document.querySelector('#register').onclick = () => {
    document.querySelector('.register-form-container').classList.toggle('active');
    document.querySelector('.login-form-container').classList.remove('active');
}
document.querySelector('#close-register-form').onclick = () => {
    document.querySelector('.register-form-container').classList.remove('active');
    document.querySelector('.login-form-container').classList.remove('active');
}
document.querySelector('#login').onclick = () => {
    document.querySelector('.register-form-container').classList.remove('active');
    document.querySelector('.login-form-container').classList.toggle('active');
}
document.querySelector('#login_submit').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
}
document.querySelector('#register_submit').onclick = () => {
    document.querySelector('.register-form-container').classList.remove('active');
    document.querySelector('.login-form-container').classList.remove('active');
}


function login(){
    var email = document.getElementById("Email").value;
    var parts = email.split("@");
    var username = parts[0];
    alert("Welcome " + username);
}

function register(){
    var name = document.getElementById("Name").value;
    alert("Thank you for register " + name);
}

function newsletter(){
    // var news_email = document.getElementById("email").value;
    // var parts = news_email.split("@");
    // var username = parts[0];
    alert("Thank you for subscribe...!");
}
