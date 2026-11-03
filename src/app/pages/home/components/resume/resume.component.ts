import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceCopy, TimelineEntry } from '../../content/site.models';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  @Input({ required: true }) copy!: ExperienceCopy;
  @Input({ required: true }) cvHref = '';
  @Input({ required: true }) cvFilename = '';

  trackByOrg(_index: number, item: TimelineEntry): string {
    return item.org;
  }
}
