import { Component } from '@angular/core';
import { Router } from '@angular/router';

// PUBLIC_INTERFACE
@Component({
  selector: 'ww-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  standalone: true
})
/** Responsive nav: Home, Trip Planner, Suggestions, Sign Out. */
export class NavigationComponent {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  constructor(private _router: Router) {}

  // PUBLIC_INTERFACE
  navigate(route: string) {
    // Navigate using Angular Router for logo/brand click
    this._router.navigate(['/' + route]);
  }
}
