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
import { VisulizzatiRecenteComponent } from './component/visulizzati-recente/visulizzati-recente.component';
import { BookCategoryComponent } from './component/book-category/book-category.component';
import { CommentiBookComponent } from './component/commenti-book/commenti-book.component';



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
    CommentiBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTreeModule,
    MatGridListModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
