import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatagoloComponent } from './pages/catagolo/catagolo.component';
import { ListBookComponent } from './pages/catagolo/list-book/list-book.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {
    path:"*",
    component:HomepageComponent
  },
  {
    path: "catalogo",
    component: CatagoloComponent,
    children:[
      {
        path:":categoriaId",
        component:ListBookComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
