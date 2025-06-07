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
    // Empty stub for template event, actual navigation logic handled in routing/template.
  }
}
