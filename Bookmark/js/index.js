var InputName = document.getElementById("name");
var InputSite = document.getElementById("site");
var containerBookmarkElement = document.getElementById("containerBookmarkElement");
var bookmarkList;

function displayBookmark(BookmarkToDisplay) {
    var displayContainer = ``;
    for (var i = 0; i < BookmarkToDisplay.length; i++) {
        displayContainer += `
        <div class="output bg-secondary-subtle p-2 my-2 border border-2 d-flex justify-content-between">
            <p class="w-25">(${i + 1})</p>
            <p class="w-25 fw-semibold">${BookmarkToDisplay[i].Name}</p>
            <button class="w-25 btn btn-danger" onclick="deleteBookmark(${i});">
          Delete
        </button>
        <button class="w-25 btn btn-info" onclick="visitSite('${BookmarkToDisplay[i].Site}')">
        Visit
      </button>
         </div>`;
    }
    containerBookmarkElement.innerHTML = displayContainer;
}

// First Time user
// Check if bookmarks exist in local storage
if (localStorage.getItem('bookmarks') === null) {
    bookmarkList = [];
} else {
    bookmarkList = JSON.parse(localStorage.getItem('bookmarks'));
    displayBookmark(bookmarkList);
}

function addBookMark() {
    if (!isValidUrl(site)) {
        Swal.fire(`Site Name or Url is not valid, Please follow the rules below :
        1. Site name must contain at least 3 characters
        2. Site URL must be a valid one`);
        return;
    }
    var bookmark = {
        Name: InputName.value,
        Site: InputSite.value
    };
  
    bookmarkList.push(bookmark);
    saveToLocalStorage();
    displayBookmark(bookmarkList);
    clearForm();
}

function saveToLocalStorage() {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkList));
}

function clearForm() {
    InputName.value = null;
    InputSite.value = null;
}

function deleteBookmark(IndexToDelete) {
    bookmarkList.splice(IndexToDelete, 1);
    saveToLocalStorage();
    displayBookmark(bookmarkList);
}

function visitSite(url) {
    window.open(url, '_blank');
}

function isValidUrl(url) {
    // Regular expression pattern to validate URL format
    var urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i;
    return urlPattern.test(url);
}

function searchForBookmark(term)
{
    var filterBookmakeList = [];
    for (var i=0; i<bookmarkList.length; i++)
    {
        if(bookmarkList[i].Name.toLowerCase().includes(term.toLowerCase()) == true)
        {
            filterBookmakeList.push(bookmarkList[i]);
        }
    }
    displayBookmark(filterBookmakeList);
}