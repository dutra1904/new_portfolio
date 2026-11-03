import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLink } from '../../content/site.models';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent {
  @Input({ required: true }) links!: readonly SocialLink[];

  trackById(_index: number, link: SocialLink): string {
    return link.id;
  }
}

