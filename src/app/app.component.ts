import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfólio - Maria Clara Dutra';
  hideHeader = true; // Sempre escondido agora que tudo é scroll

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Sempre esconder header já que agora é uma página única com scroll
  }
}

