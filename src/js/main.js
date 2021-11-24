// const titleElement = document.querySelector('input[name="title2Add"');
// const authorElement = document.querySelector('input[name="author2Add"');
// const bookList = document.querySelector("#bookList");
// let books = [];
// let newArray;

// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }

//   addBook(title, author) {
//     let index = bookList.childElementCount;
//     const bookElement = document.createElement("li");
//     bookElement.setAttribute("id", `book-${index}`);
//     bookElement.innerHTML = ` <h2>${title}</h2>
//                               <p>${author}</p>
//                               <button onClick=RemoveButton("${index}") type="submit">Remove</button>`;
//     document.querySelector("#bookList").appendChild(bookElement);
//   }
//   /*
//   splice = (index, cnt) => {
//     for(let i = index; i< index + cnt; i++){
//       removeElement(i);
//     }
//     t_this.splice(index.cnt)
//   }
// */
//   removeBook(index) {
//     //document.querySelector(`#book-${index}`).remove();
//     const bookElement = document.querySelector(`#book-${index}`);
//     bookList.removeChild(bookElement);
//   }
// }

// function AddButton() {
//   // eslint-disable-line no-unused-vars
//   const genericbook = new Book(titleElement.value, authorElement.value);
//   books = books.concat(genericbook);
//   console.log(books);
//   genericbook.addBook(titleElement.value, authorElement.value);
//   localStorage.setItem("books", JSON.stringify(books));
//   //titleElement.value = '';
//   //authorElement.value = '';
// }

// function RemoveButton(index) {
//   // eslint-disable-line no-unused-vars
//   /*const bookElement = document.querySelector(`#book-${index}`);
//   bookList.removeChild(bookElement);*/
//   const genericbook = new Book(titleElement.value, authorElement.value);
//   // genericbook.removeBook(index);
//   //books = books.splice(index, 1);
//   // books.splice(index, 1);
//   console.log(books);
//   const filtered = books.filter((e, i) => {
//     console.log(i);
//     return i != index;
//   });
//   console.log(index);
//   //books = filtered;
//   //console.log(filtered);
//   localStorage.setItem("books", JSON.stringify(filtered));
//   //localStorage.setItem('books', JSON.stringify(filtered));
// }

// function listBooks() {
//   const bookList = document.querySelector("#bookList");
//   books = JSON.parse(localStorage.getItem("books"));
//   if (!books) {
//     books = [];
//   }
//   bookList.innerHTML = "";
//   const genericbook = new Book(titleElement.value, authorElement.value);
//   books.forEach((book) => {
//     genericbook.addBook(book.title, book.author);
//   });
// }

// document.addEventListener("DOMContentLoaded", () => {
//   listBooks();
//   /*const newBook = new Book(titleElement.value, authorElement.value, bookList.childElementCount);
//   newBook.addBook(titleElement.value, authorElement.value, bookList.childElementCount);*/
// });

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = aut;
    console.log(this.data);
    hor;
  }

  static addBookMethod() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    return this.addBook(title, author);
  }

  static data = [];

  static addBook(title, author) {
    Book.data.push({
      title: title,
      author: author,
    });
    return this.displayBook();
  }

  static removeBook(index) {
    let newBooks = this.data.splice(index, 1);
    console.log(this.data);
    return this.data;
  }

  static displayBook() {
    let bookDisplay = "";

    this.data.map((e, i) => {
      bookDisplay += `<h2>${this.data[i].title}</h2>
                              <p>${this.data[i].author}</p>
                              <button id="rg" type="button">Remove</button>
                              `;
    });
    

    return (document.querySelector("#bookList").innerHTML = bookDisplay);
  }
}

Book.displayBook;
