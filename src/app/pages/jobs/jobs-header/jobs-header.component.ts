import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-jobs-header',
  standalone: true,
  imports: [],
  templateUrl: './jobs-header.component.html',
  styleUrl: './jobs-header.component.css',
})
export class JobsHeaderComponent implements OnInit {
  searchPlaceholder: string[] = [
    'Search Jobs (e.g. Work From Home)',
    'Search Jobs (e.g. Senior PHP developer)',
    'Search Jobs (e.g. Sales in Maadi)',
  ];
  counter: number = 0;

  constructor(@Inject(PLATFORM_ID) private _paltformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this._paltformId)) {
      this.displayCounter();
    }
  }

  displayCounter() {
    setInterval(() => {
      this.incrementCounter();
    }, 5000);
  }

  incrementCounter() {
    this.counter++;
    this.counter === this.searchPlaceholder.length ? (this.counter = 0) : '';
  }
}
