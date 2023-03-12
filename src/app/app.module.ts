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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    CatagoloComponent,
    HomepageComponent,
    ListBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
