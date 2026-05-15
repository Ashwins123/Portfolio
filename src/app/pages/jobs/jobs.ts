import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PortfolioDataService, Job } from '../../services/portfolio-data';

@Component({
  selector: 'app-jobs',
  imports: [FormsModule, RouterLink],
  templateUrl: './jobs.html',
  styleUrl: './jobs.scss',
})
export class Jobs implements OnInit {
  searchQuery = '';
  selectedType = 'All';
  selectedRemote = 'All';
  filteredJobs: Job[] = [];

  savedJobs = new Set<number>();

  typeFilters = ['All', 'Full-time', 'Part-time', 'Contract'];
  remoteFilters = ['All', 'Remote', 'On-site'];

  constructor(private data: PortfolioDataService) {}

  ngOnInit() {
    this.filterJobs();
  }

  filterJobs() {
    this.filteredJobs = this.data.searchJobs(this.searchQuery, this.selectedType, this.selectedRemote);
  }

  toggleSave(id: number, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.savedJobs.has(id)) {
      this.savedJobs.delete(id);
    } else {
      this.savedJobs.add(id);
    }
  }

  isSaved(id: number) { return this.savedJobs.has(id); }
}
