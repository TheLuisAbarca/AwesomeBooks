const formElement = document.querySelector("form");
const titleElement = document.querySelector('input[name="title2Add"');
const authorElement = document.querySelector('input[name="author2Add"');
const bookList = document.querySelector("#bookList");
let books = [];

function book(title, author) {
  this.title = title;
  this.author = author;
  this.cnt = bookList.childElementCount;

  this.addBook = (title, author) => {
    const bookElement = document.createElement("li");
    bookElement.setAttribute("id", `book-${this.cnt}`);
    bookElement.innerHTML = ` <h2>${title}</h2>
                              <p>${author}</p>
                              <button onClick=RemoveButton("${this.cnt}") type="submit">Remove</button>`;
    document.querySelector("#bookList").appendChild(bookElement);
  };
}

function AddButton() {
  let genericbook = new book(titleElement.value, authorElement.value);
  books.push(genericbook);
  console.log(books);
  genericbook.addBook(titleElement.value, authorElement.value);
  localStorage.setItem("books", JSON.stringify(books));
}

function RemoveButton(index) {
  console.log(index);
  const bookElement = document.querySelector(`#book-${index}`);
  bookList.removeChild(bookElement);
  books.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(books));
  console.log(books);
}

function listBooks() {
  const bookList = document.querySelector("#bookList");
  books = JSON.parse(localStorage.getItem("books"));
  if (!books) {
    books = [];
  }
  bookList.innerHTML = "";
  console.log(books);
  let genericbook = new book(titleElement.value, authorElement.value);
  books.forEach((book) => {
    genericbook.addBook(book.title, book.author);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  listBooks();
});
