const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));

function validate() {
    var username=document.getElementById('username');
    var email=document.getElementById('email');
    var password=document.getElementById('password');
    var password2=document.getElementById('password2');

    if(email.value=="")
       { alert("Please enter your valid email");
        return false;
    }

        
    else if (username.value=="")
    {
        alert("Please Enter valid username");
        return false;
    }
    else if (password.value=="")
    {
        alert("Please enter your password");
        return false;
    }
    else if(password2.value !=password.value)
    {
        alert("Password didn't match. Please try again");
        return false;
    }

    // Login
    else if(email.value=="a@b.com" && password.value=="asd"){
    //    { alert("Please enter your valid email");
        return true;
    }
    else if(username.value=="a@b.com" && password.value=="asd"){
        //    { alert("Please enter your valid email");
            return true;
        }

    else
    {
        return true;
    }

}