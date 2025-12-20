import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  nome = '';
  email = '';
  mensagem = '';

  enviarMensagem(): void {
    const assunto = encodeURIComponent('Contato do Portfólio');
    const corpo = encodeURIComponent(`Nome: ${this.nome}\nEmail: ${this.email}\n\nMensagem:\n${this.mensagem}`);
    const mailtoLink = `mailto:dutramaria165@gmail.com?subject=${assunto}&body=${corpo}`;
    
    window.location.href = mailtoLink;
  }
}

