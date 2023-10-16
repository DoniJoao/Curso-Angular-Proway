import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimeiraPaginaComponentComponent } from './primeira-pagina-component/primeira-pagina-component.component';

const routes: Routes = [
  { path: "primeira-pagina", component: PrimeiraPaginaComponentComponent}
]

@NgModule({
  declarations: [],
  imports: [ RouterModule,forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
