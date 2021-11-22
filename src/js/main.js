const formElement = document.querySelector("form");
const titleElement = document.querySelector('input[name="title2Add"');
const authorElement = document.querySelector('input[name="author2Add"');
const addButton = document.querySelector("#addButton");
let books = [];
let counter = 0;

function book(title, author, counter) {
  this.title = title;
  this.author = author;
  this.cnt = counter;

  this.addBook = (cnt) => {
    const bookElement = document.createElement("li");
    // bookElement.innerHTML = `<h2>${this.title}</h2>
    //     <p>${this.author}</p>
    //     <button id="#removeButton${cnt}" onClick=RemoveButton("${cnt}") type="submit">Remove</button>`;
    
    bookElement.innerHTML = books.map((book, i) => {
        if(i === cnt){
           return `<h2>${book.title}</h2>
        <p>${book.author}</p>
        <button id="#removeButton${cnt}" onClick=RemoveButton(${i}) type="submit">Remove</button>`; 
        }
    });
    document.querySelector("#bookList").appendChild(bookElement);
    console.log(books);
  };

  this.removeBook = () => {
    const removeButton = document.querySelector(`#removeButton${this.counter}`);
    removeButton.addEventListener("click", () => {
      document
        .querySelector(`#bookList li:nth-child(${this.counter})`)
        .remove();
      // counter -= 1;
    });
  };

  this.listBooks = () => {
    const bookList = document.querySelector("#bookList");
    bookList.innerHTML = "";
    books.forEach((book) => {
      book.addBook();
    });
  };
}

function AddButton() {
  let genericbook = new book(titleElement.value, authorElement.value, counter);
  books.push(genericbook);
  genericbook.addBook(counter);
  counter += 1;
}

function RemoveButton(index) {
  //   const removeButton = document.querySelector(`#removeButton${this.counter}`);
  //   console.log(removeButton);
  //   removeButton.addEventListener("click", () => {
  //     document.querySelector(`#bookList li:nth-child(${this.counter})`).remove();
  //     counter -= 1;
  //   });
// books = books.filter(function (item) {
//   return item.cnt.toString() !== cnt;
// });
books.splice(index, 1);
}

addButton.addEventListener("click", AddButton);

document.addEventListener("DOMContentLoaded", () => {
  const genericbook = new book();
  genericbook.listBooks();
});
