import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book-service.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  books:Book[] = [];
  curEdit:number = -1;
  @Input() curTitle:string;
  @Input() curAuthor:string;
  @Input() curIsbn:string;
  @Input() curPages:number;
  @Input() curFinished:boolean;
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

  edit(id:number):void {
    var curBook = this.books.find(b => b.id == id);
    this.curEdit = id;
    this.curTitle = curBook.title;
    this.curAuthor = curBook.author;
    this.curIsbn = curBook.isbn;
    this.curPages = curBook.pages;
    this.curFinished = curBook.finished;
  }

  saveEdit():void {
    var oldBook = this.books.find(b => b.id == this.curEdit);
    oldBook.title = this.curTitle;
    oldBook.author = this.curAuthor;
    oldBook.isbn = this.curIsbn;
    oldBook.pages = this.curPages;
    oldBook.finished = this.curFinished;
    this.bookService.updateBook(oldBook);
    this.curEdit = -1;
    this.curTitle = "";
    this.curAuthor = "";
    this.curIsbn = "";
  }
}