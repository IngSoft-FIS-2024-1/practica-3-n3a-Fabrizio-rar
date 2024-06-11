class Book {

  #title;
  #author;
  #pages;
  #words;
  
  constructor(title, author, pages) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setPages(pages);
  }

  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  getPages() {
    return this.#pages;
  }

  getWords() {
    return this.#words;
  }

  setTitle(title) {
    if (typeof (title) !== 'string') {
      throw new Error('Título debe ser una string');
    }
    title = title.trim();
    if (title.length === 0) {
      throw new Error('Título no puede estar vacío');
    }
    this.#title = title;
  }

  setAuthor(author) {
    if (typeof (author) !== 'string') {
      throw new Error('Autor debe ser una string');
    }
    author = author.trim();
    if (author.length === 0) {
      author = 'Anónimo';
    }
    this.#author = author;
  }

  setPages(pages) {
    if (!this.isNumber(pages)) {
      throw new Error('Pages no es un numero');
    }
    if (pages < 1) {
      throw new Error('Pages no puede ser menor a uno');
    }
    pages = Math.trunc(pages);
    this.#pages = pages;
  }

  isNumber(number) {
    return typeof (number) === 'number' || !isNaN(number);
  }

  setWords(words) {
    if(words < 1) {
      throw new Error('Words debe ser mayor a cero');
    }
    if (this.isNumber(words)) {
      this.#words = words;
    } else {
      throw new Error('Words debe ser un numero');
    }
  }

  wordsPerPage() {
    return this.#words / this.#pages;
  }

  toString() {
    return `Título: ${this.#title} Autor: ${this.#author} Páginas: ${this.#pages} Palabras: ${this.#words}`;
  }
}

export default Book;
