import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ViewBooksComponent } from './view-books/view-books.component';
import { AddBookComponent } from './add-book/add-book.component';

const routes: Routes = [
  {path: '', redirectTo: '/viewBooks', pathMatch: 'full'},
  {path: 'viewBooks', component: ViewBooksComponent},
  {path: 'addBook', component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
