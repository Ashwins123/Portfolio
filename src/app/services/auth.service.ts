import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SupabaseService } from './supabase';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user = new BehaviorSubject<any>(null);
  user$ = this._user.asObservable();

  constructor(private supabase: SupabaseService, private router: Router) {
    if (!supabase.configured) return;
    this.supabase.supabase.auth.getSession().then(({ data }) => {
      this._user.next(data.session?.user ?? null);
    });
    this.supabase.supabase.auth.onAuthStateChange((_, session) => {
      this._user.next(session?.user ?? null);
    });
  }

  get currentUser() { return this._user.value; }
  get isLoggedIn() { return !!this._user.value; }

  async signIn(email: string, password: string) {
    const { error } = await this.supabase.signIn(email, password);
    if (error) throw error;
  }

  async signUp(email: string, password: string) {
    const { error } = await this.supabase.signUp(email, password);
    if (error) throw error;
  }

  async signOut() {
    await this.supabase.signOut();
    this.router.navigate(['/login']);
  }
}
