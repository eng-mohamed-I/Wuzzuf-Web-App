import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-top-companies',
  standalone: true,
  imports: [CarouselModule, ButtonModule],
  templateUrl: './top-companies.component.html',
  styleUrl: './top-companies.component.css',
})
export class TopCompaniesComponent {
  logos: any[] = [
    { itemImageSrc: 'featured-logo-403-1655823469.webp' },
    { itemImageSrc: 'featured-logo-571-1718279635.webp' },
    { itemImageSrc: 'featured-logo-967-1716455519.webp' },
    { itemImageSrc: 'featured-logo-1495-1552735402.webp' },
    { itemImageSrc: 'featured-logo-1764-1638100388.webp' },
    { itemImageSrc: 'featured-logo-2029-1618136174.webp' },
    { itemImageSrc: 'featured-logo-2790-1677064807.webp' },
    { itemImageSrc: 'featured-logo-2920-1507115044.webp' },
    { itemImageSrc: 'featured-logo-4407-1584538711.webp' },
    { itemImageSrc: 'featured-logo-4638-1595757998.webp' },
    { itemImageSrc: 'featured-logo-7132-1729594680.webp' },
    { itemImageSrc: 'featured-logo-7185-1641203881.webp' },
    { itemImageSrc: 'featured-logo-7249-1530538413.webp' },
    { itemImageSrc: 'featured-logo-7358-1594902953.webp' },
    { itemImageSrc: 'featured-logo-7552-1665495531.webp' },
    
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
