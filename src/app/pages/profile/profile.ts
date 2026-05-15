import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  private auth = inject(AuthService);
  private fb = inject(FormBuilder);

  profileForm: FormGroup;
  saving = signal(false);
  saved = signal(false);
  errorMsg = signal('');

  stats = [
    { icon: '👁', label: 'Profile Views', value: '1,248' },
    { icon: '📄', label: 'Resume Downloads', value: '87' },
    { icon: '💬', label: 'Messages', value: '23' },
    { icon: '💼', label: 'Job Applications', value: '5' },
  ];

  constructor() {
    this.profileForm = this.fb.group({
      name: ['Ashwin S', Validators.required],
      role: ['Angular Developer at TRSTScore', Validators.required],
      location: ['Chennai, Tamil Nadu, India', Validators.required],
      bio: ['Frontend Developer at Fiducia Score Pvt Ltd (TRSTScore). Proficiency in Angular and a background in enhancing operational efficiency through technology. Passionate about delivering value through frontend development and transforming user experiences.', Validators.required],
      github: ['https://github.com/ashwinloren'],
      linkedin: ['https://www.linkedin.com/in/ashwin-loren/'],
      website: ['https://ashwinloren.dev'],
    });
  }

  get f() { return this.profileForm.controls; }

  async onSave() {
    if (this.profileForm.invalid) { this.profileForm.markAllAsTouched(); return; }
    this.saving.set(true);
    this.errorMsg.set('');
    try {
      await new Promise(r => setTimeout(r, 800));
      this.saved.set(true);
      setTimeout(() => this.saved.set(false), 3000);
    } catch {
      this.errorMsg.set('Failed to save profile. Please try again.');
    } finally {
      this.saving.set(false);
    }
  }
}
