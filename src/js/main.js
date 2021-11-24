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
const bookList = document.querySelector("#bookList");
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static storeBooks(books) {
    return localStorage.setItem("books", books);
  }

  static getBooks() {
    let books = JSON.parse(localStorage.getItem("books"));
    return !books ? (books = []) : books;
  }

  static data = this.getBooks();

  static addBookMethod() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    return this.addBook(title, author);
  }

  static addBook(title, author) {
    this.data.push({
      title: title,
      author: author,
    });
    this.storeBooks(JSON.stringify(this.data));
    document.querySelector("#author").value = "";
    document.querySelector("#title").value = "";
    return this.displayBook();
  }

  static removeBook(index) {
    this.data = this.data.filter((e, i) => {
      return i !== index;
    });
    this.storeBooks(JSON.stringify(this.data));
    return this.displayBook();
  }

  static domCreateBook(title, author, index) {
    const eachBook = document.createDocumentFragment();
    const eachList = document.createElement('li');
    const eachTitle = document.createElement('h2');
    const eachAuthor = document.createElement('p');
    const removeBtn = document.createElement('button');

    eachBook.appendChild(eachList);
    eachList.id = `book-${index}`;
    eachList.appendChild(eachTitle);
    eachList.appendChild(eachAuthor);
    eachList.appendChild(removeBtn);
    bookList.appendChild(eachBook);

    eachTitle.textContent = title;
    eachAuthor.textContent = author;
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'rm-btn';
    removeBtn.addEventListener('click', () => this.removeBook(index));
  }

  static displayBook() {
    let bookDisplay = "";
    if (this.data.length === 0) {
      document.querySelector("#bookList").innerHTML = "";
    } else {
      this.data.map((e, i) => {
        bookDisplay += `<h2>${this.data[i].title}</h2>
                              <p>${this.data[i].author}</p>
                              <button class="select">Remove</button>
                              `;

        document.querySelector("#bookList").innerHTML = bookDisplay;

        const buttons = document.querySelectorAll("button");
        buttons.forEach((e, i) => {
          buttons[i].addEventListener(
            "click",
            (event) => {
              Book.removeBook(Book.removeBook(this.data.indexOf(this.data[i])));
              event.preventDefault();
            },
            false
          );
        });
      });
    }
  }
}
Book.displayBook();