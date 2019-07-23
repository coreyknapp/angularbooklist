import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { AddBookComponent } from './add-book/add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewBooksComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
