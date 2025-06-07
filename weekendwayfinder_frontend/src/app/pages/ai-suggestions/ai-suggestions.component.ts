import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Sample suggestion data for demonstration.
const SUGGESTIONS = [
  {
    mood: 'relaxing',
    title: 'Serenity Lake Retreat',
    place: 'Pinecrest Lake Resort',
    description: 'A peaceful lakeside stay with short hiking trails, paddle boating and spa treatments.',
    img: 'https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?auto=format&fit=crop&w=600&q=80'
  },
  {
    mood: 'adventurous',
    title: 'Mountain Adventure Burst',
    place: 'Eagle Ridge Cliffs',
    description: 'Go rock climbing, zip-lining, or join a guided canyoning group for a weekend thrill.',
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80'
  },
  {
    mood: 'cultural',
    title: 'City Arts Escape',
    place: 'Museums & Markets Town',
    description: 'Enjoy art exhibitions, street performances, and food markets – discover urban charm.',
    img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80'
  }
];

// PUBLIC_INTERFACE
@Component({
  selector: 'ww-ai-suggestions',
  templateUrl: './ai-suggestions.component.html',
  styleUrls: ['./ai-suggestions.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AiSuggestionsComponent {
  mood: string = '';
  distance: string = '';
  budget: string = '';
  suggestions: any[] = [];

  constructor(private router: Router) {
    let state: any = undefined;

    // Angular navigation state (client navigation)
    const nav = this.router.getCurrentNavigation();
    if (nav && nav.extras && nav.extras.state && nav.extras.state['mood']) {
      state = nav.extras.state;
    } else if (typeof window !== 'undefined' && window.history && window.history.state && window.history.state['mood']) {
      // Fallback for browser reload
      state = window.history.state;
    }

    if (!state?.mood || !state?.distance || !state?.budget) {
      this.router.navigate(['/planner']);
      return;
    }

    this.mood = state.mood ?? 'relaxing';
    this.distance = state.distance ?? 'short';
    this.budget = state.budget ?? 'economy';
    this.fetchSuggestions();
  }

  fetchSuggestions() {
    // Simulate AI suggestion by filtering static demo data.
    this.suggestions = SUGGESTIONS.filter(
      s => s.mood === this.mood
    );
    if (this.suggestions.length === 0) {
      // fallback if mood not found
      this.suggestions = SUGGESTIONS.slice(0, 1);
    }
  }
}
