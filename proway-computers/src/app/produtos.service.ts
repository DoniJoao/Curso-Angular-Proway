import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;

  constructor() { }

  getAll(): IProduto[] {
    return this.produtos;
  }

  getOne(produtoId: number): IProduto | undefined {
    return this.produtos.find(produto => produto.id === produtoId);
  }
}
