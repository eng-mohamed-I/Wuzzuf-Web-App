import { Component } from '@angular/core';
import { JobsHeaderComponent } from './jobs-header/jobs-header.component';
import { TopCompaniesComponent } from './top-companies/top-companies.component';
import { JobsGalleriaComponent } from './jobs-galleria/jobs-galleria.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { LatestJobsComponent } from './latest-jobs/latest-jobs.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [
    JobsHeaderComponent,
    TopCompaniesComponent,
    JobsGalleriaComponent,
    NavbarComponent,
    FooterComponent,
    LatestJobsComponent,
  ],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
})
export class JobsComponent {}
