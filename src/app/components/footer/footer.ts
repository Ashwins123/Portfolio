import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  year = new Date().getFullYear();

  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Contact', path: '/contact' },
  ];

  socials = [
    { icon: 'GH', label: 'GitHub', url: 'https://github.com/ashwinloren' },
    { icon: 'LI', label: 'LinkedIn', url: 'https://www.linkedin.com/in/ashwin-loren/' },
    { icon: 'FB', label: 'Facebook', url: 'https://www.facebook.com/ashwin_loren' },
    { icon: 'IG', label: 'Instagram', url: 'https://www.instagram.com/ashwin_loren/' },
    { icon: '✉', label: 'Email', url: 'mailto:ashwinloren435s@gmail.com' },
  ];
}
