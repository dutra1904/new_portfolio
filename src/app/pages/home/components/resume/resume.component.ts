import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResumeComponent {
  @Input() translations: any;
  @Input() curriculoPath: string = '';
  @Input() curriculoNome: string = '';
  @Input() activeTab: string = '';
  @Input() isActiveTab: (tab: 'about' | 'portfolio' | 'resume' | 'contact') => boolean = () => false;
  @Input() setActiveTab: (tab: 'about' | 'portfolio' | 'resume' | 'contact') => void = () => {};
}


