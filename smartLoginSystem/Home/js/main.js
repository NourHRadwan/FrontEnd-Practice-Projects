var currentUser = localStorage.getItem("currentUser");
var userNameElement = document.getElementById("userName");
var logoutButton = document.getElementById("logoutButton");
if (currentUser) {
  currentUser = currentUser.replace(/['"]+/g, ''); // Remove quotation marks
  userNameElement.innerHTML = currentUser;
} else {
  userNameElement.innerHTML = "No user found"; // Display a default message if currentUser is not found in localStorage
}

logoutButton.addEventListener('click', function(){
    if (currentUser) {
        localStorage.removeItem("currentUser");
        window.location.href = "../Login/index.html";
    }
})