import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { EcosystemComponent } from './components/ecosystem/ecosystem.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { Language } from './content/site.models';
import { CONTENT, CV_FILES, HASH_ALIASES, SECTION_IDS } from './content/site-content';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AboutMeComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    EcosystemComponent,
    SocialLinksComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  lang: Language = 'EN';
  readonly year = new Date().getFullYear();
  readonly navItems = [
    { id: 'projects', key: 'projects' },
    { id: 'ecosystem', key: 'ecosystem' },
    { id: 'experience', key: 'experience' },
    { id: 'about', key: 'about' },
    { id: 'contact', key: 'contact' }
  ] as const;

  activeSection = 'home';
  private sectionObserver?: IntersectionObserver;

  get copy() {
    return CONTENT[this.lang];
  }

  get cv() {
    return CV_FILES[this.lang];
  }

  ngAfterViewInit(): void {
    document.documentElement.lang = this.lang === 'PT' ? 'pt-BR' : 'en';
    this.observeSections();
    this.scrollToHash();
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }

  setLanguage(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value !== 'EN' && value !== 'PT') {
      return;
    }
    this.lang = value;
    document.documentElement.lang = value === 'PT' ? 'pt-BR' : 'en';
  }

  scrollTo(id: string, event?: Event): void {
    event?.preventDefault();
    const target = HASH_ALIASES[id] ?? 'home';
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${target}`);
  }

  private scrollToHash(): void {
    const hash = window.location.hash.replace('#', '');
    if (!hash || !HASH_ALIASES[hash]) {
      return;
    }
    window.setTimeout(() => this.scrollTo(hash), 60);
  }

  private observeSections(): void {
    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.id;
        if (id) {
          this.activeSection = id;
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0.1, 0.25, 0.5] }
    );

    SECTION_IDS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        this.sectionObserver?.observe(section);
      }
    });
  }
}
