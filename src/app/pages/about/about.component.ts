import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
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

  ngOnInit(): void {
    // Animação de scroll para títulos
    this.animarTitulos();
  }

  private animarTitulos(): void {
    const titulos = document.querySelectorAll('.titulo');
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
    verificarScroll(); // Executa uma vez para verificar elementos já visíveis
  }
}

