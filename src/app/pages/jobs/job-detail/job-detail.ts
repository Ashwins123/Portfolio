import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PortfolioDataService, Job } from '../../../services/portfolio-data';

@Component({
  selector: 'app-job-detail',
  imports: [RouterLink],
  templateUrl: './job-detail.html',
  styleUrl: './job-detail.scss',
})
export class JobDetail implements OnInit {
  job: Job | undefined;
  applied = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: PortfolioDataService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.job = this.data.getJobById(id);
    if (!this.job) this.router.navigate(['/jobs']);
  }

  apply() {
    this.applied = true;
  }
}
