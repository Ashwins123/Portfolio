import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  typedText = signal('');
  private roles = ['Angular Developer', 'Frontend Engineer', 'UI Architect', 'Full-Stack Builder'];
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer?: ReturnType<typeof setTimeout>;

  stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '15+', label: 'Projects Built' },
    { value: '10+', label: 'Technologies' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  ngOnInit() { this.typeLoop(); }

  ngOnDestroy() { clearTimeout(this.timer); }

  private typeLoop() {
    const current = this.roles[this.roleIndex];
    if (!this.deleting) {
      this.typedText.set(current.slice(0, ++this.charIndex));
      if (this.charIndex === current.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.typeLoop(), 1800);
        return;
      }
    } else {
      this.typedText.set(current.slice(0, --this.charIndex));
      if (this.charIndex === 0) {
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }
    this.timer = setTimeout(() => this.typeLoop(), this.deleting ? 60 : 100);
  }
}
