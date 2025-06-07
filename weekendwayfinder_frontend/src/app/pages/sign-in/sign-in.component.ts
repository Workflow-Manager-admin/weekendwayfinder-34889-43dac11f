import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// PUBLIC_INTERFACE
@Component({
  selector: 'ww-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
/** Sign-In page: scenic bg, centered form, validation. */
export class SignInComponent {
  signInForm: FormGroup;
  hidePassword = true;
  formError: string | null = null;

  // eslint-disable-next-line no-unused-vars
  constructor(private fb: FormBuilder, private router: Router) {
    this.signInForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  // PUBLIC_INTERFACE
  submit() {
    if (this.signInForm.invalid) {
      this.formError = "Please complete all fields correctly.";
      return;
    }
    // For demo, accept any input as "success"
    // On success, navigate to Trip Planner page
    this.router.navigate(['/planner']);
  }
}
