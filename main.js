import Library from './domain/library.js';
import Book from './domain/book.js';

const libraryName = document.getElementById('library-name');
const inpTotalBooks = document.getElementById('inp-total-books');
const btnAdd = document.getElementById('btn-add');
const inpTitle = document.getElementById('inp-title');
const inpAuthor = document.getElementById('inp-author');
const inpPages = document.getElementById('inp-pages');
const inpWords = document.getElementById('inp-words');

const myLibrary = new Library('Papiros');
libraryName.innerHTML = myLibrary.getName();

function updateTotalBooks() {
  inpTotalBooks.value = myLibrary.totalBooks();
  document.getElementById('palabras-totales').innerHTML = myLibrary.getTotalWords();
}

function updateInventory() {
  const emptyBookList = document.getElementById('empty-book-list');
  const bookListContainer = document.getElementById('book-list-container');
  const bookList = document.getElementById('book-list');

  emptyBookList.classList.add('d-none');
  bookListContainer.classList.remove('d-none');

  const addedBook = myLibrary.getInventory()[myLibrary.getInventory().length - 1];
  let newListElement = document.createElement('li');
  newListElement.classList.add('list-group-item');
  newListElement.innerText = addedBook.toString();
  bookList.appendChild(newListElement);
}

btnAdd.addEventListener('click', () => {
  const bookErrorContainer = document.getElementById('add-book-error');
  const bookError = document.getElementById('add-book-error-msg');
  try {
    let myBook = new Book(inpTitle.value, inpAuthor.value, parseInt(inpPages.value));
    myBook.setWords(parseInt(inpWords.value));
    myLibrary.addBook(myBook);
    clearInputs();
    bookErrorContainer.classList.add('d-none');
    updateInventory();
    updateTotalBooks();
  }
  catch (error) {
    bookErrorContainer.classList.remove('d-none');
    bookError.innerText = error;
  }
});

function clearInputs() {
  inpTitle.value = '';
  inpAuthor.value = '';
  inpPages.value = '';
}

updateTotalBooks();