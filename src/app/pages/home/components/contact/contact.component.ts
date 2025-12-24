import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  @Input() activeTab: string = '';
  @Input() isActiveTab: (tab: 'about' | 'portfolio' | 'resume' | 'contact') => boolean = () => false;
  @Input() setActiveTab: (tab: 'about' | 'portfolio' | 'resume' | 'contact') => void = () => {};
  
  @Output() enviarMensagemEvent = new EventEmitter<{nome: string, email: string, mensagem: string}>();
  
  nome = '';
  email = '';
  mensagem = '';
  
  enviarMensagem(event: Event): void {
    event.preventDefault();
    this.enviarMensagemEvent.emit({
      nome: this.nome,
      email: this.email,
      mensagem: this.mensagem
    });
  }
}


