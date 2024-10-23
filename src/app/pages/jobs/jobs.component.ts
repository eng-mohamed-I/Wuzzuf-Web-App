import { Component } from '@angular/core';
import { JobsHeaderComponent } from './jobs-header/jobs-header.component';
import { TopCompaniesComponent } from './top-companies/top-companies.component';
import { JobsGalleriaComponent } from './jobs-galleria/jobs-galleria.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [JobsHeaderComponent, TopCompaniesComponent, JobsGalleriaComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
})
export class JobsComponent {}
