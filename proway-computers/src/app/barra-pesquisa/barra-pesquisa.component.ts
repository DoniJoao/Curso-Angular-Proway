import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent {
  descricao = "";
  router: any;
  constructor() { }

  ngOnInit(): void {
  }

  pesquisar() {
    if (this.descricao) {
      this.router.navigate(["produtos"], {queryParams: { descricao: this.descricao } });
      return;
    }

    this.router.navigate(["produtos"]);
  }
}
