import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  curriculoPath = '/assets/Curriculo.pdf';
  curriculoNome = 'Maria_Clara_Curriculo.pdf';
}

