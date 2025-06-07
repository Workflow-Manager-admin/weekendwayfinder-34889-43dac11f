import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

const MOOD_OPTIONS = [
  { label: 'Relaxing', value: 'relaxing' },
  { label: 'Adventurous', value: 'adventurous' },
  { label: 'Cultural', value: 'cultural' },
];

const DISTANCE_OPTIONS = [
  { label: 'Under 50 miles', value: 'under-50' },
  { label: '50–150 miles', value: '50-150' },
  { label: '150–300 miles', value: '150-300' },
  { label: '300+ miles', value: '300-plus' }
];

const BUDGET_OPTIONS = [
  { label: '$', value: '$' },
  { label: '$$', value: '$$' },
  { label: '$$$', value: '$$$' }
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
    // For SSR-safe demo, programmatic navigation is not performed here.
    // The template disables submit if invalid.
    // In a full app, Router navigation would be here.
    return;
  }
}
