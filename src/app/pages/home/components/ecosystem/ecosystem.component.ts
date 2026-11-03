import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcosystemCard, EcosystemCopy } from '../../content/site.models';

@Component({
  selector: 'app-ecosystem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ecosystem.component.html',
  styleUrls: ['./ecosystem.component.scss']
})
export class EcosystemComponent {
  @Input({ required: true }) copy!: EcosystemCopy;

  trackById(_index: number, card: EcosystemCard): string {
    return card.id;
  }
}
