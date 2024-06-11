import Book from './book.js';

class Library {

  #name;
  #inventory = [];
  #totalWords;
  #wordCount;

  constructor(name) {
    this.#totalWords = 0;
    this.setName(name);
  }

  setName(name) {
    if (typeof (name) !== 'string') {
      throw new Error('Nombre debe ser una string');
    }
    name = name.trim();
    if (name.length === 0) {
      throw new Error('Nombre no puede ser vacio');
    }
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  addBook(title, author, pages, words) {
    const newBook = new Book(title, author, pages);
    newBook.setWords(words);
    this.#inventory.push(newBook);
  }

  getInventory() {
    return this.#inventory;
  }

  totalBooks() {
    return this.#inventory.length;
  }

  totalWords() {
    this.#wordCount = 0;
    for(let i = 0; i < this.#inventory.length; i++) {
      this.#wordCount += this.#inventory[i].getWords();
    }
    this.#totalWords = this.#wordCount;
  }

  getTotalWords() {
    return this.#totalWords;
  }
}

export default Library;
