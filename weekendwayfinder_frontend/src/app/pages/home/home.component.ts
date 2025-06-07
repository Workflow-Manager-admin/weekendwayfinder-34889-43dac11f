import { Component } from '@angular/core';
import { Router } from '@angular/router';

// PUBLIC_INTERFACE
@Component({
  selector: 'ww-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true
})
/** Home page: hero image, intro, CTA. */
export class HomeComponent {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  constructor(private _router: Router) {}

  // PUBLIC_INTERFACE
  startPlanning() {
    // Navigate to the trip planner page
    this._router.navigate(['/planner']);
  }
}
