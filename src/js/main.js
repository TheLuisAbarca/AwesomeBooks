const titleElement = document.querySelector('input[name="title2Add"');
const authorElement = document.querySelector('input[name="author2Add"');
const bookList = document.querySelector('#bookList');
let books = [];
let newArray;

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook(title, author) {
    let index = bookList.childElementCount;
    const bookElement = document.createElement('li');
    bookElement.setAttribute('id', `book-${index}`);
    bookElement.innerHTML = ` <h2>${title}</h2>
                              <p>${author}</p>
                              <button onClick=RemoveButton("${index}") type="submit">Remove</button>`;
    document.querySelector('#bookList').appendChild(bookElement);
  };
/*
  splice = (index, cnt) => {
    for(let i = index; i< index + cnt; i++){ 
      removeElement(i);
    } 
    t_this.splice(index.cnt)  
  }
*/
  removeBook(index){
    //document.querySelector(`#book-${index}`).remove();
    const bookElement = document.querySelector(`#book-${index}`);
    bookList.removeChild(bookElement);
  }
}

function AddButton() { // eslint-disable-line no-unused-vars
  const genericbook = new Book(titleElement.value, authorElement.value);
  books = books.concat(genericbook);
  console.log(books);
  genericbook.addBook(titleElement.value, authorElement.value);
  localStorage.setItem('books', JSON.stringify(books));
  //titleElement.value = '';
  //authorElement.value = '';
}

function RemoveButton(index) { // eslint-disable-line no-unused-vars
  /*const bookElement = document.querySelector(`#book-${index}`);
  bookList.removeChild(bookElement);*/
  const genericbook = new Book(titleElement.value, authorElement.value);
  genericbook.removeBook(index);
  //books = books.splice(index, 1);
  console.log(index);
  //books.splice(index, 1);
  console.log(books);
  /*var filtered = books.filter(function(el) {
    return el.cnt !== index;
  });*/
  //books = filtered;
  //console.log(filtered);
  localStorage.setItem('books', JSON.stringify(books));
  //localStorage.setItem('books', JSON.stringify(filtered));
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
  /*const newBook = new Book(titleElement.value, authorElement.value, bookList.childElementCount);
  newBook.addBook(titleElement.value, authorElement.value, bookList.childElementCount);*/
});
