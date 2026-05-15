import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AiService } from '../../services/ai';

@Component({
  selector: 'app-ai-features',
  imports: [FormsModule],
  templateUrl: './ai-features.html',
  styleUrl: './ai-features.scss',
})
export class AiFeatures {
  private ai = inject(AiService);

  activeTool = signal('');
  loading = signal(false);

  bioInput = signal('');
  bioResult = signal('');

  resumeInput = signal('');
  resumeResult = signal('');

  skillInput = signal('');
  skillSuggestions = signal<string[]>([]);

  careerSuggestions = [
    { icon: '🏢', role: 'Senior Angular Developer', match: '95%' },
    { icon: '🚀', role: 'Frontend Architect', match: '88%' },
    { icon: '💡', role: 'Full-Stack Engineer', match: '82%' },
    { icon: '🤖', role: 'AI-Integrated Dev', match: '79%' },
    { icon: '📱', role: 'Mobile Web Developer', match: '74%' },
    { icon: '🧑‍💼', role: 'Tech Lead', match: '70%' },
  ];

  setTool(tool: string) {
    this.activeTool.set(this.activeTool() === tool ? '' : tool);
  }

  async generateBio() {
    if (!this.bioInput().trim()) return;
    this.loading.set(true);
    await this.delay(1400);
    this.bioResult.set(this.ai.generateBio(this.bioInput()));
    this.loading.set(false);
  }

  async generateResumeSummary() {
    if (!this.resumeInput().trim()) return;
    this.loading.set(true);
    await this.delay(1400);
    this.resumeResult.set(this.ai.generateResumeSummary(this.resumeInput()));
    this.loading.set(false);
  }

  async suggestSkills() {
    if (!this.skillInput().trim()) return;
    this.loading.set(true);
    await this.delay(1200);
    this.skillSuggestions.set(this.ai.suggestSkills(this.skillInput()));
    this.loading.set(false);
  }

  copy(text: string) {
    navigator.clipboard.writeText(text);
  }

  private delay(ms: number) {
    return new Promise(r => setTimeout(r, ms));
  }
}
