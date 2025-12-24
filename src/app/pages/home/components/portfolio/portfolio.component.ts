import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent {
  @Input() translations: any;
  @Input() projetos: any[] = [];
  @Input() projetoAtualIndex: number = 0;
  @Input() activeTab: string = '';
  @Input() isActiveTab: (tab: 'about' | 'portfolio' | 'resume' | 'contact') => boolean = () => false;
  @Input() setActiveTab: (tab: 'about' | 'portfolio' | 'resume' | 'contact') => void = () => {};
  @Input() abrirProjeto: (link: string) => void = () => {};
  
  @Output() projetoAnteriorEvent = new EventEmitter<void>();
  @Output() proximoProjetoEvent = new EventEmitter<void>();
  @Output() indexChangeEvent = new EventEmitter<number>();
  
  projetoAnterior(): void {
    this.projetoAnteriorEvent.emit();
  }
  
  proximoProjeto(): void {
    this.proximoProjetoEvent.emit();
  }
  
  setIndex(index: number): void {
    this.indexChangeEvent.emit(index);
  }
  
  get projetoAtual() {
    return this.projetos[this.projetoAtualIndex] || {};
  }
}
