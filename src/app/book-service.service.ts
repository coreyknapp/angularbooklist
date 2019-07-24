import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, of } from 'rxjs';

var bookArray:Book[] = [
  {id: 1, title: "Mistborn", author: "Brandon Sanderson", isbn: "342-6934-3210", pages: 600, finished: true},
  {id: 2, title: "Mort", author: "Terry Pratchett", isbn: "823-8583-0128", pages: 345, finished: true},
  {id: 3, title: "The Man in the High Castle", author: "Philip K. Dick", isbn: "759-0932-3582", pages: 329, finished: true},
  {id: 4, title: "Code Complete", author: "Steve McConnell", isbn: "324-9545-12356", pages: 2027, finished: false},
  {id: 5, title: "Dune", author: "Frank Herbert", isbn: "123-564-9874", pages: 975, finished: false},
  {id: 6, title: "Dirk Gently", author: "Douglas Adams", isbn: "543-6543-5462", pages: 240, finished: true}
];
@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBook(id:number):Observable<Book>{
    return of(bookArray.find(book => book.id === id));
  }

  getBooks():Observable<Book[]>{
    return of(bookArray);
  }

  deleteBook(id:number):void {
    bookArray = bookArray.filter(b => b.id !== id);
  }

  updateBook(book:Book):void {
    this.getBook(book.id).subscribe(foundBook => {
      foundBook.title = book.title;
      foundBook.author = book.author;
      foundBook.isbn = book.isbn;
      foundBook.pages = book.pages;
      foundBook.finished = book.finished;
    });
  }
}
