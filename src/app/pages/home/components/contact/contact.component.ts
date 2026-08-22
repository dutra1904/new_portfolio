import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const CONTACT_EMAIL = 'dutramaria165@gmail.com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent {
  @Input() translations: any;
  @Input() activeTab = '';
  @Input() isActiveTab: (tab: 'about' | 'portfolio' | 'resume' | 'contact') => boolean = () => false;
  @Input() setActiveTab: (tab: 'about' | 'portfolio' | 'resume' | 'contact') => void = () => {};

  nome = '';
  email = '';
  mensagem = '';
  honeypot = '';
  status: 'idle' | 'sending' | 'sent' | 'error' = 'idle';
  statusMessage = '';

  async enviarMensagem(event: Event): Promise<void> {
    event.preventDefault();
    this.statusMessage = '';

    if (this.honeypot) {
      this.status = 'sent';
      this.statusMessage = this.translations?.contact?.sent;
      return;
    }

    if (!this.nome.trim() || !this.email.trim() || !this.mensagem.trim()) {
      this.status = 'error';
      this.statusMessage = this.translations?.contact?.fillAllFields;
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email.trim())) {
      this.status = 'error';
      this.statusMessage = this.translations?.contact?.invalidEmail;
      return;
    }

    this.status = 'sending';

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: this.nome.trim(),
          email: this.email.trim(),
          message: this.mensagem.trim(),
          _subject: this.translations?.contact?.emailSubject ?? 'Portfolio contact',
          _template: 'table',
          _captcha: 'false',
          _replyto: this.email.trim()
        })
      });

      if (!response.ok) {
        throw new Error('submit-failed');
      }

      this.status = 'sent';
      this.statusMessage = this.translations?.contact?.sent;
      this.nome = '';
      this.email = '';
      this.mensagem = '';
    } catch {
      this.status = 'error';
      this.statusMessage = this.translations?.contact?.emailError;
    }
  }
}
