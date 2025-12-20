import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  menuOpen = false;
  currentRoute = '';
  scrollOpacity = 0;
  isFixed = false;
  headerOffset = 0; // Posição inicial do header
  activeSection = 'home'; // Seção ativa atual

  constructor(private router: Router) {
    // Sempre na página home agora, então sempre inicializar o header
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.url;
        this.menuOpen = false; // Fecha o menu ao navegar
        // Resetar header
        this.isFixed = false;
        setTimeout(() => {
          this.initializeHeaderForHome();
        }, 100);
      });
  }

  ngOnInit(): void {
    this.currentRoute = this.router.url;
    // Sempre na página home agora
    setTimeout(() => {
      this.initializeHeaderForHome();
    }, 100);
  }

  private initializeHeaderForHome(): void {
    // Aguardar um pouco mais para garantir que o DOM está pronto
    setTimeout(() => {
      const headerElement = document.querySelector('.scroll-header header') || document.querySelector('header');
      if (!headerElement) return;

      const header = headerElement as HTMLElement;
      
      // Mudar para position relative para fazer parte do conteúdo
      header.style.position = 'relative';
      header.style.top = 'auto';
      header.style.opacity = '0';
      header.style.transform = 'translateY(0)';
      
      // Calcular a posição inicial do header (altura da seção home)
      const homeSection = document.querySelector('#home');
      if (homeSection) {
        const homeHeight = homeSection.getBoundingClientRect().height || window.innerHeight;
        this.headerOffset = homeHeight;
      } else {
        this.headerOffset = window.innerHeight;
      }
      
      this.onScroll();
    }, 200);
  }

  ngOnDestroy(): void {
    // Cleanup será feito automaticamente pelo HostListener
  }

  onScroll(): void {
    const scrollY = window.scrollY || window.pageYOffset;
    // Procurar o header dentro do scroll-header primeiro, senão procurar qualquer header
    const headerElement = document.querySelector('.scroll-header header') || document.querySelector('header');
    if (!headerElement) return;

    const header = headerElement as HTMLElement;
    const headerRect = header.getBoundingClientRect();
    
    // Calcular opacidade baseada na posição do scroll
    // Começa a aparecer quando começa a rolar
    const startFade = this.headerOffset * 0.2; // Começa a aparecer em 20% da altura da seção home
    const endFade = this.headerOffset * 0.6; // Aparece completamente em 60%
    
    // Quando o header chega no topo da viewport
    if (headerRect.top <= 0) {
      // Header chegou no topo - fixar (se ainda não estiver fixo)
      if (!this.isFixed) {
        this.isFixed = true;
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.width = '100%';
        header.style.left = '0';
        header.style.zIndex = '100';
      }
      // Opacidade total quando fixo
      this.scrollOpacity = 1;
      header.style.opacity = '1';
    } else if (!this.isFixed) {
      // Header ainda está subindo com o conteúdo (apenas se não estiver fixo)
      header.style.position = 'relative';
      header.style.top = 'auto';
      
      if (scrollY < startFade) {
        this.scrollOpacity = 0;
      } else if (scrollY >= endFade) {
        this.scrollOpacity = 1;
      } else {
        // Transição gradual
        this.scrollOpacity = (scrollY - startFade) / (endFade - startFade);
      }
      
      header.style.opacity = this.scrollOpacity.toString();
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  scrollToSection(sectionId: string): void {
    this.menuOpen = false; // Fechar menu ao clicar
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = this.isFixed ? 80 : 20; // Offset para o header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      this.activeSection = sectionId;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Detectar qual seção está visível
    const sections = ['home', 'about', 'work', 'curriculo', 'contato'];
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const elementBottom = elementTop + rect.height;

        // Verificar se a seção está visível na viewport
        if (scrollY + windowHeight * 0.3 >= elementTop && scrollY <= elementBottom) {
          this.activeSection = section;
          break;
        }
      }
    }

    // Chamar o método de scroll original
    this.onScroll();
  }
}

