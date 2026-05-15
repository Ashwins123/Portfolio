import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume implements OnInit {
  resumeScore = 87;
  scoreOffset = 0;

  scoreBreakdown = [
    { label: 'Skills Match', score: 92, color: '#a855f7' },
    { label: 'Experience', score: 85, color: '#3b82f6' },
    { label: 'Keywords', score: 88, color: '#22d3ee' },
    { label: 'Formatting', score: 82, color: '#4ade80' },
  ];

  education = [
    { degree: 'MCA – Master of Computer Applications', institution: 'Hindustan College of Arts & Science, Coimbatore', year: '2020–2022' },
    { degree: 'BCA – Bachelor of Computer Applications', institution: 'National College, Tiruchirappalli', year: '2017–2020' },
  ];

  expSummary = [
    { period: 'Jan 2023–Now', role: 'Angular Developer', highlights: 'BGV platform automation, PAN/employment/address verification, 40% efficiency boost' },
  ];

  skillsSummary = ['Angular 16', 'TypeScript', 'JavaScript', 'REST APIs', 'HTTP Client', 'OAuth', 'HTML', 'SCSS', 'Bootstrap', 'Git', 'GitHub', 'Unit Testing', 'ChatGPT', 'Google Gemini', 'Claude', 'GitHub Copilot', 'Cursor', 'Replit AI', 'Canva AI', 'Adobe Firefly'];

  ngOnInit() {
    // circumference = 2πr = 2 * π * 40 ≈ 251.2
    this.scoreOffset = 251.2 - (251.2 * this.resumeScore) / 100;
  }
}
