import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

type TabId = 'about' | 'portfolio' | 'resume' | 'contact';
type CardPosition = 'far-left' | 'left' | 'center' | 'right' | 'far-right';

const CAROUSEL_POSITIONS: CardPosition[] = ['far-left', 'left', 'center', 'right', 'far-right'];
const TABS: { id: TabId; key: string }[] = [
  { id: 'about', key: 'about' },
  { id: 'portfolio', key: 'portfolio' },
  { id: 'resume', key: 'resume' },
  { id: 'contact', key: 'contact' }
];

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent {
  readonly tabs = TABS;

  @Input() translations: any;
  @Input() projetos: any[] = [];
  @Input() projetoAtualIndex = 0;
  @Input() activeTab = '';
  @Input() isActiveTab: (tab: TabId) => boolean = () => false;
  @Input() setActiveTab: (tab: TabId) => void = () => {};
  @Input() abrirProjeto: (link: string) => void = () => {};

  @Output() projetoAnteriorEvent = new EventEmitter<void>();
  @Output() proximoProjetoEvent = new EventEmitter<void>();
  @Output() indexChangeEvent = new EventEmitter<number>();

  projetoAnterior = () => this.projetoAnteriorEvent.emit();
  proximoProjeto = () => this.proximoProjetoEvent.emit();
  setIndex = (index: number) => this.indexChangeEvent.emit(index);

  get carouselItems() {
    const { projetos, projetoAtualIndex } = this;
    const len = projetos.length;
    return CAROUSEL_POSITIONS.map((position, i) => ({
      projeto: projetos[(projetoAtualIndex + i - 2 + len) % len] ?? {},
      index: (projetoAtualIndex + i - 2 + len) % len,
      position
    }));
  }

  onCardClick(item: { projeto: { link: string }; index: number; position: string }, ev: Event): void {
    if (item.position === 'center') {
      this.abrirProjeto(item.projeto.link);
    } else {
      ev.preventDefault();
      ev.stopPropagation();
      this.setIndex(item.index);
    }
  }

  trackByIndex = (_: number, i: number) => i;
  trackByTabId = (_: number, tab: { id: TabId }) => tab.id;
  trackByPosition = (_: number, item: { position: string }) => item.position;
}
