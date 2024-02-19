var signUpName = document.getElementById("signName");
var signUpEmail = document.getElementById("signEmail");
var signUpPassword = document.getElementById("signPassword");
var user = [];

if(localStorage.getItem('user') != null){
    user = JSON.parse(localStorage.getItem('user'))
}else{
    user = []
}

document.getElementById('signUp').addEventListener('click', function(){
    if(signUpName.value == '' || signUpEmail.value == '' || signUpPassword.value == ''){
        document.getElementById('message').innerHTML = `<P class="text-center text-danger">Sign Up failed ! Try again</p>`
    }else{
        var list = {
            name : signUpName.value,
            email : signUpEmail.value,
            password : signUpPassword.value
        }
        user.push(list);
        location.href = "../../Login/index.html";
        localStorage.setItem('user', JSON.stringify(user));
    }
})