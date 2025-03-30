import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  template: `
    <app-nav-bar></app-nav-bar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'ReportPOCApp';
}
