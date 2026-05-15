import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private client!: SupabaseClient;
  readonly configured: boolean;

  constructor() {
    const url = environment.supabaseUrl;
    const key = environment.supabaseKey;
    this.configured = url.startsWith('http');
    if (this.configured) {
      this.client = createClient(url, key);
    }
  }

  get supabase() { return this.client; }

  async saveMessage(data: { name: string; email: string; subject: string; message: string }) {
    if (!this.configured) throw new Error('Supabase not configured. Add your credentials to environment.ts.');
    const { error } = await this.client.from('messages').insert([data]);
    if (error) throw error;
  }

  async getMessages() {
    if (!this.configured) return [];
    const { data, error } = await this.client.from('messages').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  }

  async signIn(email: string, password: string) {
    if (!this.configured) throw new Error('Supabase not configured. Add your credentials to environment.ts.');
    return this.client.auth.signInWithPassword({ email, password });
  }

  async signUp(email: string, password: string) {
    if (!this.configured) throw new Error('Supabase not configured. Add your credentials to environment.ts.');
    return this.client.auth.signUp({ email, password });
  }

  async signOut() {
    if (!this.configured) return;
    return this.client.auth.signOut();
  }

  getSession() {
    if (!this.configured) return Promise.resolve({ data: { session: null }, error: null });
    return this.client.auth.getSession();
  }
}
