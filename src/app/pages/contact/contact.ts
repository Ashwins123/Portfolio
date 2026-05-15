import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SupabaseService } from '../../services/supabase';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private fb = inject(FormBuilder);
  private supabase = inject(SupabaseService);
  contactForm: FormGroup;
  submitted = signal(false);
  sending = signal(false);

  contactInfo = [
    { icon: '📧', label: 'Email', value: 'ashwinloren435s@gmail.com' },
    { icon: '📍', label: 'Location', value: 'Chennai, Tamil Nadu, India' },
    { icon: '💼', label: 'Available For', value: 'Full-time · Freelance · Consulting' },
    { icon: '⏰', label: 'Response Time', value: 'Within 24 hours' },
  ];

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  get f() { return this.contactForm.controls; }

  async onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.sending.set(true);
    try {
      await this.supabase.saveMessage(this.contactForm.value);
      this.submitted.set(true);
      this.contactForm.reset();
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      this.sending.set(false);
    }
  }
}
