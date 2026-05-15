import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AiService {
  private bioTemplates = [
    `I'm a passionate Angular developer with {exp} years of experience building enterprise-grade web applications. Based in {location}, I specialise in {skills}, creating scalable, high-performance solutions that combine technical excellence with exceptional UX. I thrive on solving complex problems and delivering products that make a real impact.`,
    `Results-driven frontend engineer with {exp} years crafting production-grade applications using {skills}. Located in {location}, I bring expertise in component architecture, reactive programming with RxJS, and integrating AI-powered features into modern web apps. I'm dedicated to clean code, performance optimisation, and beautiful, accessible user interfaces.`,
    `Enterprise Angular developer with {exp} years of hands-on experience in {skills}. Based in {location}, I focus on building scalable, maintainable codebases with a strong eye for design systems and developer experience. Passionate about leveraging cutting-edge tools including AI to ship faster and smarter.`,
  ];

  private resumeSummaryTemplates = [
    `Experienced Angular developer with a proven track record of delivering scalable web applications. Proficient in TypeScript, RxJS, Angular Material, and Supabase. Adept at translating business requirements into performant, pixel-perfect UIs with a focus on clean architecture and code quality.`,
    `Dynamic frontend engineer skilled in Angular ecosystem, TypeScript, and modern backend integration. Demonstrated expertise in building enterprise SaaS products, implementing real-time features, and leading UI architecture decisions. Committed to writing maintainable, well-tested code that scales.`,
    `Full-stack Angular developer combining frontend mastery with backend integration expertise. Proficient across the modern web stack — Angular, TypeScript, Node.js, Supabase — with a passion for AI-assisted development workflows and building products that users love.`,
  ];

  private skillSets: Record<string, string[]> = {
    'angular developer': ['NgRx / Signals', 'Angular CDK', 'Web Components', 'PWA Development', 'GraphQL', 'Micro-frontends', 'Jest / Cypress', 'Docker Basics'],
    'frontend developer': ['React / Next.js', 'Vue.js', 'WebSockets', 'Three.js / WebGL', 'Storybook', 'Jest', 'Webpack', 'Performance Auditing'],
    'full-stack': ['Node.js / Express', 'PostgreSQL', 'Redis', 'REST API Design', 'GraphQL', 'Docker', 'AWS Basics', 'CI/CD Pipelines'],
    default: ['TypeScript Advanced', 'System Design', 'Testing (TDD)', 'Performance Optimization', 'Web Accessibility', 'Git Advanced', 'Agile / Scrum', 'Technical Writing'],
  };

  generateBio(input: string): string {
    const template = this.bioTemplates[Math.floor(Math.random() * this.bioTemplates.length)];
    const parts = input.split(',').map(s => s.trim());
    const skills = parts.slice(0, 2).join(', ') || 'Angular, TypeScript';
    const exp = parts.find(p => /\d/.test(p)) || '2+';
    const location = parts.find(p => /city|chennai|bangalore|mumbai|delhi|hyderabad|india/i.test(p)) || 'Chennai, India';
    return template
      .replace('{skills}', skills)
      .replace('{exp}', exp)
      .replace('{location}', location);
  }

  generateResumeSummary(_input: string): string {
    return this.resumeSummaryTemplates[Math.floor(Math.random() * this.resumeSummaryTemplates.length)];
  }

  suggestSkills(role: string): string[] {
    const key = Object.keys(this.skillSets).find(k => role.toLowerCase().includes(k)) ?? 'default';
    return this.skillSets[key];
  }
}
