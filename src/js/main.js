const formElement = document.querySelector('form');
const titleElement = document.querySelector('input[name="title2Add"');
const authorElement = document.querySelector('input[name="author2Add"');
const addButton = document.querySelector('#addButton');
let books = [];

function book(title, author) {
    this.counter = 0;
    this.title = title;
    this.author = author;

    this.addBook = () => {
        const bookElement = document.createElement('li');
        bookElement.innerHTML = `<h2>${this.title}</h2>
        <p>${this.author}</p>
        <button id="removeButton${this.counter}" type="submit">Remove</button>`;
        document.querySelector('#bookList').appendChild(bookElement);
        this.counter += 1;
    }

    this.removeBook = () => {
        const removeButton = document.querySelector(`#removeButton${this.counter}`);
        console.log(removeButton);
        removeButton.addEventListener('click', () => {
            document.querySelector(`#bookList li:nth-child(${this.counter})`).remove();
            this.counter -= 1;
        });
    }

    this.listBooks = () => {
        const bookList = document.querySelector('#bookList');
        bookList.innerHTML = '';
        books.forEach(book => {
            book.addBook();
        });
    }
}

function AddButton() {
    let genericbook = new book(titleElement.value, authorElement.value);
    genericbook.addBook();
    books.push(genericbook);
}

function RemoveButton() {
    const removeButton = document.querySelector(`#removeButton${this.counter}`);
    console.log(removeButton);
    removeButton.addEventListener('click', () => {
        document.querySelector(`#bookList li:nth-child(${this.counter})`).remove();
        this.counter -= 1;
    });
}

addButton.addEventListener('click', AddButton);

document.addEventListener('DOMContentLoaded', () => {
    const genericbook = new book();
    genericbook.listBooks();

});