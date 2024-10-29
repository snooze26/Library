
const library = [];
const newBook = null;
const addBook = document.querySelector("#newbook");
const bookList = document.querySelector("#bookList");
const formDiv = document.querySelector("#form");
const bookForm = document.querySelector("#bookForm");


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayBooks(){
    bookList.innerHTML = " ";
    library.forEach((book, index) =>{
        let bookCard = document.createElement("tr");
        bookCard.classList.add("bookRow");

        const row = document.createElement("tr");
        row.classList.add("bookRow");

        const titleCell = document.createElement("td");
        const authorCell = document.createElement("td");
        const pagesCell = document.createElement("td");
        const removeBtn = document.createElement("button");
        // const readBtn = document.createElement("button");


        removeBtn.textContent = "Remove";
        removeBtn.style.background = "red";
        // readBtn.textContent = "Read"; 



        titleCell.textContent = book.title;
        authorCell.textContent = book.author;
        pagesCell.textContent = book.pages;

        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(pagesCell);
        row.appendChild(removeBtn);
        // row.appendChild(readBtn);


        bookList.appendChild(row);

        removeBtn.addEventListener("click", () =>{
            library.splice(index, 1);
            displayBooks();
        })

        // readBtn.addEventListener("click", () =>{
        //     readBtn.style.background = "green";
        //     readBtn.style.color = "white";
        //     // readBtn.style.opacity = "0.5";
        // })

    });
}

addBook.addEventListener("click", () =>{

    if(formDiv.style.display === "none" || formDiv.style.display === ""){
        formDiv.style.display = "block";
    }else {
        formDiv.style.display = "none";
    }
    
})

formDiv.addEventListener("submit", function(e){
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    
    const newBook = new Book(title, author, pages);
    library.push(newBook);
    console.log(`Book Added: ${newBook}`);

    bookForm.reset();

    displayBooks();

    formDiv.style.display = "none";
});


displayBooks();


