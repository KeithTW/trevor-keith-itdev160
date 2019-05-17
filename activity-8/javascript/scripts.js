// Returns the element using its id
function getEle(eleID) {
    return document.getElementById(eleID);

}

// Shows Modal
function openModal() {
    var modal = getEle("modal-dialog");
    var backdrop = getEle("modal-backdrop");

    modal.classList.add("visible");
    backdrop.classList.add("visible");

}

// Hides Modal
function closeModal() {
    var title = getEle("edit-title-text");
    var text = getEle("edit-content-text");
    var modal = getEle("modal-dialog");
    var backdrop = getEle("modal-backdrop");

    title.value = "";
    text.value = "";

    modal.classList.remove("visible");
    backdrop.classList.remove("visible");

}

// Gets user's input, creates the post then closes the modal
function saveContent() {
    var title = getEle("edit-title-text");
    var text = getEle("edit-content-text");
    var content = getEle("display-content");

    var newTitle = document.createElement("h2");
    var newTitleText = document.createTextNode(title.value);
    var newContent = document.createElement("p");
    var newContentText = document.createTextNode(text.value);

    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);

    closeModal();

}

window.addEventListener("load", function() {
    var newButton = getEle("new-button");
    var cancelButton = getEle("cancel-button");
    var saveButton = getEle("save-button");

    newButton.addEventListener("click", openModal);
    cancelButton.addEventListener("click", closeModal);
    saveButton.addEventListener("click", saveContent);

});