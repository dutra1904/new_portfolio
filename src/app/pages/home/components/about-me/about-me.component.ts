import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCopy, SkillGroup } from '../../content/site.models';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  @Input({ required: true }) copy!: AboutCopy;

  trackByTitle(_index: number, group: SkillGroup): string {
    return group.title;
  }
}
