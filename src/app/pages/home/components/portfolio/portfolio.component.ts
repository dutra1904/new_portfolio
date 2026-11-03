import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ProjectsCopy } from '../../content/site.models';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  @Input({ required: true }) copy!: ProjectsCopy;

  trackById(_index: number, project: Project): string {
    return project.id;
  }
}
