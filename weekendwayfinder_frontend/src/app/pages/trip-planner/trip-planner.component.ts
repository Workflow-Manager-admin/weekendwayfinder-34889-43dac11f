import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

const MOOD_OPTIONS = [
  { label: 'Relaxing', value: 'relaxing' },
  { label: 'Adventurous', value: 'adventurous' },
  { label: 'Cultural', value: 'cultural' },
];

const DISTANCE_OPTIONS = [
  { label: '< 100 km', value: 'short' },
  { label: '100-300 km', value: 'medium' },
  { label: '300+ km', value: 'long' },
];

const BUDGET_OPTIONS = [
  { label: 'Economy', value: 'economy' },
  { label: 'Mid-range', value: 'mid' },
  { label: 'Luxury', value: 'luxury' },
];

// PUBLIC_INTERFACE
@Component({
  selector: 'ww-trip-planner',
  templateUrl: './trip-planner.component.html',
  styleUrls: ['./trip-planner.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class TripPlannerComponent {
  plannerForm: FormGroup;
  moodOptions = MOOD_OPTIONS;
  distanceOptions = DISTANCE_OPTIONS;
  budgetOptions = BUDGET_OPTIONS;

  constructor(private fb: FormBuilder) {
    this.plannerForm = fb.group({
      mood: [MOOD_OPTIONS[0].value, Validators.required],
      distance: [DISTANCE_OPTIONS[0].value, Validators.required],
      budget: [BUDGET_OPTIONS[0].value, Validators.required]
    });
  }

  // PUBLIC_INTERFACE
  getSuggestions() {
    if (this.plannerForm.invalid) return;
    // Navigation should be handled via routerLink in the template or another approach.
  }
}
