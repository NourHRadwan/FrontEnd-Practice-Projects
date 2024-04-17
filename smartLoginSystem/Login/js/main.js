var userEmailInput = document.getElementById("email");
var userPassInput  = document.getElementById("password");
var userInfo; // array to store user info


userInfo = JSON.parse(localStorage.getItem("User"));


document.getElementById("submit").addEventListener('click', function()
{
    if(userEmailInput.value === '' || userPassInput === '' )
    {
        userPassInput.nextElementSibling.classList.replace("d-none", "d-block");
    }
    else
    {
        verifyUser();
    }
})


function verifyUser(){
    var flag = false;
    for(var i = 0; i < userInfo.length; i++)
    {
        if(userEmailInput.value == userInfo[i].email && userPassInput.value == userInfo[i].password)
        {
            localStorage.setItem("currentUser", JSON.stringify(userInfo[i].name));
            window.location.href = '../Home/home.html';
            flag = true;
            break;
        }
    }

    if(!flag)
    {
        alert("incorrect email or password")
    }

}