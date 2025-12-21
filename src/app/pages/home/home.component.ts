import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // Dados do About - Habilidades Técnicas organizadas por tópicos
  habilidadesPorTopico = [
    {
      topico: 'Desenvolvimento',
      habilidades: [
        {
          nome: 'HTML5',
          icon: '/assets/icons/html.png',
          descricao: 'Estruturação semântica de páginas web, boas práticas de acessibilidade e organização de conteúdo.'
        },
        {
          nome: 'JavaScript',
          icon: '/assets/icons/js.png',
          descricao: 'Manipulação do DOM, lógica de programação, eventos, validações e interações dinâmicas no front-end.'
        },
        {
          nome: 'Python',
          icon: '/assets/icons/python.png',
          descricao: 'Lógica de programação, automação de tarefas, manipulação de dados e integração com outras ferramentas.'
        },
        {
          nome: 'TypeScript',
          icon: '/assets/icons/Type.webp',
          descricao: 'Desenvolvimento com tipagem estática, melhorando a qualidade do código e facilitando a manutenção de aplicações.'
        },
        {
          nome: 'Tailwind CSS',
          icon: '/assets/icons/tailancss.png',
          descricao: 'Framework CSS utilitário para criação de interfaces modernas e responsivas com classes utilitárias.'
        }
      ]
    },
    {
      topico: 'Dados e Integrações',
      habilidades: [
        {
          nome: 'APIs & Integrações',
          icon: '/assets/icons/js.png',
          descricao: 'Consumo de APIs REST, integração entre front-end e back-end e manipulação de dados externos.'
        },
        {
          nome: 'Banco de Dados (conceitos)',
          icon: '/assets/icons/sql.png',
          descricao: 'Noções de banco de dados, organização de informações, consultas básicas e estruturação de dados.'
        },
        {
          nome: 'Power BI',
          icon: '/assets/icons/powerbi.png',
          descricao: 'Análise, tratamento e visualização de dados por meio de dashboards interativos e indicadores.'
        },
        {
          nome: 'Excel',
          icon: '/assets/icons/excel.png',
          descricao: 'Análise e organização de dados, uso de fórmulas, tabelas e gráficos para apoio à tomada de decisão.'
        },
        {
          nome: 'Supabase',
          icon: '/assets/icons/supabase.png',
          descricao: 'Plataforma backend-as-a-service com banco de dados PostgreSQL, autenticação, storage e APIs em tempo real.'
        }
      ]
    },
    {
      topico: 'Ferramentas, Cloud e Gestão',
      habilidades: [
        {
          nome: 'Cloudflare',
          icon: '/assets/icons/cloudflare.png',
          descricao: 'Conceitos de cloud, segurança, DNS, performance e proteção de aplicações web.'
        },
        {
          nome: 'Figma',
          icon: '/assets/icons/figma.png',
          descricao: 'Criação de protótipos, design de interfaces e noções de UI/UX focadas na experiência do usuário.'
        },
        {
          nome: 'Git & GitHub',
          icon: '/assets/icons/gitHub.png',
          descricao: 'Versionamento de código, controle de alterações, organização de repositórios e trabalho colaborativo com Git.'
        },
        {
          nome: 'Inteligência Artificial',
          icon: '/assets/icons/ia.png',
          descricao: 'Utilização de IA como ferramenta de apoio ao desenvolvimento, automação de tarefas e aumento de produtividade.'
        },
        {
          nome: 'Administração de Projetos',
          icon: '/assets/icons/trabalho.png',
          descricao: 'Planejamento, organização de tarefas, acompanhamento de prazos e trabalho colaborativo.'
        },
        {
          nome: 'Metodologias Ágeis (conceitos)',
          icon: '/assets/icons/design.png',
          descricao: 'Organização de projetos utilizando conceitos de metodologias ágeis como Scrum e Kanban.'
        }
      ]
    }
  ];

  atividades = [];

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

  // Controle do carrossel de projetos
  projetoAtualIndex = 0;

  ngOnInit(): void {
    this.animarTitulos();
    this.observarAssinatura();
  }

  projetoAnterior(): void {
    if (this.projetoAtualIndex > 0) {
      this.projetoAtualIndex--;
    } else {
      this.projetoAtualIndex = this.projetos.length - 1;
    }
  }

  proximoProjeto(): void {
    if (this.projetoAtualIndex < this.projetos.length - 1) {
      this.projetoAtualIndex++;
    } else {
      this.projetoAtualIndex = 0;
    }
  }

  get projetoAtual() {
    return this.projetos[this.projetoAtualIndex];
  }

  ngOnDestroy(): void {
    // Cleanup se necessário
  }

  private observarAssinatura(): void {
    setTimeout(() => {
      const assinatura = document.getElementById('assinatura');
      if (!assinatura) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              assinatura.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.5, // Ativa quando 50% da assinatura está visível
          rootMargin: '0px'
        }
      );

      observer.observe(assinatura);
    }, 500);
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

  enviarMensagem(event?: Event): void {
    // Prevenir comportamento padrão do formulário
    if (event) {
      event.preventDefault();
    }

    // Validar campos antes de enviar
    if (!this.nome || !this.email || !this.mensagem) {
      alert('Por favor, preencha todos os campos do formulário.');
      return;
    }

    // Validar formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      alert('Por favor, insira um endereço de email válido.');
      return;
    }

    // Criar link mailto
    const assunto = encodeURIComponent('Contato do Portfólio');
    const corpo = encodeURIComponent(`Nome: ${this.nome}\nEmail: ${this.email}\n\nMensagem:\n${this.mensagem}`);
    const mailtoLink = `mailto:dutramaria165@gmail.com?subject=${assunto}&body=${corpo}`;
    
    // Abrir cliente de email
    try {
      window.location.href = mailtoLink;
      
      // Limpar formulário após um pequeno delay
      setTimeout(() => {
        this.nome = '';
        this.email = '';
        this.mensagem = '';
      }, 100);
    } catch (error) {
      console.error('Erro ao abrir cliente de email:', error);
      alert('Não foi possível abrir o cliente de email. Por favor, envie um email diretamente para dutramaria165@gmail.com');
    }
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
