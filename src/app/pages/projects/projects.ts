import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Project {
  title: string; description: string; image: string;
  techStack: string[]; live: string; github: string;
  status: string; statusClass: string; tags: string[];
}

@Component({
  selector: 'app-projects',
  imports: [FormsModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit {
  searchQuery = '';
  activeFilter = 'All';
  filterTags = ['All', 'Angular', 'Supabase', 'Firebase', 'Node.js', 'MongoDB'];

  allProjects: Project[] = [
    {
      title: 'ZenBotChat',
      description: 'Real-time chat application with group messaging, typing indicators, seen status, and smooth animations powered by Supabase Realtime.',
      image: 'assets/projects/zenbotchat.png',
      techStack: ['Angular', 'Supabase', 'RxJS', 'SCSS'],
      live: 'https://zenbotchat.netlify.app',
      github: 'https://github.com/ashwinloren/zenbotchat',
      status: 'Live', statusClass: 'live',
      tags: ['Angular', 'Supabase'],
    },
    {
      title: 'VerifiQ',
      description: 'VerifiQ is a smart background verification platform that automates candidate verification, document validation, and real-time tracking for HR teams and companies.',
      image: 'assets/projects/VerifiQ.png',
      techStack: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Chart.js', 'OCR', 'Replit'],
      live: 'https://verifi-q--ashwinloren.replit.app',
      github: '',
      status: 'Live', statusClass: 'live',
      tags: ['Angular', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Finder',
      description: 'Angular Job Finder is a modern and responsive job portal application for Angular and frontend developers to search, save, and apply for jobs easily.',
      image: 'assets/projects/angularjobfinder.png',
      techStack: ['Angular', 'TypeScript', 'Tailwind CSS', 'React', 'Vite', 'Lucide', 'Radix UI', 'Replit'],
      live: 'https://finder--Ashwinlorens.replit.app',
      github: '',
      status: 'live', statusClass: 'live',
      tags: ['Angular'],
    },
    {
      title: 'My Portfolio',
      description: 'My Portfolio is a modern and responsive portfolio website showcasing projects, skills, and experience with a clean, user-friendly design.',
      image: 'assets/projects/myportfolio.png',
      techStack: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'Tailwind CSS', 'Angular Material', 'tsParticles', 'AOS', 'Supabase', 'Netlify'],
      live: 'https://infinityprofile.netlify.app/',
      github: '',
      status: 'Live', statusClass: 'live',
      tags: ['Angular', 'Supabase'],
    },
    {
      title: 'TaskZen Pro',
      description: 'A full-featured task management application with dashboard, CRUD operations, filtering, and analytics. Built with enterprise Angular patterns.',
      image: 'assets/projects/taskzen.png',
      techStack: ['Angular', 'TypeScript', 'Firebase', 'Angular Material', 'Tailwind'],
      live: 'https://taskzenpro.netlify.app',
      github: 'https://github.com/ashwinloren/taskzen-pro',
      status: 'Live', statusClass: 'live',
      tags: ['Angular', 'Firebase'],
    },
    {
      title: 'ProProfile',
      description: 'Full-stack career platform combining portfolio, resume system, job portal, dashboard analytics, auth, and AI tools in one SaaS product.',
      image: 'assets/projects/proprofile.png',
      techStack: ['Angular', 'Supabase', 'Angular Material', 'Tailwind', 'AI'],
      live: 'https://ashwinloren.dev',
      github: 'https://github.com/ashwinloren/proprofile',
      status: 'In Progress', statusClass: 'wip',
      tags: ['Angular', 'Supabase'],
    },
  ];

  filteredProjects: Project[] = [];

  ngOnInit() { this.filteredProjects = [...this.allProjects]; }

  setFilter(tag: string) {
    this.activeFilter = tag;
    this.filterProjects();
  }

  filterProjects() {
    let result = [...this.allProjects];
    if (this.activeFilter !== 'All') {
      result = result.filter(p => p.tags.includes(this.activeFilter));
    }
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }
    this.filteredProjects = result;
  }
}
