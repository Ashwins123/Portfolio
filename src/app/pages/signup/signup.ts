import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

function passwordMatch(control: AbstractControl) {
  const pass = control.get('password')?.value;
  const confirm = control.get('confirm')?.value;
  return pass === confirm ? null : { mismatch: true };
}

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  private auth = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  signupForm: FormGroup;
  loading = signal(false);
  showPass = signal(false);
  errorMsg = signal('');
  successMsg = signal('');

  constructor() {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', Validators.required],
    }, { validators: passwordMatch });
  }

  get f() { return this.signupForm.controls; }

  async onSubmit() {
    if (this.signupForm.invalid) { this.signupForm.markAllAsTouched(); return; }
    this.loading.set(true);
    this.errorMsg.set('');
    try {
      await this.auth.signUp(this.f['email'].value, this.f['password'].value);
      this.successMsg.set('Account created! Check your email to confirm, then sign in.');
      setTimeout(() => this.router.navigate(['/login']), 3000);
    } catch (err: any) {
      this.errorMsg.set(err?.message || 'Signup failed. Please try again.');
    } finally {
      this.loading.set(false);
    }
  }
}
