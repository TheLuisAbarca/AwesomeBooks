const btnBars = document.getElementById('barsBtn');
const mobMenu = document.getElementsByClassName('mobMenu');
const closeIcon = document.getElementsByClassName('closeIcon');
const listEl = document.querySelectorAll('.mobMenu > ul > li');
const bodyel = document.querySelector('body');

const bookList = document.querySelector('#bookList');
const currentTime = document.querySelector('.currentTime');
/* eslint-disable */
const { DateTime } = luxon;
/* eslint-enable */
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
    if (
      document.querySelector('#author').value === ''
      || document.querySelector('#title').value === ''
    ) {
      alert('Please, fill both Author and Title.'); // eslint-disable-line no-alert
      return false;
    }
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
    this.listSection();
    let bookDisplay = '';
    if (this.data.length === 0) {
      document.querySelector('#bookList').innerHTML = '<p class="text-center mt-3">No Record Found</p>';
    } else {
      this.data.map((e, i) => {
        bookDisplay += `<tr class="text-muted">
                        <th class="align-middle" scope="row">${i + 1}</th>
                          <td class="align-middle">"${this.data[i].title}" by ${
  this.data[i].author
}</td>
                          <td class="cell">
                          <button class="btn border-3 text-white remove">
                          <i class="fas fa-trash"> Remove</i></button>
                          </td>
                        </tr>`;

        document.querySelector('#bookList').innerHTML = bookDisplay;

        const buttons = document.querySelectorAll('button.remove');
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

  static getNumSuf(value) {
    const numSuf = ['th', 'st', 'nd', 'rd'];
    const lastDigit = value % 10;
    return numSuf[lastDigit] || numSuf[0];
  }

  static getDateTime() {
    setInterval(() => {
      const currDT = DateTime.local();
      currDT.loc.intl = 'en-US';
      const modCurrDT = currDT
        .toLocaleString({
          ...DateTime.DATETIME_MED_WITH_SECONDS,
          month: 'long',
        })
        .split(' ');
      const dateNum = parseInt(modCurrDT[1], 10);
      modCurrDT[1] = dateNum + this.getNumSuf(dateNum);
      modCurrDT[modCurrDT.length - 1] = modCurrDT[modCurrDT.length - 1].toLowerCase();
      currentTime.innerHTML = modCurrDT.join(' ');
    }, 1000);
  }

  static toggleMenu() {
    btnBars.addEventListener('click', () => {
      mobMenu[0].style.display = 'flex';
      bodyel.style.overflow = 'hidden';
    });

    closeIcon[0].addEventListener('click', () => {
      mobMenu[0].style.display = 'none';
      bodyel.style.overflow = 'auto';
    });

    listEl.forEach((el) => {
      el.addEventListener('click', () => {
        mobMenu[0].style.display = 'none';
        bodyel.style.overflow = 'auto';
      });
    });
  }

  static addSection(name) {
    const section = document.querySelector(`#${name}`);
    section.style.display = 'block';
    return true;
  }

  static removeSection(name) {
    const section = document.querySelector(`#${name}`);
    section.style.display = 'none';
    return true;
  }

  static bookForm() {
    this.removeSection('contactSection');
    this.removeSection('listSection');
    return this.addSection('bookForm');
  }

  static listSection() {
    this.removeSection('bookForm');
    this.removeSection('contactSection');
    return this.addSection('listSection');
  }

  static contactSection() {
    this.removeSection('listSection');
    this.removeSection('bookForm');
    return this.addSection('contactSection');
  }
}
Book.toggleMenu();
Book.getDateTime();
Book.displayBook();
