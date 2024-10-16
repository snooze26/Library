
const library = [];
const newBook = null;
const addBook = document.querySelector("#newbook");
const bookList = document.querySelector("#bookList");
const bookForm = document.querySelector("#form");


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
    displayBooks();
    }

function displayBooks(){
    bookList.innerHTML = " ";
    library.forEach(book =>{
        let bookCard = document.createElement("tr");
        bookCard.classList.add("bookRow");

        const row = document.createElement("tr");
        row.classList.add("bookRow");

        const titleCell = document.createElement("td");
        const authorCell = document.createElement("td");
        const pagesCell = document.createElement("td");


        titleCell.textContent = book.title;
        authorCell.textContent = book.author;
        pagesCell.textContent = book.pages;

        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(pagesCell);


        bookList.appendChild(row);

    });
}


addBook.addEventListener("click", () =>{
    if(bookForm.style.display === "none" || bookForm.style.display === ""){
        bookForm.style.display = "block";
    }else {
        bookForm.style.display = "none";
    }

})



displayBooks();


