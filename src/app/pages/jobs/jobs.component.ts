import { Component } from '@angular/core';
import { JobsHeaderComponent } from './jobs-header/jobs-header.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [JobsHeaderComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
})
export class JobsComponent {}
