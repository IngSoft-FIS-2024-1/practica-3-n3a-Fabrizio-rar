import { describe, it, expect, beforeEach } from '@jest/globals';
import Library from '../library.js';
import Book from '../book.js';

describe('Library', () => {
  let myLibrary;

  beforeEach(() => {
    myLibrary = new Library('Biblioteca');
  });

  it('add a book to the library', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120, 500);
    const aBook = myLibrary.getInventory()[myLibrary.getInventory().length - 1];
    expect(aBook).toBeInstanceOf(Book);
    expect(aBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the total number of books', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120, 300);
    myLibrary.addBook('El Hombre que Calculaba', 'Malba Tahan', 286, 400);
    expect(myLibrary.totalBooks()).toBe(2);
  });

  it('set the name of the library', () => {
    myLibrary.setName('Montevideo');
    expect(myLibrary.getName()).toBe('Montevideo');
  });

  it('throw an error when setting an invalid name', () => {
    expect(() => myLibrary.setName(123)).toThrow('Nombre debe ser una string');
  });
  
  it('throw an error when setting an empty name', () => {
    expect(() => myLibrary = new Library('')).toThrow('Nombre no puede ser vacio');
  });

  it('return the total number of words', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 100, 300);
    myLibrary.addBook('100 Años de Soledad', 'Gabriel Garcia Marquez', 200, 200);
    myLibrary.totalWords();
    expect(myLibrary.getTotalWords()).toBe(500);
  });

});