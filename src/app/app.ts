import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { LoadingScreen } from './components/loading-screen/loading-screen';

const AUTH_ROUTES = ['/login', '/signup'];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, LoadingScreen],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  isLoading = signal(true);
  isAuthPage = signal(false);

  private particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; color: string }[] = [];
  private animFrame?: number;
  private canvas?: HTMLCanvasElement;
  private ctx?: CanvasRenderingContext2D;

  constructor(private router: Router) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: any) => {
      this.isAuthPage.set(AUTH_ROUTES.includes(e.urlAfterRedirects));
    });
  }

  ngOnInit() {
    setTimeout(() => { this.isLoading.set(false); }, 2500);
    setTimeout(() => { this.initParticles(); }, 100);
  }

  ngOnDestroy() {
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
  }

  private initParticles() {
    this.canvas = document.getElementById('particles-canvas') as HTMLCanvasElement;
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d')!;
    this.resize();
    window.addEventListener('resize', () => this.resize());
    const colors = ['rgba(168,85,247,0.6)', 'rgba(59,130,246,0.6)', 'rgba(34,211,238,0.4)'];
    for (let i = 0; i < 60; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    this.animate();
  }

  private resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private animate() {
    if (!this.ctx || !this.canvas) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = this.canvas!.width;
      if (p.x > this.canvas!.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas!.height;
      if (p.y > this.canvas!.height) p.y = 0;
      this.ctx!.beginPath();
      this.ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx!.fillStyle = p.color;
      this.ctx!.shadowBlur = 10;
      this.ctx!.shadowColor = p.color;
      this.ctx!.fill();
    });
    this.animFrame = requestAnimationFrame(() => this.animate());
  }
}
