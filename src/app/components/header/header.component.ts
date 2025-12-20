import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  currentRoute = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.url;
        this.menuOpen = false; // Fecha o menu ao navegar
      });
  }

  ngOnInit(): void {
    this.currentRoute = this.router.url;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  isActive(route: string): boolean {
    if (route === '' && this.currentRoute === '/') {
      return true;
    }
    return this.currentRoute === `/${route}`;
  }
}

