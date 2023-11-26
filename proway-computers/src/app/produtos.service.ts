import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  getAll(): IProduto[] | undefined {
    throw new Error('Method not implemented.');
  }
  produtos: IProduto[] = produtos;

  constructor() { }
}
getAll() {
  return this.produtos;
}

getOne(produtoId: number) {
  return this.produtos.find(produto => produto.id = produtoId);
}
function getOne(produtoId: any, number: any) {
  throw new Error('Function not implemented.');
}

