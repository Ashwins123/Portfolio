import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences = [
    {
      year: 'Jan 2023 – Present',
      role: 'Angular Developer',
      company: 'Fiducia Score Pvt Ltd (TRSTScore), Chennai',
      type: 'Full-time',
      typeClass: 'blue',
      description: 'Developed and maintained a Background Verification (BGV) platform to automate candidate document validation, including PAN card checks, employment verification, and address verification. Streamlined document workflows, reduced manual effort and turnaround time, and improved processing efficiency by 40%.',
      skills: ['Angular 16', 'TypeScript', 'REST APIs', 'OAuth', 'HTTP Client', 'SCSS', 'Git', 'ChatGPT', 'Google Gemini', 'Claude', 'GitHub Copilot', 'Cursor', 'Replit AI', 'Canva AI', 'Adobe Firefly'],
    },
  ];

  education = [
    {
      year: 'Jan 2020 – Jan 2022',
      degree: 'MCA – Master of Computer Applications',
      institution: 'Hindustan College of Arts & Science, Coimbatore – 641028',
      type: 'Post Graduate',
      typeClass: 'purple',
    },
    {
      year: 'Jan 2017 – Jan 2020',
      degree: 'BCA – Bachelor of Computer Applications',
      institution: 'National College, Tiruchirappalli – 620001',
      type: 'Under Graduate',
      typeClass: 'cyan',
    },
  ];

  achievements = [
    { icon: '⚡', title: 'Efficiency Boost', desc: 'Reduced document processing time by 40% through platform automation improvements.' },
    { icon: '👥', title: 'Project Leadership', desc: 'Led a project team of 5 developers, completing tasks ahead of schedule by 20%.' },
    { icon: '🎯', title: 'Error Reduction', desc: 'Enhanced platform accuracy, reducing error rates by 30% in candidate verification processes.' },
    { icon: '⭐', title: 'User Satisfaction', desc: 'Increased user satisfaction by 25% following UI enhancements and bug fixes.' },
  ];
}
