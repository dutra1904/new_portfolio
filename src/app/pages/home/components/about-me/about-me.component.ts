import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutMeComponent {
  @Input() translations: any;
  @Input() habilidadesPorTopico: any[] = [];
  @Input() activeTab: string = '';
  @Input() isActiveTab: (tab: 'about' | 'portfolio' | 'resume' | 'contact') => boolean = () => false;
  @Input() setActiveTab: (tab: 'about' | 'portfolio' | 'resume' | 'contact') => void = () => {};
}


