import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {

  feedbackData = {
    name: '',
    email: '',
    message: ''
  };

  feedbackSent = false;
  errorSending = false;

  // Endpoint for the Netlify Function
  API_ENDPOINT = '/.netlify/functions/send-feedback';

  // Constructor must inject HttpClient
  constructor(private http: HttpClient) { } 

  // The onSubmit method called by (ngSubmit)
  onSubmit(form: NgForm) {
    // Reset status messages
    this.feedbackSent = false;
    this.errorSending = false;

    if (form.invalid) {
      console.log('Form is invalid.');
      return;
    }

    // HTTP POST request
    this.http.post(this.API_ENDPOINT, form.value).subscribe({
      next: (response) => {
        this.feedbackSent = true;
        form.resetForm(); // Clear the form on success
      },
      error: (error) => {
        this.errorSending = true;
        console.error('Submission failed:', error);
      }
    });
  }
}
