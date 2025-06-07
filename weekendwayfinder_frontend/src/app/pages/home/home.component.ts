/* global window */
import { Component } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'ww-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true
})
/** Home page: hero image, intro, CTA. */
export class HomeComponent {
  // PUBLIC_INTERFACE
  startPlanning() {
    // Navigate to planner page in client context
    if (typeof window !== 'undefined') {
      window.location.href = '/planner';
    }
  }
}
