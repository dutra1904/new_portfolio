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
  currentLanguage: 'EN' | 'PT' = 'EN';
  currentYear = new Date().getFullYear();

  translations = {
    PT: {
      header: {
        development: 'Produto & engenharia',
        available: 'Aberta a oportunidades',
        home: 'Início',
        about: 'Sobre',
        portfolio: 'Trabalho',
        resume: 'Currículo',
        contact: 'Contato'
      },
      home: {
        eyebrow: 'Engenharia da Computação · Dados · IA',
        headline: 'Software, dados e IA.',
        viewProjects: 'Ver trabalho',
        downloadResume: 'Baixar CV',
        stack: ['TypeScript', 'Angular', 'React', 'Next.js', 'Python', 'Dados', 'IA'],
        description: 'Estudo Engenharia da Computação na UFG, com foco também em dados e inteligência artificial. Desenvolvo aplicações web com TypeScript — interface, APIs, análise e IA — para problemas reais.'
      },
      about: {
        greeting: 'Olá, sou Maria Clara Dutra.',
        paragraph1: 'Estudante de Engenharia da Computação na UFG. Além de desenvolvimento full-stack, estudo dados e inteligência artificial — análise, visualização e uso de IA no produto e no dia a dia de código.',
        paragraph2: 'Trabalho com Angular, React, Next.js e TypeScript para entregar interfaces e backends que conversam com APIs, bancos e dashboards.',
        paragraph3: 'Uso Python, SQL, Power BI e ferramentas de nuvem quando o problema pede dados, automação ou operação mais estável.',
        paragraph4: 'Busco estágios e projetos em que eu possa contribuir com produto, qualidade de código e aprendizado rápido em time.',
        closing: 'Obrigada por ler.',
        technicalSkills: 'Stack'
      },
      skillsTopics: {
        development: 'Desenvolvimento',
        dataAndIntegrations: 'Dados e Integrações',
        toolsCloudManagement: 'Ferramentas, Cloud e Gestão'
      },
      projects: {
        title: 'Trabalho selecionado',
        previous: 'Projeto anterior',
        next: 'Próximo projeto',
        goToProject: 'Abrir projeto',
        clickHint: 'Abrir o projeto'
      },
      resume: {
        title: 'Currículo',
        academic: 'Formação',
        engineering: 'Engenharia da Computação — UFG',
        inProgress: 'Em andamento',
        experience: 'Experiência',
        bayerRole: 'Estagiária',
        bayerOrg: 'Bayer',
        bayerMeta: 'Atual',
        teacherRole: 'Professora de inglês',
        teacherOrg: 'Aliança América',
        teacherMeta: '2024 · Remoto · 6 meses',
        tekanaRole: 'Estagiária em desenvolvimento de software',
        tekanaOrg: 'Tekna.Rocks',
        tekanaMeta: '2025 — 2026',
        technicalKnowledge: 'Áreas',
        development: 'Desenvolvimento',
        developmentDesc: 'Angular, React, Next.js, TypeScript e APIs para produtos web.',
        dataAnalysis: 'Dados',
        dataAnalysisDesc: 'Power BI, Excel, SQL e visualização para decisão.',
        cloudSecurity: 'Cloud',
        cloudSecurityDesc: 'Cloudflare, performance e proteção de aplicações.',
        tools: 'Ferramentas',
        toolsDesc: 'Git, GitHub, Figma e organização ágil de projetos.',
        ai: 'IA aplicada',
        aiDesc: 'Gemini e fluxos de IA para produtividade e produto.',
        languages: 'Idiomas',
        portuguese: 'Português',
        english: 'Inglês',
        native: 'Nativo',
        advanced: 'Avançado',
        downloadFull: 'Baixar CV em PDF',
        downloadDesc: 'Formação, stack, projetos e contato em um arquivo.'
      },
      contact: {
        title: 'Contato',
        subtitle: 'Engenharia da Computação · Dados e IA',
        emailLabel: 'Email',
        locationLabel: 'Local',
        location: 'Brasil',
        focusLabel: 'Foco',
        focus: 'Web, dados e IA',
        openTo: 'Aberta a estágios, projetos e conversas sobre produto e engenharia. Escreva com contexto — respondo por email.',
        name: 'Nome',
        email: 'Email',
        message: 'Mensagem',
        send: 'Enviar',
        sending: 'Enviando…',
        sent: 'Mensagem enviada. Eu respondo por email.',
        fillAllFields: 'Preencha todos os campos.',
        invalidEmail: 'Insira um email válido.',
        emailSubject: 'Contato do portfólio',
        emailError: 'Não foi possível enviar. Tente de novo ou escreva para dutramaria165@gmail.com'
      }
    },
    EN: {
      header: {
        development: 'Product & engineering',
        available: 'Open to work',
        home: 'Home',
        about: 'About',
        portfolio: 'Work',
        resume: 'Resume',
        contact: 'Contact'
      },
      home: {
        eyebrow: 'Computer Engineering · Data · AI',
        headline: 'Software, data and AI.',
        viewProjects: 'View work',
        downloadResume: 'Download CV',
        stack: ['TypeScript', 'Angular', 'React', 'Next.js', 'Python', 'Data', 'AI'],
        description: 'I study Computer Engineering at UFG, with a focus on data and artificial intelligence as well. I build web applications with TypeScript — UI, APIs, analysis and AI — for real-world problems.'
      },
      about: {
        greeting: 'Hi, I’m Maria Clara Dutra.',
        paragraph1: 'Computer Engineering student at UFG. Alongside full-stack development, I study data and artificial intelligence — analysis, visualization, and AI in both product and everyday coding.',
        paragraph2: 'I use Angular, React, Next.js and TypeScript to ship interfaces and backends that talk to APIs, databases and dashboards.',
        paragraph3: 'Python, SQL, Power BI and cloud tools come in when the problem needs data, automation or a more reliable operation.',
        paragraph4: 'I’m looking for internships and product teams where I can contribute with code quality, ownership and fast learning.',
        closing: 'Thanks for reading.',
        technicalSkills: 'Stack'
      },
      skillsTopics: {
        development: 'Development',
        dataAndIntegrations: 'Data and integrations',
        toolsCloudManagement: 'Tools, cloud and delivery'
      },
      projects: {
        title: 'Selected work',
        previous: 'Previous project',
        next: 'Next project',
        goToProject: 'Open project',
        clickHint: 'Open project'
      },
      resume: {
        title: 'Resume',
        academic: 'Education',
        engineering: 'Computer Engineering — UFG',
        inProgress: 'In progress',
        experience: 'Experience',
        bayerRole: 'Intern',
        bayerOrg: 'Bayer',
        bayerMeta: 'Current',
        teacherRole: 'English teacher',
        teacherOrg: 'Aliança América',
        teacherMeta: '2024 · Remote · 6 months',
        tekanaRole: 'Software engineering intern',
        tekanaOrg: 'Tekna.Rocks',
        tekanaMeta: '2025 — 2026',
        technicalKnowledge: 'Focus areas',
        development: 'Engineering',
        developmentDesc: 'Angular, React, Next.js, TypeScript and APIs for web products.',
        dataAnalysis: 'Data',
        dataAnalysisDesc: 'Power BI, Excel, SQL and visualization for decisions.',
        cloudSecurity: 'Cloud',
        cloudSecurityDesc: 'Cloudflare, performance and application protection.',
        tools: 'Tools',
        toolsDesc: 'Git, GitHub, Figma and agile project organization.',
        ai: 'Applied AI',
        aiDesc: 'Gemini and AI workflows for productivity and product.',
        languages: 'Languages',
        portuguese: 'Portuguese',
        english: 'English',
        native: 'Native',
        advanced: 'Advanced',
        downloadFull: 'Download PDF resume',
        downloadDesc: 'Education, stack, projects and contact in one file.'
      },
      contact: {
        title: 'Contact',
        subtitle: 'Computer Engineering · Data and AI',
        emailLabel: 'Email',
        locationLabel: 'Location',
        location: 'Brazil',
        focusLabel: 'Focus',
        focus: 'Web, data and AI',
        openTo: 'Open to internships, projects and conversations about product and engineering. Include context — I reply by email.',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
        sending: 'Sending…',
        sent: 'Message sent. I’ll reply by email.',
        fillAllFields: 'Please fill in all fields.',
        invalidEmail: 'Please enter a valid email address.',
        emailSubject: 'Portfolio contact',
        emailError: 'Could not send. Try again or write to dutramaria165@gmail.com'
      }
    }
  };

  // Dados do About - Habilidades Técnicas organizadas por tópicos (português)
  habilidadesPorTopicoPT = [
    {
      topico: 'Desenvolvimento',
      habilidades: [
        {
          nome: 'HTML5 & CSS',
          icon: 'assets/icons/html.png',
          descricao: 'Estruturação semântica, acessibilidade e layout responsivo.'
        },
        {
          nome: 'JavaScript',
          icon: 'assets/icons/js.png',
          descricao: 'Lógica, DOM, eventos e integração com APIs no front-end.'
        },
        {
          nome: 'Angular',
          icon: 'assets/icons/angular.png',
          descricao: 'Componentes, roteamento e aplicações de produto com TypeScript.'
        },
        {
          nome: 'React & Next.js',
          icon: 'assets/icons/react.png',
          descricao: 'Interfaces e apps com Vite/Next, rotas e deploy em Vercel.'
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
          icon: 'assets/icons/api.png',
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
          icon: 'assets/icons/git.png',
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
          nome: 'HTML5 & CSS',
          icon: 'assets/icons/html.png',
          descricao: 'Semantic markup, accessibility and responsive layout.'
        },
        {
          nome: 'JavaScript',
          icon: 'assets/icons/js.png',
          descricao: 'Logic, DOM, events and API integration on the front-end.'
        },
        {
          nome: 'Angular',
          icon: 'assets/icons/angular.png',
          descricao: 'Components, routing and product apps with TypeScript.'
        },
        {
          nome: 'React & Next.js',
          icon: 'assets/icons/react.png',
          descricao: 'UIs and apps with Vite/Next, routing and Vercel deploys.'
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
          icon: 'assets/icons/api.png',
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
      titulo: 'feelingss',
      descricao: 'Visão computacional no navegador: emoção, idade e sexo em tempo real. A imagem não sai do dispositivo.',
      imagem: 'assets/img/feelingss.png',
      link: 'https://feelingss.vercel.app/',
      stack: ['Computer Vision', 'ML', 'Webcam']
    },
    {
      titulo: 'Organizator',
      descricao: 'Gestão de tarefas para quem programa: categorias, prioridades, dashboard e autenticação. Angular 18, PrimeNG, Node e Supabase.',
      imagem: 'assets/img/orgaizator.png',
      link: 'https://organizator.dutramaria165.workers.dev/login',
      stack: ['Angular', 'PrimeNG', 'Supabase', 'Node']
    },
    {
      titulo: 'Flashcards',
      descricao: 'Baralhos com revisão 3D, fila de erros e persistência local. React 18, TypeScript, Vite e Tailwind.',
      imagem: 'assets/img/flashcard.png',
      link: 'https://flash-card-frontend-qmcl-dvfjra86l.vercel.app/',
      stack: ['React', 'TypeScript', 'Vite', 'Tailwind']
    },
    {
      titulo: 'Calculadora de IMC',
      descricao: 'IMC com métrica e imperial, PT/EN e validação de formulário. React, Chakra UI, Hook Form e Zod.',
      imagem: 'assets/img/calories.png',
      link: 'https://calories-six-flame.vercel.app/',
      stack: ['React', 'Chakra UI', 'Zod']
    },
    {
      titulo: 'Resumidor IA',
      descricao: 'Resumos com Gemini: parágrafos, bullets ou executivo. Next.js, API Routes e Tailwind.',
      imagem: 'assets/img/ia.png',
      link: 'https://ia-fyi1.vercel.app/',
      stack: ['Next.js', 'Gemini', 'Tailwind']
    },
    {
      titulo: 'Random Meal Generator',
      descricao: 'Refeição aleatória via TheMealDB: ingredientes, instruções e vídeo quando disponível.',
      imagem: 'assets/img/randomMeal.png',
      link: 'https://dutra1904.github.io/random-meal-generator/',
      stack: ['JavaScript', 'REST API']
    },
    {
      titulo: 'Stellar Clash',
      descricao: 'Jogo de batalha espacial com listas, filas, árvores e grafos.',
      imagem: 'assets/img/batalha-background.png',
      link: 'https://github.com/dutra1904/stellar_clash.git',
      stack: ['C', 'Estruturas de dados']
    },
    {
      titulo: 'Spotify × Grammy (Power BI)',
      descricao: 'Dashboard de popularidade vs. aclamação, filtros por ano/gênero e rankings Brasil e global.',
      imagem: 'assets/img/powerbi-spotify.svg',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiNDlhOTllNjUtZTUyZi00YzFlLWJjNDItNWIwYmRmODkzNGQyIiwidCI6ImIxY2E3YTgxLWFiZjgtNDJlNS05OGM2LWYyZjJhOTMwYmEzNiJ9&pageName=f33855a7bc54134d0440',
      stack: ['Power BI', 'Data viz']
    }
  ];

  projetosEN = [
    {
      titulo: 'feelingss',
      descricao: 'In-browser computer vision: emotion, age and gender in real time. The image never leaves the device.',
      imagem: 'assets/img/feelingss.png',
      link: 'https://feelingss.vercel.app/',
      stack: ['Computer Vision', 'ML', 'Webcam']
    },
    {
      titulo: 'Organizator',
      descricao: 'Task management for developers: categories, priorities, dashboard and auth. Angular 18, PrimeNG, Node and Supabase.',
      imagem: 'assets/img/orgaizator.png',
      link: 'https://organizator.dutramaria165.workers.dev/login',
      stack: ['Angular', 'PrimeNG', 'Supabase', 'Node']
    },
    {
      titulo: 'Flashcards',
      descricao: 'Decks with 3D review, miss queue and local persistence. React 18, TypeScript, Vite and Tailwind.',
      imagem: 'assets/img/flashcard.png',
      link: 'https://flash-card-frontend-qmcl-dvfjra86l.vercel.app/',
      stack: ['React', 'TypeScript', 'Vite', 'Tailwind']
    },
    {
      titulo: 'BMI Calculator',
      descricao: 'BMI with metric and imperial units, EN/PT and form validation. React, Chakra UI, Hook Form and Zod.',
      imagem: 'assets/img/calories.png',
      link: 'https://calories-six-flame.vercel.app/',
      stack: ['React', 'Chakra UI', 'Zod']
    },
    {
      titulo: 'AI Summarizer',
      descricao: 'Gemini summaries: paragraphs, bullets or executive. Next.js, API Routes and Tailwind.',
      imagem: 'assets/img/ia.png',
      link: 'https://ia-fyi1.vercel.app/',
      stack: ['Next.js', 'Gemini', 'Tailwind']
    },
    {
      titulo: 'Random Meal Generator',
      descricao: 'Random meal from TheMealDB: ingredients, instructions and video when available.',
      imagem: 'assets/img/randomMeal.png',
      link: 'https://dutra1904.github.io/random-meal-generator/',
      stack: ['JavaScript', 'REST API']
    },
    {
      titulo: 'Stellar Clash',
      descricao: 'Space battle game using lists, queues, trees and graphs.',
      imagem: 'assets/img/batalha-background.png',
      link: 'https://github.com/dutra1904/stellar_clash.git',
      stack: ['C', 'Data structures']
    },
    {
      titulo: 'Spotify × Grammy (Power BI)',
      descricao: 'Dashboard of popularity vs. acclaim, year/genre filters and Brazil/global rankings.',
      imagem: 'assets/img/powerbi-spotify.svg',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiNDlhOTllNjUtZTUyZi00YzFlLWJjNDItNWIwYmRmODkzNGQyIiwidCI6ImIxY2E3YTgxLWFiZjgtNDJlNS05OGM2LWYyZjJhOTMwYmEzNiJ9&pageName=f33855a7bc54134d0440',
      stack: ['Power BI', 'Data viz']
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

  goToTab(tab: 'about' | 'portfolio' | 'resume' | 'contact'): void {
    this.setActiveTab(tab);
    setTimeout(() => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }

  goToProjects(): void {
    this.goToTab('portfolio');
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
