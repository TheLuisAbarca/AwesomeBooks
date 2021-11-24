const bookList = document.querySelector('#bookList');
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static storeBooks(books) {
    return localStorage.setItem('books', books);
  }

  static getBooks() {
    let books = JSON.parse(localStorage.getItem('books'));
    if (!books) {
      books = [];
      return books;
    }
    return books;
  }

  static data = this.getBooks();

  static addBookMethod() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    return this.addBook(title, author);
  }

  static addBook(title, author) {
    this.data.push({
      title,
      author,
    });
    this.storeBooks(JSON.stringify(this.data));
    document.querySelector('#author').value = '';
    document.querySelector('#title').value = '';
    return this.displayBook();
  }

  static removeBook(index) {
    this.data = this.data.filter((e, i) => i !== index);
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
    let bookDisplay = '';
    if (this.data.length === 0) {
      document.querySelector('#bookList').innerHTML = '';
    } else {
      this.data.map((e, i) => {
        bookDisplay += `<h2>${this.data[i].title}</h2>
                              <p>${this.data[i].author}</p>
                              <button class="select">Remove</button>
                              `;

        document.querySelector('#bookList').innerHTML = bookDisplay;

        const buttons = document.querySelectorAll('button');
        buttons.forEach((e, i) => {
          buttons[i].addEventListener(
            'click',
            (event) => {
              Book.removeBook(Book.removeBook(this.data.indexOf(this.data[i])));
              event.preventDefault();
            },
            false,
          );
        });
        return this.data;
      });
    }
  }
}
Book.displayBook();