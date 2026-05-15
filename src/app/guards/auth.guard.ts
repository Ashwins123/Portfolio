import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SupabaseService } from '../services/supabase';
import { from, map } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const supabase = inject(SupabaseService);
  const router = inject(Router);
  return from(supabase.getSession()).pipe(
    map(({ data }) => {
      if (data.session) return true;
      router.navigate(['/login']);
      return false;
    })
  );
};
