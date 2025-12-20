import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // Dados do About
  habilidades = {
    programacao: [
      { nome: 'HTML', icon: '/assets/icons/html.png' },
      { nome: 'CSS', icon: '/assets/icons/css.png' },
      { nome: 'JavaScript', icon: '/assets/icons/js.png' },
      { nome: 'Python', icon: '/assets/icons/python.png' },
      { nome: 'Java', icon: '/assets/icons/java.png' },
      { nome: 'SQL', icon: '/assets/icons/sql.png' },
      { nome: 'C', icon: '/assets/icons/c.png' }
    ],
    ferramentas: [
      { nome: 'Excel', icon: '/assets/icons/excel.png' },
      { nome: 'VS Code', icon: '/assets/icons/vs code.png' },
      { nome: 'Figma', icon: '/assets/icons/figma.png' },
      { nome: 'Git', icon: '/assets/icons/git1.png' },
      { nome: 'Linux', icon: '/assets/icons/linux.png' },
      { nome: 'Windows', icon: '/assets/icons/windows.png' },
      { nome: 'GitHub', icon: '/assets/icons/gitHub.png' },
      { nome: 'PowerBI', icon: '/assets/icons/powerbi.png' }
    ],
    interpessoais: [
      { nome: 'Liderança', icon: '/assets/icons/liderança.png' },
      { nome: 'Proatividade', icon: '/assets/icons/proatividade.png' },
      { nome: 'Design Thinking', icon: '/assets/icons/design.png' },
      { nome: 'Aprendizado Contínuo', icon: '/assets/icons/aprender.png' },
      { nome: 'Trabalho em equipe', icon: '/assets/icons/trabalho.png' },
      { nome: 'Lingua Inglesa', icon: '/assets/icons/ingles.png' }
    ]
  };

  atividades = [
    {
      titulo: '🖥 Estudando & Aprimorando',
      descricao: 'Atualmente, estou aprofundando meus conhecimentos em desenvolvimento de software, ciência de dados e engenharia de dados, explorando novas tecnologias e frameworks para expandir minhas habilidades.'
    },
    {
      titulo: '🌐 Desenvolvimento Web',
      descricao: 'Construindo projetos web personalizados com HTML, CSS, JavaScript e outras tecnologias modernas, sempre buscando criar interfaces dinâmicas e experiências intuitivas.'
    },
    {
      titulo: '🤖 Machine Learning & Análise de Dados',
      descricao: 'Participando de desafios de Ciência de Dados e Engenharia de Dados, aplicando conceitos de análise exploratória, modelagem preditiva e pipelines de dados para transformar informações em insights valiosos.'
    },
    {
      titulo: '⚡ Competição & Desafios',
      descricao: 'Gosto de colocar minhas habilidades à prova participando de hackathons, competições de programação e desafios técnicos, sempre em busca de aprendizado e inovação.'
    },
    {
      titulo: '🎯 Esportes & Equilíbrio',
      descricao: 'Acredito que um bom equilíbrio entre corpo e mente é essencial. No tempo livre, pratico esportes e atividades que me ajudam a manter a energia e a concentração.'
    },
    {
      titulo: '🔗 Vamos nos conectar!',
      descricao: 'Adoraria trocar ideias sobre tecnologia, inovação e novos projetos! 🚀'
    }
  ];

  // Dados do Portfolio
  projetos = [
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

  // Dados do Resume
  curriculoPath = '/assets/Curriculo.pdf';
  curriculoNome = 'Maria_Clara_Curriculo.pdf';

  // Dados do Contact
  nome = '';
  email = '';
  mensagem = '';

  ngOnInit(): void {
    this.animarTitulos();
  }

  ngOnDestroy(): void {
    // Cleanup se necessário
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset para a barra de navegação
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  abrirProjeto(link: string): void {
    window.open(link, '_blank');
  }

  enviarMensagem(): void {
    const assunto = encodeURIComponent('Contato do Portfólio');
    const corpo = encodeURIComponent(`Nome: ${this.nome}\nEmail: ${this.email}\n\nMensagem:\n${this.mensagem}`);
    const mailtoLink = `mailto:dutramaria165@gmail.com?subject=${assunto}&body=${corpo}`;
    
    window.location.href = mailtoLink;
  }

  private animarTitulos(): void {
    const titulos = document.querySelectorAll('.section-title');
    const verificarScroll = () => {
      titulos.forEach((titulo) => {
        const elemento = titulo as HTMLElement;
        const posicao = elemento.getBoundingClientRect().top;
        const alturaTela = window.innerHeight * 0.8;

        if (posicao < alturaTela) {
          elemento.style.opacity = '1';
          elemento.style.transform = 'translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', verificarScroll);
    verificarScroll();
  }
}
