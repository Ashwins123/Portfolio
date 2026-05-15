import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  bioTags = ['Angular Developer', 'TypeScript', 'RxJS', 'REST APIs', 'GitHub Copilot', 'Chennai'];

  quickStats = [
    { icon: '📅', value: '2+', label: 'Years Exp' },
    { icon: '🚀', value: '15+', label: 'Projects' },
    { icon: '🛠', value: '10+', label: 'Technologies' },
    { icon: '🤖', value: '4+', label: 'AI Tools Used' },
  ];

  infoCards = [
    {
      icon: '💼',
      title: 'Experience',
      desc: 'Angular Developer at Fiducia Score Pvt Ltd (TRSTScore), building BGV automation platforms.',
      items: ['Angular 16+', 'Component Architecture', 'RxJS & HTTP Client', 'OAuth & REST APIs'],
    },
    {
      icon: '🛠',
      title: 'Skills',
      desc: 'Full frontend stack with strong backend integration knowledge.',
      items: ['Angular + TypeScript', 'HTML · SCSS · Bootstrap', 'Reactive Forms + Validators', 'Code Splitting · Unit Testing'],
    },
    {
      icon: '🗄',
      title: 'Technologies',
      desc: 'Modern tools for scalable and maintainable applications.',
      items: ['Supabase · Firebase', 'Git · GitHub', 'Lazy Loading · Routing', 'UI Design · Responsive'],
    },
    {
      icon: '🤖',
      title: 'AI Tools',
      desc: 'Leveraging AI to accelerate development speed and quality.',
      items: ['ChatGPT', 'Google Gemini', 'Claude', 'GitHub Copilot', 'Cursor', 'Replit AI', 'Canva AI', 'Adobe Firefly'],
    },
  ];
}
