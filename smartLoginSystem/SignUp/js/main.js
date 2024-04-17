var userNameInput = document.getElementById("name");
var userEmailInput = document.getElementById("email");
var userPassInput = document.getElementById("password");

var userInfo; // array to store user info

if (localStorage.getItem("User") != null)
{
    userInfo = JSON.parse(localStorage.getItem("User"));
}
else
{
    userInfo = [];
}

function saveToLocalStorage()
{
    localStorage.setItem("User", JSON.stringify(userInfo));
    console.log(localStorage.getItem("User"));
}


function addUser()
{
    if(isValidUserInput(userNameInput,userNameRegEx)
       & isValidUserInput(userEmailInput,userEmailRegEx)
       & isValidUserInput(userPassInput,userPassRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/))
    {
        var user = {
            name: userNameInput.value,
            email: userEmailInput.value,
            password: userPassInput.value,
        }
        userInfo.push(user);
        console.log(user);
        saveToLocalStorage();
        console.log(userInfo);
        resetForm();
    }
    else
    {
        alert("Invalid Data");
    }
}
console.log(userInfo);
function resetForm()
{
    userNameInput.value = "";
    userEmailInput.value = "";
    userPassInput.value = "";
    userNameInput.classList.remove("is-valid");
    userEmailInput.classList.remove("is-valid");
    userPassInput.classList.remove("is-valid");
}
var userNameRegEx = /^[A-Z].+$/;
var userEmailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var userPassRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;


function isValidUserInput(element, regEx)
{
    if(regEx.test(element.value) == true)
    {
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        element.nextElementSibling.classList.replace("d-block", "d-none")
        return true;
    }
    else
    {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        element.nextElementSibling.classList.replace("d-none", "d-block")
        return false;
    }
}