const addBookButton = document.getElementById('new-book');
const formDialog = document.getElementById('form-dialog');
const cancelButton = document.getElementById('cancel-button');
const addButton = document.getElementById('add-button2');
var bookName="";
var author="";
var pages="";
var readStatus="";
const arr = [];

addBookButton.addEventListener("click", () => {
    formDialog.showModal();
});

cancelButton.addEventListener("click", (event) => {
    formDialog.close();
    event.preventDefault();
});

addButton.addEventListener("click", (event) => {
    //event.preventDefault();
    bookName = document.getElementById('bookName').value;
    author = document.getElementById('authorName').value;
    pages = document.getElementById('pagesNum').value;
    readStatus = document.getElementById('check-field').checked;
    if(readStatus==true)
       readStatus = "Read";
    else
       readStatus = "Unread";
       addBookToLibrary();    
});

/*function test(){
    console.log(bookName);
    console.log(author);
    console.log(pages);
    console.log(readStatus);
}*/

//constructor
function Book(){
    this.bookName=bookName;
    this.author=author;
    this.pages=pages;
    this.readStatus=readStatus;
}

function addBookToLibrary(){
    const bookObj = new Book();
    arr.push(bookObj);

    /*console.log(bookObj);
    console.log(arr);*/

    
}