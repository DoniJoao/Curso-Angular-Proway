import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/produtos.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css'],
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;
  carrinhoService: any;
  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoServico: NotificacaoService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get('id'));
    this.produto = this.produtosService.getOne(produtoId);
  }

  adicionarAoCarrinho() {
    this.notificacaoServico.notificar("o produto foi adicionado ao carrinho");
    const produto: IProdutoCarrinho = {
      ...this.produto,
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinhoo(produto);
  }
}
