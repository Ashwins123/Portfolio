import { Component, OnInit, signal } from '@angular/core';

interface Skill {
  name: string; icon: string; percent: number; level: string;
  badgeClass: string; category: string; animated: boolean;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements OnInit {
  activeCategory = signal('all');
  filteredSkills = signal<Skill[]>([]);

  categories = [
    { key: 'all', label: 'All', icon: '✨' },
    { key: 'frontend', label: 'Frontend', icon: '🎨' },
    { key: 'backend', label: 'Backend', icon: '⚙️' },
    { key: 'database', label: 'Database', icon: '🗄' },
    { key: 'tools', label: 'Tools', icon: '🛠' },
  ];

  private allSkills: Skill[] = [
    { name: 'Angular', icon: '🅰', percent: 92, level: 'Expert', badgeClass: 'purple', category: 'frontend', animated: true },
    { name: 'TypeScript', icon: '📘', percent: 88, level: 'Expert', badgeClass: 'blue', category: 'frontend', animated: true },
    { name: 'RxJS', icon: '🔄', percent: 80, level: 'Advanced', badgeClass: 'purple', category: 'frontend', animated: true },
    { name: 'Angular Material', icon: '💅', percent: 85, level: 'Advanced', badgeClass: 'cyan', category: 'frontend', animated: true },
    { name: 'Tailwind CSS', icon: '🌊', percent: 82, level: 'Advanced', badgeClass: 'cyan', category: 'frontend', animated: true },
    { name: 'SCSS', icon: '🎨', percent: 85, level: 'Advanced', badgeClass: 'purple', category: 'frontend', animated: true },
    { name: 'Node.js', icon: '🟢', percent: 65, level: 'Intermediate', badgeClass: 'green', category: 'backend', animated: true },
    { name: 'REST API', icon: '🔗', percent: 80, level: 'Advanced', badgeClass: 'blue', category: 'backend', animated: true },
    { name: 'Supabase', icon: '⚡', percent: 78, level: 'Advanced', badgeClass: 'green', category: 'database', animated: true },
    { name: 'Firebase', icon: '🔥', percent: 70, level: 'Intermediate', badgeClass: 'cyan', category: 'database', animated: true },
    { name: 'Git', icon: '📦', percent: 85, level: 'Advanced', badgeClass: 'blue', category: 'tools', animated: true },
    { name: 'Responsive UI', icon: '📱', percent: 90, level: 'Expert', badgeClass: 'purple', category: 'frontend', animated: true },
  ];

  aiTools = [
    { name: 'ChatGPT', icon: '🤖', desc: 'Coding, writing, research, learning, image generation.', color: '#10a37f' },
    { name: 'Google Gemini', icon: '✨', desc: 'Strong integration with Google services.', color: '#4285f4' },
    { name: 'Claude', icon: '🧠', desc: 'Good for long documents and coding help.', color: '#a855f7' },
    { name: 'GitHub Copilot', icon: '🐙', desc: 'AI code completion for VS Code.', color: '#6e40c9' },
    { name: 'Cursor', icon: '⚡', desc: 'AI-powered coding editor.', color: '#22d3ee' },
    { name: 'Replit AI', icon: '💻', desc: 'Online coding with AI help.', color: '#f97316' },
    { name: 'Canva AI', icon: '🎨', desc: 'Easy design + AI tools.', color: '#00c4cc' },
    { name: 'Adobe Firefly', icon: '🔥', desc: 'AI image editing and design.', color: '#ff3366' },
  ];

  ngOnInit() { this.filterSkills(); }

  filterSkills() {
    const cat = this.activeCategory();
    this.filteredSkills.set(
      cat === 'all' ? [...this.allSkills] : this.allSkills.filter(s => s.category === cat)
    );
  }

  setCategory(key: string) {
    this.activeCategory.set(key);
    this.filterSkills();
  }
}
