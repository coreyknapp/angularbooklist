import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { BookService } from '../book-service.service';
import { Book } from '../book';

@Component({
  selector: '[app-add-book]',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Input() title:string;
  @Input() author:string;
  @Input() isbn:string;
  @Input() pages:number;
  @Input() finished:boolean;
  @Output() adder = new EventEmitter<Book>();
  constructor() { }
  ngOnInit() {
  }
  addBook():void {
    this.adder.emit({
      id: -1,
      title: this.title,
      author: this.author,
      isbn: this.isbn,
      pages: this.pages,
      finished: this.finished
    });
  }
  cancelBook():void {
    this.adder.emit(null);
  }
}
