import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatagoloComponent } from './pages/catagolo/catagolo.component';
import { ListBookComponent } from './pages/catagolo/list-book/list-book.component';

const routes: Routes = [
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
