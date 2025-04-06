import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="app-container">
      <header class="app-header">
        <h1>Weather App</h1>
        <nav>
          <a routerLink="/" routerLinkActive="active">Trang chính</a>
          <a routerLink="/favorites" routerLinkActive="active">Yêu thích</a>
        </nav>
      </header>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    .app-header {
      background-color:rgb(0, 0, 0);
      color: white;
      padding: 1rem;
      text-align: center;
    }
    
    .app-header h1 {
      margin: 0;
    }
    
    nav {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;
    }
    
    nav a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    
    nav a:hover, nav a.active {
      background-color:rgb(0, 0, 0);
    }
    
    main {
      flex: 1;
      padding: 2rem;
      background-color: #f5f5f5;
    }
  `]
})
export class AppComponent {
  title = 'angular-weather-w3';
}