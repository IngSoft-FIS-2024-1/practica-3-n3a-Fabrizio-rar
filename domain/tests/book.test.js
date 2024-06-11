import {describe, it, expect, beforeEach} from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350)).toThrow('Título debe ser una string');
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350)).toThrow('Título no puede estar vacío');
  });

  it('check author is a string', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 1, 350)).toThrow('Autor debe ser una string');
  });

  it('check author is not empty', () => {
    myBook = new Book('Cuentos de la Selva', '', 350);
    expect(myBook.getAuthor()).toBe('Anónimo');
  });

  it('check page param is a number', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 'asd')).toThrow('Pages no es un numero');
  });

  it('check pages not < 1', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 0)).toThrow('Pages no puede ser menor a uno');
  });

  it('toString()', () => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);
    myBook.setWords(500);
    expect(myBook.toString()).toBe('Título: Cuentos de la Selva Autor: Horacio Quiroga Páginas: 350 Palabras: 500');
  });

  it('return correct amount of words', () => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);
    myBook.setWords(500);
    expect(myBook.getWords()).toBe(500);
  });

  it('check words is a number', () => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);
    expect(() => myBook.setWords('asd')).toThrow('Words debe ser un numero');
  });

  it('check words not < 1', () => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);
    expect(() => myBook.setWords(0)).toThrow('Words debe ser mayor a cero');
  });

  it('check wordsPerPage return correct amount', () => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);
    myBook.setWords(500);
    expect(myBook.wordsPerPage()).toBe(500 / 350);
  });

});
