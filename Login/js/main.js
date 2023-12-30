var signInEmail = document.getElementById("signEmail");
var signInPassword = document.getElementById("signPassword");
var user = [];
user = JSON.parse(localStorage.getItem("user"));

document.getElementById("login").addEventListener("click", function(){
    if(signInEmail.value == '' || signInPassword.value == ''){
        document.getElementById('message').innerHTML = `<P class="text-center text-danger">Can't login with valid email or password</p>`
    }
    else{
        checkValue()
    }
})

function checkValue(){
    for(var i=0; i<user.length; i++){
        if(signInEmail.value == user[i].email && signInPassword.value == user[i].password){
            var namePerson = user[i].name;
            localStorage.setItem('userName', namePerson);
            location.href = "../../home/index.html";
            break;
        }if(signInEmail.value != user[i].email && signInPassword.value != user[i].password ){
            document.getElementById('message').innerHTML = `<P class="text-center text-danger">The email address or password is incorrect. Please retry...</p>`
        }
    }
}