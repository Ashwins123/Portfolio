import { Injectable } from '@angular/core';

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  techStack: string[];
  posted: string;
  logo: string;
  remote: boolean;
  saved?: boolean;
}

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  readonly jobs: Job[] = [
    {
      id: 1,
      title: 'Senior Angular Developer',
      company: 'TechCorp Solutions',
      location: 'Chennai, Tamil Nadu',
      type: 'Full-time',
      salary: '₹18–28 LPA',
      description: 'Lead the development of large-scale Angular applications for enterprise clients. Work with a high-performing team to deliver scalable, maintainable solutions.',
      requirements: ['5+ years Angular experience', 'Strong TypeScript skills', 'RxJS expertise', 'Angular Material proficiency', 'REST API integration'],
      techStack: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'Supabase'],
      posted: '2 days ago',
      logo: '🏢',
      remote: false,
    },
    {
      id: 2,
      title: 'Frontend Engineer – Angular',
      company: 'FinTech Innovations Pvt Ltd',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      salary: '₹15–22 LPA',
      description: 'Build intuitive financial dashboards and data visualisation tools. Collaborate with product and design teams to deliver premium user experiences.',
      requirements: ['3+ years Angular', 'Performance optimisation experience', 'Responsive design skills', 'Jest testing', 'Agile methodology'],
      techStack: ['Angular', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Firebase'],
      posted: '5 days ago',
      logo: '💳',
      remote: true,
    },
    {
      id: 3,
      title: 'Angular + Node.js Full-Stack Developer',
      company: 'CloudBase Technologies',
      location: 'Hyderabad, Telangana',
      type: 'Full-time',
      salary: '₹20–32 LPA',
      description: 'Design and implement full-stack features across Angular frontend and Node.js backend. Own features end-to-end from API design to deployment.',
      requirements: ['Angular + Node.js experience', 'Database design skills', 'Docker knowledge', 'AWS or GCP basics', 'REST & GraphQL API design'],
      techStack: ['Angular', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
      posted: '1 week ago',
      logo: '☁️',
      remote: true,
    },
    {
      id: 4,
      title: 'UI Engineer – SaaS Platform',
      company: 'SaaSify Labs',
      location: 'Remote – India',
      type: 'Full-time',
      salary: '₹12–18 LPA',
      description: 'Join a fast-growing SaaS startup to build and evolve the core product UI. Focus on component libraries, design systems, and pixel-perfect implementation.',
      requirements: ['Angular or React experience', 'Design system experience', 'CSS/SCSS mastery', 'Accessibility awareness', 'Figma handoff'],
      techStack: ['Angular', 'SCSS', 'Storybook', 'Figma', 'CI/CD'],
      posted: '3 days ago',
      logo: '🚀',
      remote: true,
    },
    {
      id: 5,
      title: 'Angular Developer – E-Commerce',
      company: 'RetailX Platform',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      salary: '₹10–16 LPA',
      description: 'Work on high-traffic e-commerce frontend with a focus on performance, SEO, and conversion optimisation. Integrate with headless commerce APIs.',
      requirements: ['Angular experience', 'Performance profiling skills', 'SEO best practices', 'Payment gateway integration', 'Mobile-first mindset'],
      techStack: ['Angular', 'TypeScript', 'PWA', 'Stripe', 'Algolia'],
      posted: '1 week ago',
      logo: '🛒',
      remote: false,
    },
    {
      id: 6,
      title: 'Mid-Level Frontend Developer',
      company: 'Edtech Ventures',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      salary: '₹8–14 LPA',
      description: 'Build interactive learning experiences for students and educators. Work on video players, quiz engines, and real-time collaboration features.',
      requirements: ['2+ years Angular or React', 'WebSocket experience', 'Video.js or similar', 'Responsive UI skills', 'Strong communication'],
      techStack: ['Angular', 'WebSockets', 'Video.js', 'Firebase', 'Tailwind CSS'],
      posted: '4 days ago',
      logo: '📚',
      remote: true,
    },
  ];

  getJobById(id: number): Job | undefined {
    return this.jobs.find(j => j.id === id);
  }

  searchJobs(query: string, type: string, remote: string): Job[] {
    return this.jobs.filter(j => {
      const matchQuery = !query || j.title.toLowerCase().includes(query.toLowerCase()) ||
        j.company.toLowerCase().includes(query.toLowerCase()) ||
        j.techStack.some(t => t.toLowerCase().includes(query.toLowerCase()));
      const matchType = type === 'All' || j.type === type;
      const matchRemote = remote === 'All' || (remote === 'Remote' ? j.remote : !j.remote);
      return matchQuery && matchType && matchRemote;
    });
  }
}
