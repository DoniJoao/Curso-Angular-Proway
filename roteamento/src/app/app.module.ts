import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PrimeiraPaginaComponentComponent } from './primeira-pagina-component/primeira-pagina-component.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiraPaginaComponentComponent,
    SegundaPaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
