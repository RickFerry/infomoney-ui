import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  lancamentos = [
    {
      tipo: "DESPESA",
      descricao: "Compra de pão",
      dataVencimento: new Date(2017, 5, 30),
      dataPagamento: null,
      valor: 4.55,
      pessoa: "Padaria do José",
    },
    {
      tipo: "RECEITA",
      descricao: "Venda de software",
      dataVencimento: new Date(2017, 5, 10),
      dataPagamento: new Date(2017, 5, 10),
      valor: 80000,
      pessoa: "Atacado Brasil",
    },
    {
      tipo: "DESPESA",
      descricao: "Impostos",
      dataVencimento: new Date(2017, 6, 20),
      dataPagamento: null,
      valor: 14312,
      pessoa: "Ministério da Fazenda",
    },
    {
      tipo: "DESPESA",
      descricao: "Mensalidade de escola",
      dataVencimento: new Date(2017, 5, 5),
      dataPagamento: new Date(2017, 5, 6),
      valor: 800,
      pessoa: "Escola Abelha Rainha",
    },
    {
      tipo: "RECEITA",
      descricao: "Venda de carro",
      dataVencimento: new Date(2017, 7, 30),
      dataPagamento: null,
      valor: 55000,
      pessoa: "Sebastião Souza",
    },
    {
      tipo: "DESPESA",
      descricao: "Aluguel",
      dataVencimento: new Date(2017, 6, 10),
      dataPagamento: new Date(2017, 6, 9),
      valor: 1750,
      pessoa: "Casa Nova Imóveis",
    },
    {
      tipo: "DESPESA",
      descricao: "Mensalidade de academia",
      dataVencimento: new Date(2017, 6, 13),
      dataPagamento: null,
      valor: 180,
      pessoa: "Academia Top",
    },
    {
      tipo: "RECEITA",
      descricao: "Venda de ações",
      dataVencimento: new Date(2017, 6, 3),
      dataPagamento: new Date(2017, 6, 4),
      valor: 4500,
      pessoa: "Banco do Brasil",
    },
  ];
}
