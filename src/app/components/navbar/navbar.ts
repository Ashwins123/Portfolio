import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '../../services/auth.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  auth = inject(AuthService);
  theme = inject(ThemeService);
  private router = inject(Router);

  scrolled = signal(false);
  mobileOpen = signal(false);
  currentUser = toSignal(this.auth.user$);

  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Resume', path: '/resume' },
    { label: 'Jobs', path: '/jobs' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'AI', path: '/ai' },
  ];

  ngOnInit() {}

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 20); }

  toggleMobile() { this.mobileOpen.update(v => !v); }

  navigate(path: string) {
    this.router.navigate([path]);
    this.mobileOpen.set(false);
  }

  async logout() {
    await this.auth.signOut();
    this.mobileOpen.set(false);
  }
}
