/* global window */
import { Component } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'ww-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  standalone: true
})
/** Responsive nav: Home, Trip Planner, Suggestions, Sign Out. */
export class NavigationComponent {
  // PUBLIC_INTERFACE
  navigate(route: string) {
    // Safe navigation using window.location for logo/brand
    if (typeof window !== 'undefined') {
      window.location.href = '/' + route;
    }
  }
}
