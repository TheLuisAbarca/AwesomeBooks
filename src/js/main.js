const titleElement = document.querySelector('input[name="title2Add"');
const authorElement = document.querySelector('input[name="author2Add"');
const bookList = document.querySelector('#bookList');
let books = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
  this.cnt = bookList.childElementCount;

  this.addBook = (title, author) => {
    const bookElement = document.createElement('li');
    bookElement.setAttribute('id', `book-${this.cnt}`);
    bookElement.innerHTML = ` <h2>${title}</h2>
                              <p>${author}</p>
                              <button onClick=RemoveButton("${this.cnt}") type="submit">Remove</button>`;
    document.querySelector('#bookList').appendChild(bookElement);
  };
}

function AddButton() { // eslint-disable-line no-unused-vars
  const genericbook = new Book(titleElement.value, authorElement.value);
  books.push(genericbook);
  genericbook.addBook(titleElement.value, authorElement.value);
  localStorage.setItem('books', JSON.stringify(books));
}

function RemoveButton(index) { // eslint-disable-line no-unused-vars
  const bookElement = document.querySelector(`#book-${index}`);
  bookList.removeChild(bookElement);
  books.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(books));
}

function listBooks() {
  const bookList = document.querySelector('#bookList');
  books = JSON.parse(localStorage.getItem('books'));
  if (!books) {
    books = [];
  }
  bookList.innerHTML = '';
  const genericbook = new Book(titleElement.value, authorElement.value);
  books.forEach((book) => {
    genericbook.addBook(book.title, book.author);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  listBooks();
});
