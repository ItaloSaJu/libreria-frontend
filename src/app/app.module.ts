import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { CatagoloComponent } from './pages/catagolo/catagolo.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { ListBookComponent } from './pages/catagolo/list-book/list-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import {MatGridListModule} from '@angular/material/grid-list';
import { DetailBookComponent } from './pages/detail-book/detail-book.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { VisulizzatiRecenteComponent } from './pages/detail-book/visulizzati-recente/visulizzati-recente.component';
import { BookCategoryComponent } from './component/book-category/book-category.component';
import { CommentiBookComponent } from './component/commenti-book/commenti-book.component';
import { FormBookComponent } from './component/commenti-book/form-book/form-book.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    CatagoloComponent,
    HomepageComponent,
    ListBookComponent,
    DetailBookComponent,
    VisulizzatiRecenteComponent,
    BookCategoryComponent,
    CommentiBookComponent,
    FormBookComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTreeModule,
    MatGridListModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
