
const document = document.getElementId("script");
const prompt = require("prompt-sync")();

const library = [];
const newBook = null;
const addBook = document.querySelector(".newbook");
const bookEntry = document.querySelector(".book");


function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}


function addBooktoLib(){
    const title = prompt("What is the title of your book?");
    const author = prompt("Who wrote the book?");
    const pages = parseInt(prompt("How many pages are in your book?"));

    const newBook = new Book(title, author, pages);
    library.push(newBook);
    console.log("Book added: ", newBook);
    return newBook;
    }

// function displayBook(book){
    
// }

function displayBook(book){
    book = newBook; 
    bookEntry.textContent += book;
}

addBook.addEventListener(addBooktoLib, "click");




