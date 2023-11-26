import { Component, OnInit } from '@angular/core';
import { IProdutoCarrinho } from '../produtos/produtos';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit{
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;
  router: any;

  constructor(
    public carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();
  }
  calculaTotal() {
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco + curr.quantidade), 0)
  }

  removeProdutoCarrinho() {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calculaTotal();
  }

  comprar() {
    alert("Parabens, voce finalizou sua comprar");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }
}
