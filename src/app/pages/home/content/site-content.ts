import { Language, SiteContent } from './site.models';

const GITHUB = 'https://github.com/dutra1904';
const MENU_MATCH_REPO = 'https://github.com/dutra1904/MenuMatchAI';
const MENU_MATCH_DEMO = 'https://menu-match-ai.vercel.app/';
const LINKEDIN = 'https://www.linkedin.com/in/maria-clara-dutra/';
const EMAIL = 'mailto:dutramaria165@gmail.com';
const HUGGINGFACE = 'https://huggingface.co/claraLLMdutra';
const FEELINGSS_DEMO = 'https://feelingss.vercel.app/';
const FEELINGSS_REPO = 'https://github.com/dutra1904/feelingss';
const SUMMARIZER_DEMO = 'https://ia-rose-tau.vercel.app/';
const SUMMARIZER_REPO = 'https://github.com/dutra1904/IA';
const SPOTIFY_DASHBOARD = 'https://app.powerbi.com/view?r=eyJrIjoiNDlhOTllNjUtZTUyZi00YzFlLWJjNDItNWIwYmRmODkzNGQyIiwidCI6ImIxY2E3YTgxLWFiZjgtNDJlNS05OGM2LWYyZjJhOTMwYmEzNiJ9&pageName=f33855a7bc54134d0440';
const ORGANIZATOR_DEMO = 'https://organizator.dutramaria165.workers.dev/login';
const ORGANIZATOR_REPO = 'https://github.com/dutra1904/organizator-backend';
const FLASHCARDS_DEMO = 'https://flash-card-frontend-qmcl-dvfjra86l.vercel.app/';
const BMI_DEMO = 'https://calories-six-flame.vercel.app/';
const BMI_REPO = 'https://github.com/dutra1904/calories';
const MEAL_DEMO = 'https://dutra1904.github.io/random-meal-generator/';
const MEAL_REPO = 'https://github.com/dutra1904/random-meal-generator';
const STELLAR_REPO = 'https://github.com/dutra1904/stellar_clash';

export const CV_FILES: Record<Language, { href: string; filename: string }> = {
  PT: { href: 'assets/img/CV-Portugues.pdf', filename: 'Maria_Clara_Dutra_Costa.pdf' },
  EN: { href: 'assets/img/CV-Portugues.pdf', filename: 'Maria_Clara_Dutra_Costa.pdf' }
};

const MENU_TAGS = ['Python', 'FastAPI', 'Gemini API', 'LangChain', 'ChromaDB', 'Next.js', 'Docker'] as const;
const FEELINGS_TAGS = ['JavaScript', 'TypeScript', 'TensorFlow.js', 'face-api.js', 'Web APIs'] as const;
const SUMMARY_TAGS = ['Next.js', 'React', 'Tailwind CSS', 'Google Gemini API', 'Vercel'] as const;
const SPOTIFY_TAGS = ['Power BI', 'DAX', 'EDA'] as const;
const ORGANIZATOR_TAGS = ['Angular', 'PrimeNG', 'Node', 'Supabase'] as const;
const FLASHCARDS_TAGS = ['React', 'TypeScript', 'Vite', 'Tailwind'] as const;
const BMI_TAGS = ['React', 'Chakra UI', 'Hook Form', 'Zod'] as const;
const MEAL_TAGS = ['JavaScript', 'REST API'] as const;
const STELLAR_TAGS_PT = ['C', 'Estruturas de dados'] as const;
const STELLAR_TAGS_EN = ['C', 'Data structures'] as const;

export const CONTENT: Record<Language, SiteContent> = {
  PT: {
    nav: {
      projects: 'Projetos',
      ecosystem: 'Ecossistema',
      experience: 'Experiência',
      about: 'Sobre',
      contact: 'Contato',
      available: 'Aberta a oportunidades',
      language: 'Idioma',
      skip: 'Ir para os projetos'
    },
    hero: {
      titleName: 'Maria Clara Dutra',
      titleRole: 'Software & AI Engineer',
      tagline: 'Estudante de Engenharia da Computação (UFG) especializada na construção de sistemas escaláveis, agentes autônomos de IA e engenharia de dados aplicada a produtos de alto impacto.',
      badges: [
        'Bayer | Operações & Crédito',
        'UFG | Engenharia da Computação',
        'OBMEP | Menção Honrosa Nacional'
      ],
      primaryCta: 'Ver projetos',
      secondaryCta: 'Baixar Currículo (PDF)',
      stackLabel: 'Stack principal',
      stack: ['Python', 'TypeScript', 'RAG', 'FastAPI', 'Next.js', 'Power BI'],
      photoAlt: 'Retrato de Maria Clara Dutra'
    },
    social: [
      { id: 'github', label: 'GitHub', href: GITHUB, external: true },
      { id: 'linkedin', label: 'LinkedIn', href: LINKEDIN, external: true },
      { id: 'huggingface', label: 'Hugging Face', href: HUGGINGFACE, external: true },
      { id: 'email', label: 'E-mail', href: EMAIL, external: false }
    ],
    projects: {
      kicker: 'Trabalho selecionado',
      title: 'Projetos em destaque',
      lead: 'Do agente de IA ao jogo em C: o problema, a decisão técnica e o efeito no uso no mesmo card.',
      problem: 'Problema',
      solution: 'Solução técnica',
      impact: 'Impacto',
      items: [
        {
          id: 'menumatch',
          title: 'MenuMatch AI',
          image: 'assets/img/MenuMatch.webp',
          imageAlt: 'Interface do MenuMatch AI, agente de pedidos e cardápios',
          problem: 'Restrições alimentares obrigam a pessoa a ler o cardápio inteiro antes de fechar um pedido de delivery.',
          solution: 'Sistema ponta a ponta com busca semântica híbrida (RAG com embeddings vetoriais) e um agente orquestrador com tool calling para montar o pedido sozinho.',
          impact: 'O pedido nasce de uma frase. A restrição entra na recuperação dos itens e na escolha final, sem o fluxo manual de cardápio.',
          tags: MENU_TAGS,
          links: [
            { label: 'Demo', href: MENU_MATCH_DEMO },
            { label: 'GitHub', href: MENU_MATCH_REPO }
          ]
        },
        {
          id: 'feelingss',
          title: 'Feelingss',
          image: 'assets/img/feelingss.webp',
          imageAlt: 'Feelingss classificando expressão facial no navegador',
          problem: 'Estimar expressão, idade e gênero em tempo real sem enviar o rosto da pessoa para um servidor.',
          solution: 'Classificação e inferência direto no navegador, pela webcam, com modelos rodando no cliente.',
          impact: 'A leitura acontece na máquina de quem usa. Nenhuma imagem sai do dispositivo.',
          note: 'Arquitetura privacy-first: processamento 100% no cliente e latência baixa o bastante para o vídeo ao vivo.',
          tags: FEELINGS_TAGS,
          links: [
            { label: 'Demo', href: FEELINGSS_DEMO },
            { label: 'GitHub', href: FEELINGSS_REPO }
          ]
        },
        {
          id: 'summarizer',
          title: 'AI Summarizer',
          image: 'assets/img/ia.webp',
          imageAlt: 'AI Summarizer gerando um resumo de texto longo',
          problem: 'Texto longo atrasa leitura, estudo e decisão.',
          solution: 'Aplicação web serverless, com arquitetura AI-first, para extração semântica e sumarização de textos longos.',
          impact: 'A síntese sai sob demanda — em parágrafos, tópicos ou formato executivo — sem um servidor próprio para operar.',
          tags: SUMMARY_TAGS,
          links: [
            { label: 'Demo', href: SUMMARIZER_DEMO },
            { label: 'GitHub', href: SUMMARIZER_REPO }
          ]
        },
        {
          id: 'spotify-grammy',
          title: 'Spotify × Grammy',
          image: 'assets/img/powerbi-spotify.svg',
          imageAlt: 'Marca do painel Spotify versus Grammy',
          problem: 'Popularidade no streaming e reconhecimento da crítica não medem a mesma coisa, e a diferença some sem um recorte analítico.',
          solution: 'Painel exploratório que cruza métricas de popularidade no Spotify com premiações do Grammy.',
          impact: 'A leitura compara ano, gênero e rankings do Brasil e do mundo no mesmo recorte.',
          tags: SPOTIFY_TAGS,
          links: [{ label: 'Abrir painel', href: SPOTIFY_DASHBOARD }]
        },
        {
          id: 'organizator',
          title: 'Organizator',
          image: 'assets/img/orgaizator.webp',
          imageAlt: 'Organizator, quadro de tarefas com dashboard',
          problem: 'Tarefas de estudo e de código se perdem sem categoria, prioridade e um lugar para ver o andamento.',
          solution: 'Gestão de tarefas com categorias, prioridades, dashboard e autenticação. Angular, PrimeNG, Node e Supabase.',
          impact: 'O quadro fica no navegador, com login e o resumo do que está aberto.',
          tags: ORGANIZATOR_TAGS,
          links: [
            { label: 'Demo', href: ORGANIZATOR_DEMO },
            { label: 'GitHub', href: ORGANIZATOR_REPO }
          ]
        },
        {
          id: 'flashcards',
          title: 'Flashcards',
          image: 'assets/img/flashcard.webp',
          imageAlt: 'Flashcards com revisão de baralhos',
          problem: 'A revisão some quando a fila de erros e o histórico ficam só na memória da sessão.',
          solution: 'Baralhos com revisão 3D, fila de erros e persistência local. React, TypeScript, Vite e Tailwind.',
          impact: 'O estudo continua no mesmo navegador, sem um servidor para guardar o baralho.',
          tags: FLASHCARDS_TAGS,
          links: [{ label: 'Demo', href: FLASHCARDS_DEMO }]
        },
        {
          id: 'bmi',
          title: 'Calculadora de IMC',
          image: 'assets/img/calories.webp',
          imageAlt: 'Calculadora de IMC com unidades métrica e imperial',
          problem: 'Calcular o IMC e ler a classificação muda de unidade e de idioma conforme quem usa.',
          solution: 'Calculadora com sistema métrico e imperial, PT/EN e validação de formulário. React, Chakra UI, Hook Form e Zod.',
          impact: 'A classificação sai na hora, nas duas unidades e nos dois idiomas.',
          tags: BMI_TAGS,
          links: [
            { label: 'Demo', href: BMI_DEMO },
            { label: 'GitHub', href: BMI_REPO }
          ]
        },
        {
          id: 'random-meal',
          title: 'Random Meal Generator',
          image: 'assets/img/randomMeal.webp',
          imageAlt: 'Gerador de refeição aleatória com ingredientes e modo de preparo',
          problem: 'Escolher uma refeição trava quando falta uma sugestão com ingredientes e modo de preparo.',
          solution: 'Gerador que busca uma refeição aleatória na TheMealDB, com ingredientes, instruções e vídeo quando existe.',
          impact: 'Uma receita completa abre no navegador, a partir da API, sem cadastro.',
          tags: MEAL_TAGS,
          links: [
            { label: 'Demo', href: MEAL_DEMO },
            { label: 'GitHub', href: MEAL_REPO }
          ]
        },
        {
          id: 'stellar-clash',
          title: 'Stellar Clash',
          image: 'assets/img/batalha-background.webp',
          imageAlt: 'Stellar Clash, jogo de batalha espacial',
          problem: 'Lista, fila, árvore e grafo ficam abstratos sem um uso que junte as quatro estruturas.',
          solution: 'Jogo de batalha espacial em C que usa listas, filas, árvores e grafos.',
          impact: 'Cada estrutura aparece na mecânica da partida, não só num exercício isolado.',
          tags: STELLAR_TAGS_PT,
          links: [{ label: 'GitHub', href: STELLAR_REPO }]
        }
      ]
    },
    ecosystem: {
      kicker: 'Aberto & pesquisa',
      title: 'Ecossistema que seleções de IA leem',
      lead: 'Três superfícies em que o trabalho técnico fica verificável: dados e modelo, análise exploratória e a arquitetura escrita junto com o código.',
      cards: [
        {
          id: 'huggingface',
          kicker: 'Hugging Face Hub',
          title: 'Dataset e modelo do MenuMatch',
          description: 'A base de cardápios brasileiros alimenta a busca semântica. O classificador segue com Model Card: escopo, dados, limites e como avaliar.',
          items: [
            {
              title: 'Dataset de cardápios brasileiros',
              detail: 'Itens, contexto e restrições para embeddings e recuperação híbrida.'
            },
            {
              title: 'Classificador com Model Card',
              detail: 'Uso pretendido, limitações e critérios de avaliação documentados.'
            }
          ],
          links: [{ label: 'Código no GitHub', href: MENU_MATCH_REPO }]
        },
        {
          id: 'kaggle',
          kicker: 'EDA',
          title: 'Competições e análise de dados',
          description: 'Análise exploratória em dados públicos de streaming e premiação. O case publicado é o painel Spotify × Grammy, com DAX e filtros de ano e gênero.',
          items: [
            {
              title: 'Popularidade versus crítica',
              detail: 'Métricas de streaming lidas ao lado do reconhecimento do Grammy.'
            },
            {
              title: 'Recortes comparáveis',
              detail: 'Rankings do Brasil e do mundo no mesmo modelo de dados.'
            }
          ],
          links: [{ label: 'Abrir painel', href: SPOTIFY_DASHBOARD }]
        },
        {
          id: 'writing',
          kicker: 'Notas de arquitetura',
          title: 'Engenharia e publicações técnicas',
          description: 'As notas públicas hoje estão nos repositórios: agente com LLM no MenuMatch, visão no cliente no Feelingss e síntese serverless no AI Summarizer.',
          items: [
            {
              title: 'Feelingss',
              detail: 'Por que a inferência fica no navegador e o que isso muda na latência e na privacidade.'
            },
            {
              title: 'AI Summarizer',
              detail: 'Fluxo serverless com a Gemini API, do texto longo ao resumo escolhido pela pessoa.'
            }
          ],
          links: [
            { label: 'Feelingss', href: FEELINGSS_REPO },
            { label: 'AI Summarizer', href: SUMMARIZER_REPO }
          ]
        }
      ]
    },
    experience: {
      kicker: 'Trajetória',
      title: 'Experiência e liderança',
      lead: 'Operação com dado em volume, software em time e liderança universitária no mesmo fio.',
      education: 'Engenharia da Computação — UFG · em andamento',
      download: 'Baixar Currículo (PDF)',
      items: [
        {
          org: 'Bayer',
          role: 'Estagiária de Operações / Crédito e Cobrança',
          period: 'Atual',
          summary: 'Automação, análise de dados em larga escala e eficiência de processos de crédito e cobrança.'
        },
        {
          org: 'Tekna Rocks',
          role: 'Estagiária de Desenvolvimento de Software',
          period: '2025 — 2026',
          summary: 'TypeScript, APIs REST e Tailwind CSS, em práticas ágeis e com foco em estabilidade de código.'
        },
        {
          org: 'Aliança América',
          role: 'Professora de inglês',
          period: '2025 · 37 meses',
          summary: 'Aulas de inglês.'
        },
        {
          org: 'Liderança universitária e impacto social',
          role: 'UFG · CGE-GO · Robótica',
          period: 'Universidade',
          summary: 'Comunicação, representação estudantil e operação de iniciativas presenciais.',
          points: [
            'Diretora de Marketing do CA de Computação (UFG)',
            'Embaixadora da Cidadania (CGE-GO)',
            'Staff no Robótica 2024'
          ]
        }
      ]
    },
    about: {
      kicker: 'Perfil',
      title: 'Engenharia de software com IA e dados no produto',
      paragraphs: [
        'Estudo Engenharia da Computação na UFG e construo sistemas em que a interface, a API e o modelo precisam funcionar juntos.',
        'No produto uso TypeScript. Quando o problema é agente, busca semântica ou análise, entro com Python, embeddings e visualização. Procuro times em que eu possa assumir um pedaço do sistema e melhorar o que a pessoa realmente usa.'
      ],
      groups: [
        {
          title: 'IA e dados',
          items: ['Python', 'RAG', 'Gemini API', 'LangChain', 'ChromaDB', 'TensorFlow.js', 'Power BI', 'SQL']
        },
        {
          title: 'Engenharia',
          items: ['TypeScript', 'Angular', 'React', 'Next.js', 'FastAPI', 'Tailwind CSS', 'Docker']
        },
        {
          title: 'Entrega',
          items: ['Git', 'APIs REST', 'Vercel', 'Práticas ágeis']
        }
      ]
    },
    contact: {
      kicker: 'Contato',
      title: 'Vamos conversar sobre o sistema',
      lead: 'Aberta a estágios e conversas de engenharia de software, IA e dados. Escreva com o contexto do time — respondo por e-mail.',
      emailLabel: 'E-mail',
      name: 'Nome',
      email: 'E-mail',
      message: 'Mensagem',
      send: 'Enviar',
      sending: 'Enviando…',
      sent: 'Mensagem enviada. Eu respondo por e-mail.',
      fillAllFields: 'Preencha todos os campos.',
      invalidEmail: 'Insira um e-mail válido.',
      emailSubject: 'Contato do portfólio',
      emailError: 'Não foi possível enviar. Escreva para dutramaria165@gmail.com'
    },
    footer: 'Software & AI Engineer'
  },
  EN: {
    nav: {
      projects: 'Projects',
      ecosystem: 'Ecosystem',
      experience: 'Experience',
      about: 'About',
      contact: 'Contact',
      available: 'Open to work',
      language: 'Language',
      skip: 'Skip to projects'
    },
    hero: {
      titleName: 'Maria Clara Dutra',
      titleRole: 'Software & AI Engineer',
      tagline: 'Computer Engineering student (UFG) specialized in building scalable systems, autonomous AI agents, and applied data engineering for high-impact products.',
      badges: [
        'Bayer | Operations & Credit',
        'UFG | Computer Engineering',
        'OBMEP | National Honorable Mention'
      ],
      primaryCta: 'View projects',
      secondaryCta: 'Download resume (PDF)',
      stackLabel: 'Core stack',
      stack: ['Python', 'TypeScript', 'RAG', 'FastAPI', 'Next.js', 'Power BI'],
      photoAlt: 'Portrait of Maria Clara Dutra'
    },
    social: [
      { id: 'github', label: 'GitHub', href: GITHUB, external: true },
      { id: 'linkedin', label: 'LinkedIn', href: LINKEDIN, external: true },
      { id: 'huggingface', label: 'Hugging Face', href: HUGGINGFACE, external: true },
      { id: 'email', label: 'Email', href: EMAIL, external: false }
    ],
    projects: {
      kicker: 'Selected work',
      title: 'Featured projects',
      lead: 'From the AI agent to the C game: the problem, the technical decision, and the effect on use on the same card.',
      problem: 'Problem',
      solution: 'Technical solution',
      impact: 'Impact',
      items: [
        {
          id: 'menumatch',
          title: 'MenuMatch AI',
          image: 'assets/img/MenuMatch.webp',
          imageAlt: 'MenuMatch AI interface for orders and menus',
          problem: 'Dietary restrictions force someone to read an entire delivery menu before they can place an order.',
          solution: 'End-to-end system with hybrid semantic search (RAG over vector embeddings) and an orchestrator agent that uses tool calling to assemble the order on its own.',
          impact: 'The order starts from one sentence. The restriction is applied while items are retrieved and while the final basket is chosen.',
          tags: MENU_TAGS,
          links: [
            { label: 'Live demo', href: MENU_MATCH_DEMO },
            { label: 'GitHub', href: MENU_MATCH_REPO }
          ]
        },
        {
          id: 'feelingss',
          title: 'Feelingss',
          image: 'assets/img/feelingss.webp',
          imageAlt: 'Feelingss classifying a facial expression in the browser',
          problem: 'Estimate expression, age, and gender in real time without sending a person’s face to a server.',
          solution: 'Classification and inference run in the browser, from the webcam, with models executed on the client.',
          impact: 'The reading happens on the person’s own machine. No image leaves the device.',
          note: 'Privacy-first architecture: 100% client-side processing and latency low enough for live video.',
          tags: FEELINGS_TAGS,
          links: [
            { label: 'Live demo', href: FEELINGSS_DEMO },
            { label: 'GitHub', href: FEELINGSS_REPO }
          ]
        },
        {
          id: 'summarizer',
          title: 'AI Summarizer',
          image: 'assets/img/ia.webp',
          imageAlt: 'AI Summarizer producing a summary of a long text',
          problem: 'Long text slows reading, study, and decisions.',
          solution: 'Serverless, AI-first web app for semantic extraction and summarization of long texts.',
          impact: 'A summary is produced on demand — paragraphs, bullets, or an executive brief — without a dedicated server to operate.',
          tags: SUMMARY_TAGS,
          links: [
            { label: 'Live demo', href: SUMMARIZER_DEMO },
            { label: 'GitHub', href: SUMMARIZER_REPO }
          ]
        },
        {
          id: 'spotify-grammy',
          title: 'Spotify × Grammy',
          image: 'assets/img/powerbi-spotify.svg',
          imageAlt: 'Mark for the Spotify versus Grammy dashboard',
          problem: 'Streaming popularity and critical recognition do not measure the same thing, and the gap disappears without an analytical cut.',
          solution: 'Exploratory dashboard relating Spotify popularity metrics to Grammy awards.',
          impact: 'The view compares year, genre, and Brazil versus global rankings in one data model.',
          tags: SPOTIFY_TAGS,
          links: [{ label: 'Open dashboard', href: SPOTIFY_DASHBOARD }]
        },
        {
          id: 'organizator',
          title: 'Organizator',
          image: 'assets/img/orgaizator.webp',
          imageAlt: 'Organizator task board with a dashboard',
          problem: 'Study and coding tasks get lost without a category, a priority, and one place to see what is in progress.',
          solution: 'Task manager with categories, priorities, a dashboard, and authentication. Angular, PrimeNG, Node, and Supabase.',
          impact: 'The board stays in the browser, with login and a summary of what is open.',
          tags: ORGANIZATOR_TAGS,
          links: [
            { label: 'Live demo', href: ORGANIZATOR_DEMO },
            { label: 'GitHub', href: ORGANIZATOR_REPO }
          ]
        },
        {
          id: 'flashcards',
          title: 'Flashcards',
          image: 'assets/img/flashcard.webp',
          imageAlt: 'Flashcards deck review',
          problem: 'Review disappears when the miss queue and the history live only in the session.',
          solution: 'Decks with 3D review, a miss queue, and local persistence. React, TypeScript, Vite, and Tailwind.',
          impact: 'Study continues in the same browser, without a server to store the deck.',
          tags: FLASHCARDS_TAGS,
          links: [{ label: 'Live demo', href: FLASHCARDS_DEMO }]
        },
        {
          id: 'bmi',
          title: 'BMI Calculator',
          image: 'assets/img/calories.webp',
          imageAlt: 'BMI calculator with metric and imperial units',
          problem: 'Calculating BMI and reading the result changes with the unit system and the language of the person using it.',
          solution: 'Calculator with metric and imperial units, EN/PT, and form validation. React, Chakra UI, Hook Form, and Zod.',
          impact: 'The classification appears immediately, in both unit systems and both languages.',
          tags: BMI_TAGS,
          links: [
            { label: 'Live demo', href: BMI_DEMO },
            { label: 'GitHub', href: BMI_REPO }
          ]
        },
        {
          id: 'random-meal',
          title: 'Random Meal Generator',
          image: 'assets/img/randomMeal.webp',
          imageAlt: 'Random meal generator with ingredients and instructions',
          problem: 'Picking a meal stalls when there is no suggestion with ingredients and a method.',
          solution: 'Generator that fetches a random meal from TheMealDB, with ingredients, instructions, and a video when one exists.',
          impact: 'A full recipe opens in the browser from the API, with no account.',
          tags: MEAL_TAGS,
          links: [
            { label: 'Live demo', href: MEAL_DEMO },
            { label: 'GitHub', href: MEAL_REPO }
          ]
        },
        {
          id: 'stellar-clash',
          title: 'Stellar Clash',
          image: 'assets/img/batalha-background.webp',
          imageAlt: 'Stellar Clash space battle game',
          problem: 'Lists, queues, trees, and graphs stay abstract without one use that brings the four structures together.',
          solution: 'Space battle game in C that uses lists, queues, trees, and graphs.',
          impact: 'Each structure shows up in the match, not only in a standalone exercise.',
          tags: STELLAR_TAGS_EN,
          links: [{ label: 'GitHub', href: STELLAR_REPO }]
        }
      ]
    },
    ecosystem: {
      kicker: 'Open work',
      title: 'What AI interviews actually check',
      lead: 'Three surfaces where the technical work can be verified: data and model, exploratory analysis, and architecture written next to the code.',
      cards: [
        {
          id: 'huggingface',
          kicker: 'Hugging Face Hub',
          title: 'MenuMatch dataset and model',
          description: 'The Brazilian menu dataset feeds semantic search. The classifier ships with a Model Card: scope, data, limits, and how to evaluate it.',
          items: [
            {
              title: 'Brazilian menu dataset',
              detail: 'Items, context, and dietary constraints for embeddings and hybrid retrieval.'
            },
            {
              title: 'Classifier with a Model Card',
              detail: 'Intended use, limitations, and evaluation criteria written down.'
            }
          ],
          links: [{ label: 'Code on GitHub', href: MENU_MATCH_REPO }]
        },
        {
          id: 'kaggle',
          kicker: 'EDA',
          title: 'Competitions and data analysis',
          description: 'Exploratory analysis on public streaming and awards data. The published case is the Spotify × Grammy dashboard, with DAX and year and genre filters.',
          items: [
            {
              title: 'Popularity versus acclaim',
              detail: 'Streaming metrics read next to Grammy recognition.'
            },
            {
              title: 'Comparable cuts',
              detail: 'Brazil and global rankings in the same data model.'
            }
          ],
          links: [{ label: 'Open dashboard', href: SPOTIFY_DASHBOARD }]
        },
        {
          id: 'writing',
          kicker: 'Architecture notes',
          title: 'Engineering and technical writing',
          description: 'The public notes live in the repositories today: the LLM agent in MenuMatch, in-browser vision in Feelingss, and the serverless summary flow.',
          items: [
            {
              title: 'Feelingss',
              detail: 'Why inference stays in the browser, and what that changes for latency and privacy.'
            },
            {
              title: 'AI Summarizer',
              detail: 'Serverless flow with the Gemini API, from a long text to the summary style the person chose.'
            }
          ],
          links: [
            { label: 'Feelingss', href: FEELINGSS_REPO },
            { label: 'AI Summarizer', href: SUMMARIZER_REPO }
          ]
        }
      ]
    },
    experience: {
      kicker: 'Path',
      title: 'Experience and leadership',
      lead: 'High-volume operational data, software on a team, and university leadership on one line.',
      education: 'Computer Engineering — UFG · in progress',
      download: 'Download resume (PDF)',
      items: [
        {
          org: 'Bayer',
          role: 'Operations intern / Credit and collections',
          period: 'Current',
          summary: 'Automation, large-scale data analysis, and process efficiency in credit and collections.'
        },
        {
          org: 'Tekna Rocks',
          role: 'Software development intern',
          period: '2025 — 2026',
          summary: 'TypeScript, REST APIs, and Tailwind CSS, with agile practice and a focus on code stability.'
        },
        {
          org: 'Aliança América',
          role: 'English teacher',
          period: '2024 · seven months',
          summary: 'English classes.'
        },
        {
          org: 'University leadership and social impact',
          role: 'UFG · CGE-GO · Robotics',
          period: 'University',
          summary: 'Communication, student representation, and running in-person initiatives.',
          points: [
            'Marketing Director, Computing Student Association (UFG)',
            'Citizenship Ambassador (CGE-GO)',
            'Staff at Robótica 2024'
          ]
        }
      ]
    },
    about: {
      kicker: 'Profile',
      title: 'Software engineering with AI and data in the product',
      paragraphs: [
        'I study Computer Engineering at UFG and build systems where the interface, the API, and the model have to work together.',
        'I use TypeScript in the product. When the problem is an agent, semantic search, or analysis, I work in Python, embeddings, and visualization. I look for teams where I can own a slice of the system and improve what a person actually uses.'
      ],
      groups: [
        {
          title: 'AI and data',
          items: ['Python', 'RAG', 'Gemini API', 'LangChain', 'ChromaDB', 'TensorFlow.js', 'Power BI', 'SQL']
        },
        {
          title: 'Engineering',
          items: ['TypeScript', 'Angular', 'React', 'Next.js', 'FastAPI', 'Tailwind CSS', 'Docker']
        },
        {
          title: 'Delivery',
          items: ['Git', 'REST APIs', 'Vercel', 'Agile practice']
        }
      ]
    },
    contact: {
      kicker: 'Contact',
      title: 'Let’s talk about the system',
      lead: 'Open to internships and conversations in software engineering, AI, and data. Include context about the team — I reply by email.',
      emailLabel: 'Email',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      sending: 'Sending…',
      sent: 'Message sent. I’ll reply by email.',
      fillAllFields: 'Please fill in all fields.',
      invalidEmail: 'Please enter a valid email address.',
      emailSubject: 'Portfolio contact',
      emailError: 'Could not send. Write to dutramaria165@gmail.com'
    },
    footer: 'Software & AI Engineer'
  }
};

export const SECTION_IDS = ['home', 'projects', 'ecosystem', 'experience', 'about', 'contact'] as const;

export const HASH_ALIASES: Record<string, (typeof SECTION_IDS)[number]> = {
  home: 'home',
  projects: 'projects',
  work: 'projects',
  portfolio: 'projects',
  ecosystem: 'ecosystem',
  experience: 'experience',
  resume: 'experience',
  curriculo: 'experience',
  about: 'about',
  contact: 'contact',
  contato: 'contact'
};
