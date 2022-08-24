//toggle between register and login form
var loginFormContainer = document.getElementById('loginform');
var regFormContainer = document.getElementById('regform');
var regSec = document.getElementById('Register');
var logSec = document.getElementById('Login');

loginFormContainer.addEventListener('click', (e)=>{
    e.preventDefault();
    regSec.classList.add('active');
    logSec.style.display = "block";
});
regFormContainer.addEventListener('click', (e)=>{
    e.preventDefault();
    regSec.classList.remove('active');
    logSec.style.display = "none";
});

//form validation
//user registeration
let registerForm = document.querySelector('#reg-form');
let errorText = document.querySelector('#error-text');
registerForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    register();
});

function register(){
    let fname = document.querySelector('#fname').value,
     lname = document.querySelector('#lname').value,
     email = document.querySelector('#email').value,
     password = document.querySelector('#password').value,
     cpassword = document.querySelector('#cpassword').value;

    //  console.log(fname, lname, email, password, cpassword);

    if(fname == "" || lname == "" || email == "" || password == "" || cpassword == ""){
        errorText.innerHTML = "All Fields are required";
        errorText.style.display = "block";
        errorText.style.backgroundColor = "#DC3545";
        errorText.style.color = "#a31b29";
        //alert('All Fields are required');
        registerForm.reset();
        document.getElementById('fname').focus();
    }
    else if((password.length < 6) || (password.length > 12)){
        errorText.innerHTML = "Password should contains atleast six characters";
        errorText.style.display = "block";
        errorText.style.backgroundColor = "#DC3545";
        errorText.style.color = "#a31b29";
        //alert('Password should contains atleast six characters');
        document.getElementById('password').value = "";
        document.getElementById('password').focus();
        //console.log(password.length);
    }
    else if(password !== cpassword){
        errorText.innerHTML = "Password and confirm password must be same";
        errorText.style.display = "block";
        errorText.style.backgroundColor = "#DC3545";
        errorText.style.color = "#a31b29";
        //alert('Password and confirm password must be same');
        document.getElementById('password').value = "";
        document.getElementById('cpassword').value = "";
        document.getElementById('password').focus();
    }
    else{
        errorText.innerHTML = "Register Successul";
        errorText.style.display = "block";
        errorText.style.backgroundColor = "#28A745";
        errorText.style.color = "#167e2e";
        //alert('Register Successul');

        //Using single arrray
        //let userInfo = JSON.parse(localStorage.getItem('userinfo')) || [];
        // userInfo.push({fname, lname, email, password});
        // localStorage.setItem('userinfo', JSON.stringify(userInfo));
        // alert('data inserted');
        // console.log(localStorage.getItem('userinfo'));

        //Using separate arrays
        let firstName = JSON.parse(localStorage.getItem('firstName')) || [];
        let lastName = JSON.parse(localStorage.getItem('lastName')) || [];
        let emailarr = JSON.parse(localStorage.getItem('emailarr')) || [];
        let pass = JSON.parse(localStorage.getItem('pass')) || [];
        firstName.push(fname);
        lastName.push(lname);
        emailarr.push(email);
        pass.push(password);

        localStorage.setItem('firstName',JSON.stringify(firstName));
        localStorage.setItem('lastName',JSON.stringify(lastName));
        localStorage.setItem('emailarr',JSON.stringify(emailarr));
        localStorage.setItem('pass',JSON.stringify(pass));

        alert('data inserted');
        console.log(localStorage.getItem('firstName'));
        console.log(localStorage.getItem('lastName'));
        console.log(localStorage.getItem('emailarr'));
        console.log(localStorage.getItem('pass'));
        registerForm.reset();
    }
}

let loginForm = document.querySelector('#log-form');
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    login();
});
function login(){
    let logemail = document.querySelector('#logEmail').value,
        logpass = document.querySelector('#logPass').value;
    let logErrorText = document.querySelector('#log-error-text');
    // console.log(logemail, logpass);
    if(logemail == "" || logpass == ""){
        logErrorText.innerHTML = "All Fields are required";
        logErrorText.style.display = "block";
        logErrorText.style.backgroundColor = "#DC3545";
        logErrorText.style.color = "#a31b29";
        //alert('All Fields are required');
        loginForm.reset();
        document.getElementById('logEmail').focus();
    }else{
        let validEmail = false;
        let validPass = false;
        let emailArray = JSON.parse(localStorage.getItem('emailarr'));
        let passArray = JSON.parse(localStorage.getItem('pass'));
        if(emailArray){
            emailArray.forEach(element => {
                if(element == logemail){
                    validEmail = true;
                    return;
                }
            });
        }
        if(passArray){
            passArray.forEach(passEle => {
                if(passEle == logpass){
                    validPass = true;
                }
            });
        }
        if(validEmail && validPass){
            logErrorText.innerHTML = "Login Successul";
            logErrorText.style.display = "block";
            logErrorText.style.backgroundColor = "#28A745";
            logErrorText.style.color = "#167e2e";
            //alert('login success');
            loginForm.reset();
            document.getElementById('logEmail').focus();
        }
        else{
            logErrorText.innerHTML = "Invalid Username or password";
            logErrorText.style.display = "block";
            logErrorText.style.backgroundColor = "#DC3545";
            logErrorText.style.color = "#a31b29";
            //alert('invalid')
            loginForm.reset();
            document.getElementById('logEmail').focus();
        }
    }

}