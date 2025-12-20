import { Component } from '@angular/core';

interface Projeto {
  titulo: string;
  descricao: string;
  imagem: string;
  link: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projetos: Projeto[] = [
    {
      titulo: 'Aplicativo BrainHub',
      descricao: 'Nesse projeto mostrei meus conhecimentos, criando uma área de cadastro, login e a plataforma que tem por objetivo ser um app para estudantes.',
      imagem: '/assets/img/brainhub.png',
      link: 'https://github.com/dutra1904/BrainHub.git'
    },
    {
      titulo: 'Gerenciador de Tarefas',
      descricao: 'Um simples gerenciador de tarefas feito em C, com funcionalidades para adicionar, visualizar, atualizar, completar e excluir tarefas concluídas.',
      imagem: '/assets/img/gerenciador-background.png',
      link: 'https://github.com/dutra1904/gerenciador_de_tarefas.git'
    },
    {
      titulo: 'Jogo Espacial',
      descricao: 'Este trabalho apresenta o desenvolvimento de um jogo de batalha espacial, Stellar Clash, que utiliza estruturas de dados avançadas, como listas, filas, árvores e grafos.',
      imagem: '/assets/img/batalha-background.png',
      link: 'https://github.com/dutra1904/stellar_clash.git'
    },
    {
      titulo: 'Flashcards',
      descricao: 'Ferramenta para estudar com cartões interativos e personalizados.',
      imagem: '/assets/img/flashcard-background.png',
      link: 'https://dutra1904.github.io/flash_cards/'
    },
    {
      titulo: 'Random Meal Generator',
      descricao: 'Este programa exibe uma refeição aleatória obtida da API TheMealDB. Ao clicar no botão, ele busca uma nova refeição e exibe o nome, imagem, ingredientes e instruções de preparo. Além disso, se disponível, um vídeo do YouTube é incorporado para auxiliar no preparo da receita.',
      imagem: '/assets/img/random-meal-background.png',
      link: 'https://dutra1904.github.io/random-meal-generator/'
    },
    {
      titulo: 'Calculadora Simples',
      descricao: 'Uma calculadora simples e estilosa com um tema roxo único, desenvolvida com HTML, CSS e JavaScript.',
      imagem: '/assets/img/calculadora-background.png',
      link: 'https://dutra1904.github.io/calculadora/'
    }
  ];

  abrirProjeto(link: string): void {
    window.open(link, '_blank');
  }
}

