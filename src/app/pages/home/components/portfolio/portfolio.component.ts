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

  get featured(): Project | undefined {
    return this.copy.items.find((item) => item.featured);
  }

  get rest(): readonly Project[] {
    const featuredId = this.featured?.id;
    if (!featuredId) {
      return this.copy.items;
    }
    return this.copy.items.filter((item) => item.id !== featuredId);
  }

  trackById(_index: number, project: Project): string {
    return project.id;
  }
}
