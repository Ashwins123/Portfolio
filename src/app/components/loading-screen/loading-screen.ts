import { Component, OnInit, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-loading-screen',
  imports: [DecimalPipe],
  templateUrl: './loading-screen.html',
  styleUrl: './loading-screen.scss',
})
export class LoadingScreen implements OnInit {
  progress = signal(0);

  ngOnInit() {
    const interval = setInterval(() => {
      this.progress.update(v => {
        const next = v + Math.random() * 15;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 150);
  }
}
