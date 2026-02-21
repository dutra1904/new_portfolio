import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
//import { SignaturePad } from 'signature_pad'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, AboutMeComponent, PortfolioComponent, ResumeComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // Controle do idioma - padrão: Inglês
  currentLanguage: 'EN' | 'PT' = 'EN';

  // Objeto de traduções completo
  translations = {
    PT: {
      // Header
      header: {
        development: 'Desenvolvimento',
        available: 'Estou disponível',
        home: 'HOME',
        about: 'SOBRE MIM',
        portfolio: 'PORTFÓLIO',
        resume: 'CURRÍCULO',
        contact: 'CONTATO'
      },
      // Home/Hero
      home: {
        viewProjects: 'Ver Projetos',
        downloadResume: 'Baixar Currículo',
        subtitle: 'Desenvolvedora Full Stack em formação | Engenharia da Computação',
        tags: {
          frontend: 'Front-end',
          backend: 'Back-end',
          data: 'Dados',
          ai: 'IA'
        },
        description: 'Desenvolvo soluções digitais completas, unindo interface, lógica, dados e tecnologia para resolver problemas reais.'
      },
      // About
      about: {
        greeting: 'Olá, eu sou a Maria Clara.',
        paragraph1: 'Crio soluções digitais completas para projetos ambiciosos e orientados por design.',
        paragraph2: 'Utilizando tecnologias de ponta e código robusto e elegante, desenvolvo aplicações que unem interface, lógica, dados e inteligência artificial para criar experiências impactantes.',
        paragraph3: 'Atuo tanto no Front-end quanto no Back-end, além de trabalhar com análise de dados, cloud, design de interfaces e inteligência artificial, sempre buscando soluções eficientes e bem estruturadas.',
        paragraph4: 'Tenho perfil analítico, boa organização e facilidade para aprender novas tecnologias, além de experiência com administração e gerenciamento de projetos.',
        closing: 'Obrigada por explorar meu portfólio.',
        technicalSkills: 'Habilidades Técnicas'
      },
      // Skills topics
      skillsTopics: {
        development: 'Desenvolvimento',
        dataAndIntegrations: 'Dados e Integrações',
        toolsCloudManagement: 'Ferramentas, Cloud e Gestão'
      },
      // Projects
      projects: {
        title: 'PORTFÓLIO',
        previous: 'Projeto anterior',
        next: 'Próximo projeto',
        goToProject: 'Ir para projeto'
      },
      // Resume
      resume: {
        title: 'CURRÍCULO',
        academic: 'Formação Acadêmica',
        engineering: 'Engenharia da Computação',
        inProgress: 'Em andamento',
        technicalKnowledge: 'Conhecimentos Técnicos',
        development: 'Desenvolvimento',
        developmentDesc: 'Front-end e Back-end, aplicações funcionais e responsivas',
        dataAnalysis: 'Análise de Dados',
        dataAnalysisDesc: 'Dashboards e visualizações com Power BI e Excel',
        cloudSecurity: 'Cloud & Segurança',
        cloudSecurityDesc: 'Cloudflare, performance e proteção de aplicações',
        tools: 'Ferramentas',
        toolsDesc: 'Git, GitHub, Figma, metodologias ágeis',
        ai: 'Inteligência Artificial',
        aiDesc: 'Automação e otimização de processos',
        languages: 'Idiomas',
        portuguese: 'Português',
        english: 'Inglês',
        native: 'Nativo',
        advanced: 'Avançado',
        downloadFull: 'Baixar Currículo Completo (PDF)',
        downloadDesc: 'Versão completa com formação, habilidades, projetos e informações de contato.'
      },
      // Contact
      contact: {
        title: 'CONTATO',
        subtitle: 'Estudante de Engenharia da Computação',
        birthYear: '2005',
        bornIn: 'Nascido em:',
        openTo: 'Estou aberta a oportunidades, estágios, projetos e conexões profissionais na área de tecnologia.',
        name: 'Nome',
        email: 'Email',
        message: 'Mensagem',
        send: 'Enviar',
        fillAllFields: 'Por favor, preencha todos os campos do formulário.',
        invalidEmail: 'Por favor, insira um endereço de email válido.',
        emailSubject: 'Contato do Portfólio',
        emailError: 'Não foi possível abrir o cliente de email. Por favor, envie um email diretamente para dutramaria165@gmail.com'
      }
    },
    EN: {
      // Header
      header: {
        development: 'Development',
        available: 'I\'m available',
        home: 'HOME',
        about: 'ABOUT ME',
        portfolio: 'PORTFOLIO',
        resume: 'RESUME',
        contact: 'CONTACT'
      },
      // Home/Hero
      home: {
        viewProjects: 'View Projects',
        downloadResume: 'Download Resume',
        subtitle: 'Full Stack Developer in training | Computer Engineering',
        tags: {
          frontend: 'Front-end',
          backend: 'Back-end',
          data: 'Data',
          ai: 'AI'
        },
        description: 'I develop complete digital solutions, combining interface, logic, data and technology to solve real problems.'
      },
      // About
      about: {
        greeting: 'Hello, I\'m Maria Clara.',
        paragraph1: 'I create complete digital solutions for ambitious, design-driven projects.',
        paragraph2: 'Using cutting-edge technologies and robust, elegant code, I develop applications that combine interface, logic, data, and artificial intelligence to create impactful experiences.',
        paragraph3: 'I work on both Front-end and Back-end, in addition to working with data analysis, cloud, interface design and artificial intelligence, always seeking efficient and well-structured solutions.',
        paragraph4: 'I have an analytical profile, good organization and ease in learning new technologies, in addition to experience with administration and project management.',
        closing: 'Thank you for exploring my portfolio.',
        technicalSkills: 'Technical Skills'
      },
      // Skills topics
      skillsTopics: {
        development: 'Development',
        dataAndIntegrations: 'Data and Integrations',
        toolsCloudManagement: 'Tools, Cloud and Management'
      },
      // Projects
      projects: {
        title: 'PORTFOLIO',
        previous: 'Previous project',
        next: 'Next project',
        goToProject: 'Go to project'
      },
      // Resume
      resume: {
        title: 'RESUME',
        academic: 'Academic Background',
        engineering: 'Computer Engineering',
        inProgress: 'In progress',
        technicalKnowledge: 'Technical Knowledge',
        development: 'Development',
        developmentDesc: 'Front-end and Back-end, functional and responsive applications',
        dataAnalysis: 'Data Analysis',
        dataAnalysisDesc: 'Dashboards and visualizations with Power BI and Excel',
        cloudSecurity: 'Cloud & Security',
        cloudSecurityDesc: 'Cloudflare, performance and application protection',
        tools: 'Tools',
        toolsDesc: 'Git, GitHub, Figma, agile methodologies',
        ai: 'Artificial Intelligence',
        aiDesc: 'Automation and process optimization',
        languages: 'Languages',
        portuguese: 'Portuguese',
        english: 'English',
        native: 'Native',
        advanced: 'Advanced',
        downloadFull: 'Download Full Resume (PDF)',
        downloadDesc: 'Complete version with education, skills, projects and contact information.'
      },
      // Contact
      contact: {
        title: 'CONTACT',
        subtitle: 'Computer Engineering Student',
        birthYear: '2005',
        bornIn: 'Born in:',
        openTo: 'I\'m open to opportunities, internships, projects and professional connections in the technology field.',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
        fillAllFields: 'Please fill in all form fields.',
        invalidEmail: 'Please enter a valid email address.',
        emailSubject: 'Portfolio Contact',
        emailError: 'Unable to open email client. Please send an email directly to dutramaria165@gmail.com'
      }
    }
  };

  // Dados do About - Habilidades Técnicas organizadas por tópicos (português)
  habilidadesPorTopicoPT = [
    {
      topico: 'Desenvolvimento',
      habilidades: [
        {
          nome: 'HTML5',
          icon: 'assets/icons/html.png',
          descricao: 'Estruturação semântica de páginas web, boas práticas de acessibilidade e organização de conteúdo.'
        },
        {
          nome: 'JavaScript',
          icon: 'assets/icons/js.png',
          descricao: 'Manipulação do DOM, lógica de programação, eventos, validações e interações dinâmicas no front-end.'
        },
        {
          nome: 'Python',
          icon: 'assets/icons/python.png',
          descricao: 'Lógica de programação, automação de tarefas, manipulação de dados e integração com outras ferramentas.'
        },
        {
          nome: 'TypeScript',
          icon: 'assets/icons/Type.webp',
          descricao: 'Desenvolvimento com tipagem estática, melhorando a qualidade do código e facilitando a manutenção de aplicações.'
        },
        {
          nome: 'Tailwind CSS',
          icon: 'assets/icons/tailancss.png',
          descricao: 'Framework CSS utilitário para criação de interfaces modernas e responsivas com classes utilitárias.'
        }
      ]
    },
    {
      topico: 'Dados e Integrações',
      habilidades: [
        {
          nome: 'APIs & Integrações',
          icon: 'assets/icons/js.png',
          descricao: 'Consumo de APIs REST, integração entre front-end e back-end e manipulação de dados externos.'
        },
        {
          nome: 'Banco de Dados (conceitos)',
          icon: 'assets/icons/sql.png',
          descricao: 'Noções de banco de dados, organização de informações, consultas básicas e estruturação de dados.'
        },
        {
          nome: 'Power BI',
          icon: 'assets/icons/powerbi.png',
          descricao: 'Análise, tratamento e visualização de dados por meio de dashboards interativos e indicadores.'
        },
        {
          nome: 'Excel',
          icon: 'assets/icons/excel.png',
          descricao: 'Análise e organização de dados, uso de fórmulas, tabelas e gráficos para apoio à tomada de decisão.'
        },
        {
          nome: 'Supabase',
          icon: 'assets/icons/supabase.png',
          descricao: 'Plataforma backend-as-a-service com banco de dados PostgreSQL, autenticação, storage e APIs em tempo real.'
        }
      ]
    },
    {
      topico: 'Ferramentas, Cloud e Gestão',
      habilidades: [
        {
          nome: 'Cloudflare',
          icon: 'assets/icons/cloudflare.png',
          descricao: 'Conceitos de cloud, segurança, DNS, performance e proteção de aplicações web.'
        },
        {
          nome: 'Figma',
          icon: 'assets/icons/figma.png',
          descricao: 'Criação de protótipos, design de interfaces e noções de UI/UX focadas na experiência do usuário.'
        },
        {
          nome: 'Git & GitHub',
          icon: 'assets/icons/gitHub.png',
          descricao: 'Versionamento de código, controle de alterações, organização de repositórios e trabalho colaborativo com Git.'
        },
        {
          nome: 'Inteligência Artificial',
          icon: 'assets/icons/ia.png',
          descricao: 'Utilização de IA como ferramenta de apoio ao desenvolvimento, automação de tarefas e aumento de produtividade.'
        },
        {
          nome: 'Administração de Projetos',
          icon: 'assets/icons/trabalho.png',
          descricao: 'Planejamento, organização de tarefas, acompanhamento de prazos e trabalho colaborativo.'
        },
        {
          nome: 'Metodologias Ágeis (conceitos)',
          icon: 'assets/icons/design.png',
          descricao: 'Organização de projetos utilizando conceitos de metodologias ágeis como Scrum e Kanban.'
        }
      ]
    }
  ];

  // Habilidades em inglês
  habilidadesPorTopicoEN = [
    {
      topico: 'Development',
      habilidades: [
        {
          nome: 'HTML5',
          icon: 'assets/icons/html.png',
          descricao: 'Semantic structuring of web pages, accessibility best practices and content organization.'
        },
        {
          nome: 'JavaScript',
          icon: 'assets/icons/js.png',
          descricao: 'DOM manipulation, programming logic, events, validations and dynamic interactions on the front-end.'
        },
        {
          nome: 'Python',
          icon: 'assets/icons/python.png',
          descricao: 'Programming logic, task automation, data manipulation and integration with other tools.'
        },
        {
          nome: 'TypeScript',
          icon: 'assets/icons/Type.webp',
          descricao: 'Development with static typing, improving code quality and facilitating application maintenance.'
        },
        {
          nome: 'Tailwind CSS',
          icon: 'assets/icons/tailancss.png',
          descricao: 'Utility CSS framework for creating modern and responsive interfaces with utility classes.'
        }
      ]
    },
    {
      topico: 'Data and Integrations',
      habilidades: [
        {
          nome: 'APIs & Integrations',
          icon: 'assets/icons/js.png',
          descricao: 'REST API consumption, front-end and back-end integration and external data manipulation.'
        },
        {
          nome: 'Database (concepts)',
          icon: 'assets/icons/sql.png',
          descricao: 'Database concepts, information organization, basic queries and data structuring.'
        },
        {
          nome: 'Power BI',
          icon: 'assets/icons/powerbi.png',
          descricao: 'Data analysis, processing and visualization through interactive dashboards and indicators.'
        },
        {
          nome: 'Excel',
          icon: 'assets/icons/excel.png',
          descricao: 'Data analysis and organization, use of formulas, tables and charts to support decision making.'
        },
        {
          nome: 'Supabase',
          icon: 'assets/icons/supabase.png',
          descricao: 'Backend-as-a-service platform with PostgreSQL database, authentication, storage and real-time APIs.'
        }
      ]
    },
    {
      topico: 'Tools, Cloud and Management',
      habilidades: [
        {
          nome: 'Cloudflare',
          icon: 'assets/icons/cloudflare.png',
          descricao: 'Cloud concepts, security, DNS, performance and web application protection.'
        },
        {
          nome: 'Figma',
          icon: 'assets/icons/figma.png',
          descricao: 'Prototype creation, interface design and UI/UX concepts focused on user experience.'
        },
        {
          nome: 'Git & GitHub',
          icon: 'assets/icons/git.png',
          descricao: 'Code versioning, change control, repository organization and collaborative work with Git.'
        },
        {
          nome: 'Artificial Intelligence',
          icon: 'assets/icons/ia.png',
          descricao: 'Using AI as a development support tool, task automation and increased productivity.'
        },
        {
          nome: 'Project Administration',
          icon: 'assets/icons/trabalho.png',
          descricao: 'Planning, task organization, deadline tracking and collaborative work.'
        },
        {
          nome: 'Agile Methodologies (concepts)',
          icon: 'assets/icons/design.png',
          descricao: 'Project organization using agile methodology concepts such as Scrum and Kanban.'
        }
      ]
    }
  ];

  atividades = [];

  // Dados do Portfolio em português
  projetosPT = [
    {
      titulo: 'Organizator',
      descricao: 'App de gerenciamento de tarefas focado em quem programa — "sua vida de programação organizada". Tarefas com categoria, prioridade e vencimento; dashboard com totais; filtros por status, categoria e prioridade; tema claro/escuro e login com Supabase. Stack: Angular 18, PrimeNG, Node/Express, Supabase.',
      imagem: 'assets/img/orgaizator.png',
      link: 'https://organizator.dutramaria165.workers.dev/login'
    },
    {
      titulo: 'Flashcards',
      descricao: 'Flashcard Game — Aplicação web para criação e estudo com flashcards. Permite criar baralhos com várias cartas (pergunta/resposta), jogar em modo de revisão com flip 3D e marcar cartas como corretas ou incorretas — as erradas voltam para a fila. Persistência em localStorage, interface responsiva em tema escuro com Tailwind CSS, usando React 18, TypeScript, Vite e React Router.',
      imagem: 'assets/img/flashcard.png',
      link: 'https://flash-card-frontend-qmcl-dvfjra86l.vercel.app/'
    },
    {
      titulo: 'Calculadora de IMC',
      descricao: 'Calculadora de IMC — Ferramenta de saúde que calcula o IMC a partir de altura, peso e idade. Classifica o resultado e indica quanto emagrecer ou ganhar. Interface em tema escuro, suporte a escala métrica (kg) e americana (lbs), e idiomas inglês e português. Feita com React, Vite, Chakra UI, React Hook Form e Zod.',
      imagem: 'assets/img/calories.png',
      link: 'https://calories-six-flame.vercel.app/'
    },
    {
      titulo: 'Resumidor IA',
      descricao: 'Resumidor IA é uma aplicação web feita em Next.js e React que usa a API do Google Gemini para gerar resumos de textos. A interface permite selecionar o estilo do resumo (parágrafos, bullet points ou executivo), suporta português e inglês e foi planejada para deploy no Vercel. O projeto usa cache de modelos, API Routes serverless e Tailwind CSS para interface responsiva e acessível.',
      imagem: 'assets/img/ia.png',
      link: 'https://ia-fyi1.vercel.app/'
    },
    {
      titulo: 'Random Meal Generator',
      descricao: 'Este programa exibe uma refeição aleatória obtida da API TheMealDB. Ao clicar no botão, ele busca uma nova refeição e exibe o nome, imagem, ingredientes e instruções de preparo. Além disso, se disponível, um vídeo do YouTube é incorporado para auxiliar no preparo da receita.',
      imagem: 'assets/img/randomMeal.png',
      link: 'https://dutra1904.github.io/random-meal-generator/'
    },
    {
      titulo: 'Jogo Espacial',
      descricao: 'Este trabalho apresenta o desenvolvimento de um jogo de batalha espacial, Stellar Clash, que utiliza estruturas de dados avançadas, como listas, filas, árvores e grafos.',
      imagem: 'assets/img/batalha-background.png',
      link: 'https://github.com/dutra1904/stellar_clash.git'
    },
    {
      titulo: 'Projeto Livre Spotify (Power BI)',
      descricao: 'Dashboard interativo: popularidade no Spotify vs. aclamação (Grammy). Comparação com ganhadores do Grammy, filtros por ano e gênero, músicas mais ouvidas, top artists e mapa de onde cada país mais escuta. Rankings Brasil e Global.',
      imagem: 'assets/img/powerbi-spotify.svg',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiNDlhOTllNjUtZTUyZi00YzFlLWJjNDItNWIwYmRmODkzNGQyIiwidCI6ImIxY2E3YTgxLWFiZjgtNDJlNS05OGM2LWYyZjJhOTMwYmEzNiJ9&pageName=f33855a7bc54134d0440'
    }
  ];

  // Projetos em inglês
  projetosEN = [
    {
      titulo: 'Organizator',
      descricao: 'Task management app for developers — "Your programming life, organized." Tasks with categories, priorities and due dates; dashboard with totals; filters by status, category and priority; dark/light theme and Supabase auth. Stack: Angular 18, PrimeNG, Node/Express, Supabase.',
      imagem: 'assets/img/orgaizator.png',
      link: 'https://organizator.dutramaria165.workers.dev/login'
    },
    {
      titulo: 'Flashcards',
      descricao: 'Flashcard Game — Web application for creating and studying with flashcards. Allows creating decks with multiple cards (question/answer), playing in review mode with 3D flip and marking cards as correct or incorrect — wrong ones return to the queue. localStorage persistence, responsive dark-themed interface with Tailwind CSS, using React 18, TypeScript, Vite and React Router.',
      imagem: 'assets/img/flashcard.png',
      link: 'https://flash-card-frontend-qmcl-dvfjra86l.vercel.app/'
    },
    {
      titulo: 'BMI Calculator',
      descricao: 'BMI Calculator — Health tool that calculates BMI from height, weight and age. Classifies the result and indicates how much to lose or gain. Dark theme interface, support for metric (kg) and American (lbs) scale, and English and Portuguese languages. Built with React, Vite, Chakra UI, React Hook Form and Zod.',
      imagem: 'assets/img/calories.png',
      link: 'https://calories-six-flame.vercel.app/'
    },
    {
      titulo: 'AI Summarizer',
      descricao: 'AI Summarizer is a web application built with Next.js and React that uses the Google Gemini API to generate text summaries. The interface allows selecting the summary style (paragraphs, bullet points or executive), supports Portuguese and English, and is designed for Vercel deployment. The project uses model caching, serverless API Routes and Tailwind CSS for a responsive and accessible interface.',
      imagem: 'assets/img/ia.png',
      link: 'https://ia-fyi1.vercel.app/'
    },
    {
      titulo: 'Random Meal Generator',
      descricao: 'This program displays a random meal obtained from TheMealDB API. When clicking the button, it fetches a new meal and displays the name, image, ingredients and preparation instructions. Additionally, if available, a YouTube video is embedded to assist in recipe preparation.',
      imagem: 'assets/img/randomMeal.png',
      link: 'https://dutra1904.github.io/random-meal-generator/'
    },
    {
      titulo: 'Space Game',
      descricao: 'This work presents the development of a space battle game, Stellar Clash, which uses advanced data structures such as lists, queues, trees and graphs.',
      imagem: 'assets/img/batalha-background.png',
      link: 'https://github.com/dutra1904/stellar_clash.git'
    },
    {
      titulo: 'Spotify Project (Power BI)',
      descricao: 'Interactive dashboard: Spotify popularity vs. acclaim (Grammy). Compare with Grammy winners, filter by year and genre, most listened songs, top artists, and map of where each country listens most. Brazil and Global rankings.',
      imagem: 'assets/img/powerbi-spotify.svg',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiNDlhOTllNjUtZTUyZi00YzFlLWJjNDItNWIwYmRmODkzNGQyIiwidCI6ImIxY2E3YTgxLWFiZjgtNDJlNS05OGM2LWYyZjJhOTMwYmEzNiJ9&pageName=f33855a7bc54134d0440'
    }
  ];

  // Getters para retornar dados baseados no idioma atual
  get habilidadesPorTopico() {
    return this.currentLanguage === 'EN' ? this.habilidadesPorTopicoEN : this.habilidadesPorTopicoPT;
  }

  get projetos() {
    return this.currentLanguage === 'EN' ? this.projetosEN : this.projetosPT;
  }

  get t() {
    return this.translations[this.currentLanguage];
  }

  changeLanguage(lang: 'EN' | 'PT'): void {
    this.currentLanguage = lang;
  }

  // Dados do Currículo
  get curriculoPath(): string {
    return this.currentLanguage === 'PT' ? 'assets/CV-Portugues.pdf' : 'assets/CV-english.pdf';
  }
  get curriculoNome(): string {
    return this.currentLanguage === 'PT' ? 'CV-Portugues.pdf' : 'CV-english.pdf';
  }


  // Controle do carrossel de projetos
  projetoAtualIndex = 0;

  // Controle de tabs
  activeTab: 'about' | 'portfolio' | 'resume' | 'contact' = 'about';

  setActiveTab(tab: 'about' | 'portfolio' | 'resume' | 'contact'): void {
    this.activeTab = tab;
  }

  isActiveTab(tab: 'about' | 'portfolio' | 'resume' | 'contact'): boolean {
    return this.activeTab === tab;
  }


  ngOnInit(): void {
    this.animarTitulos();
    this.observarAssinatura();
    this.detectarHashEAtivarTab();
    this.prevenirScrollEmIcones();
    
    // Escutar mudanças no hash da URL
    window.addEventListener('hashchange', () => {
      this.detectarHashEAtivarTab();
    });
  }

  private detectarHashEAtivarTab(): void {
    const hash = window.location.hash;
    if (hash === '#work' || hash === '#portfolio') {
      this.setActiveTab('portfolio');
      setTimeout(() => {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else if (hash === '#curriculo' || hash === '#resume') {
      this.setActiveTab('resume');
      setTimeout(() => {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else if (hash === '#contato' || hash === '#contact') {
      this.setActiveTab('contact');
      setTimeout(() => {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else if (hash === '#about') {
      this.setActiveTab('about');
      setTimeout(() => {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
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

  scrollToNextSection(): void {
    // Rola para a seção "about" que é a próxima seção
    this.scrollToSection('about');
  }

  goToProjects(): void {
    this.setActiveTab('portfolio');
    setTimeout(() => {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }

  abrirProjeto(link: string): void {
    window.open(link, '_blank');
  }

  enviarMensagem(data: {nome: string, email: string, mensagem: string}): void {
    // Validar campos antes de enviar
    if (!data.nome || !data.email || !data.mensagem) {
      alert(this.t.contact.fillAllFields);
      return;
    }

    // Validar formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert(this.t.contact.invalidEmail);
      return;
    }

    // Criar link mailto
    const assunto = encodeURIComponent(this.t.contact.emailSubject);
    const corpo = encodeURIComponent(`Nome: ${data.nome}\nEmail: ${data.email}\n\nMensagem:\n${data.mensagem}`);
    const mailtoLink = `mailto:dutramaria165@gmail.com?subject=${assunto}&body=${corpo}`;
    
    // Abrir cliente de email
    try {
      window.location.href = mailtoLink;
    } catch (error) {
      console.error('Erro ao abrir cliente de email:', error);
      alert(this.t.contact.emailError);
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
    
    // Prevenir que scroll interfira com cliques nos ícones sociais
    this.prevenirScrollEmIcones();
  }

  private prevenirScrollEmIcones(): void {
    // Aguardar o DOM estar pronto
    setTimeout(() => {
      const icons = document.querySelectorAll('.sidebar-left .social-icons .icon');
      const sidebarContent = document.querySelector('.sidebar-content');
      
      icons.forEach((icon) => {
        // Prevenir que eventos de toque iniciem scroll no container
        icon.addEventListener('touchstart', (e) => {
          e.stopPropagation();
        }, { passive: false });
        
        icon.addEventListener('touchmove', (e) => {
          e.stopPropagation();
          e.preventDefault(); // Prevenir scroll durante o movimento
        }, { passive: false });
        
        icon.addEventListener('touchend', (e) => {
          e.stopPropagation();
        }, { passive: false });
        
        // Prevenir que mouse wheel inicie scroll quando sobre o ícone
        icon.addEventListener('wheel', (e) => {
          e.stopPropagation();
        }, { passive: false });
        
        // Prevenir que mousedown inicie scroll
        icon.addEventListener('mousedown', (e) => {
          e.stopPropagation();
        });
        
        // Garantir que cliques funcionem - não prevenir default para permitir navegação
        icon.addEventListener('click', (e) => {
          e.stopPropagation();
          // O link já vai navegar naturalmente, só precisamos prevenir que o scroll interfira
        }, true); // Usar capture phase para garantir que seja executado primeiro
      });
      
      // Prevenir scroll quando o mouse está sobre os ícones
      const socialIconsContainer = document.querySelector('.sidebar-left .social-icons');
      if (socialIconsContainer && sidebarContent) {
        socialIconsContainer.addEventListener('wheel', (e) => {
          e.stopPropagation();
        }, { passive: false });
      }
    }, 100);
  }
}
