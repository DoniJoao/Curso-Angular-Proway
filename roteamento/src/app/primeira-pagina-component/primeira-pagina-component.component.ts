import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primeira-pagina-component',
  templateUrl: './primeira-pagina-component.component.html',
  styleUrls: ['./primeira-pagina-component.component.css']
})
export class PrimeiraPaginaComponentComponent {
  constructor(
    private router: Router
  ) { }

  moverparaSegundaPagina() {
    this.router.navigate(["segunda-pagina"])
  }
}
