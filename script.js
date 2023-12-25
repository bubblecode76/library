const addBookButton = document.getElementById('new-book');
const formDialog = document.getElementById('form-dialog');

addBookButton.addEventListener("click", () => {
    formDialog.showModal();
});