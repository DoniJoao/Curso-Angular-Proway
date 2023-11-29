import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/produtos.service';
import { IProduto, IProdutoCarrinho } from '../produtos';
import { NotificacaoService } from 'src/app/notificacao.service';
import { CarrinhoService } from 'src/app/carrinho.service';  // Certifique-se de importar o CarrinhoService

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css'],
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoServico: NotificacaoService,
    private carrinhoService: CarrinhoService  // Injete o CarrinhoService no construtor
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get('id'));
    this.produto = this.produtosService.getOne(produtoId);
  }

  adicionarAoCarrinho() {
    this.notificacaoServico.notificar("O produto foi adicionado ao carrinho");

    // Remova o operador ? (opcional) da propriedade id no objeto produto
    const produto: IProdutoCarrinho = {
      quantidade: this.quantidade,
      id: this.produto?.id || 0,  // Se o id for undefined, definimos como 0 (ou ajuste conforme sua lógica)
      descricao: this.produto?.descricao || '',
      preco: this.produto?.preco || 0,
      descricaoPreco: this.produto?.descricaoPreco || '',
      quantidadeEstoque: this.produto?.quantidadeEstoque || 0,
      imagem: this.produto?.imagem || ''
    };

    this.carrinhoService.adicionarAoCarrinho(produto);
  }

}
