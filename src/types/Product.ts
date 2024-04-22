interface Product {
  id: number;
  nome: string;
  preco: number;
}

export interface Item {
  id: number;
  nome: string;
  produtos: Product[];
}
