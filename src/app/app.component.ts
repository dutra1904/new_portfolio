import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfólio - Maria Clara Dutra';

  constructor() {}

  ngOnInit(): void {
    // Sempre mostrar header agora que tudo é uma página única
  }
}

