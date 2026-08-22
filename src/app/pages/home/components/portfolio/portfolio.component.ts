import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

type TabId = 'about' | 'portfolio' | 'resume' | 'contact';

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

  trackByTabId = (_: number, tab: { id: TabId }) => tab.id;
  trackByTitle = (_: number, projeto: { titulo: string }) => projeto.titulo;
}
