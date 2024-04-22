import { Item } from "../types/Product";

export const data: Item[] = [
  {
    id: 1,
    nome: "carros",
    produtos: [
      { id: 1, nome: "Corsa", preco: 50000 },
      { id: 2, nome: "Clio", preco: 60000 },
      { id: 3, nome: "Fusca", preco: 70000 },
    ],
  },
  {
    id: 2,
    nome: "esporte",
    produtos: [
      { id: 1, nome: "Chuteira", preco: 100 },
      { id: 2, nome: "Bola", preco: 200 },
      { id: 3, nome: "Luva", preco: 300 },
    ],
  },
  {
    id: 3,
    nome: "moda",
    produtos: [
      { id: 1, nome: "Camisa", preco: 50 },
      { id: 2, nome: "Moletom", preco: 60 },
      { id: 3, nome: "Jaqueta", preco: 70 },
    ],
  },
  {
    id: 4,
    nome: "celulares",
    produtos: [
      { id: 1, nome: "Samsung s21", preco: 3400 },
      { id: 2, nome: "Iphone 13", preco: 5500 },
      { id: 3, nome: "Xiaomi 10", preco: 1600 },
    ],
  },
  {
    id: 5,
    nome: "imóveis",
    produtos: [
      { id: 1, nome: "Chakará/Sítio", preco: 100000 },
      { id: 2, nome: "Casa", preco: 150000 },
      { id: 3, nome: "Apartamento", preco: 200000 },
    ],
  },
  {
    id: 6,
    nome: "decoracao",
    produtos: [
      { id: 1, nome: "Abajur", preco: 20 },
      { id: 2, nome: "Quadro", preco: 30 },
      { id: 3, nome: "Vaso", preco: 40 },
    ],
  },
];
