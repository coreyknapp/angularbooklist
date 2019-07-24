import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book-service.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  books:Book[] = [];
  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.fillBooksArray();
  }

  fillBooksArray(): void {
    this.bookService.getBooks().subscribe(value => this.books = value);
  }

  delete(book:Book):void {
    this.books = this.books.filter(b => b !== book);
    this.bookService.deleteBook(book.id);
  }
}