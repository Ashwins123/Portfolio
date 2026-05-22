import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [DatePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  today = new Date();

  metrics = [
    { icon: '👁', label: 'Profile Views', value: '1,248', change: '12% this week', positive: true, gradient: 'linear-gradient(135deg,#7c3aed,#2563eb)' },
    { icon: '📄', label: 'Resume Downloads', value: '89', change: '8% this week', positive: true, gradient: 'linear-gradient(135deg,#2563eb,#06b6d4)' },
    { icon: '💬', label: 'Messages', value: '24', change: '3 new today', positive: true, gradient: 'linear-gradient(135deg,#06b6d4,#4ade80)' },
    { icon: '💼', label: 'Applications', value: '12', change: '2 pending', positive: false, gradient: 'linear-gradient(135deg,#a855f7,#ec4899)' },
  ];

  weeklyData = [
    { day: 'Mon', percent: 60 }, { day: 'Tue', percent: 75 },
    { day: 'Wed', percent: 90 }, { day: 'Thu', percent: 65 },
    { day: 'Fri', percent: 85 }, { day: 'Sat', percent: 45 },
    { day: 'Sun', percent: 55 },
  ];

  recentMessages = [
    { name: 'Priya S.', preview: 'Interested in hiring you for a React…', time: '2h ago' },
    { name: 'Ravi K.', preview: 'Great portfolio! Can we connect?', time: '5h ago' },
    { name: 'Sarah M.', preview: 'We have an Angular role at our startup…', time: '1d ago' },
  ];

  activities = [
    { icon: '👁', text: 'Your profile was viewed 12 times', time: '2 hours ago' },
    { icon: '⬇', text: 'Resume downloaded by a recruiter', time: '4 hours ago' },
    { icon: '💬', text: 'New message from Priya S.', time: '5 hours ago' },
    { icon: '🚀', text: 'lorenfolio project starred on GitHub', time: '1 day ago' },
    { icon: '💼', text: 'Applied to Angular Developer at TechCorp', time: '2 days ago' },
  ];

  jobApplications = [
    { role: 'Senior Angular Developer', company: 'TechCorp India', status: 'Interview', statusClass: 'blue' },
    { role: 'Frontend Engineer', company: 'StartupXYZ', status: 'Applied', statusClass: 'purple' },
    { role: 'UI Developer', company: 'MNC Solutions', status: 'Shortlisted', statusClass: 'green' },
    { role: 'Angular Consultant', company: 'Freelance', status: 'Negotiating', statusClass: 'cyan' },
  ];
}
