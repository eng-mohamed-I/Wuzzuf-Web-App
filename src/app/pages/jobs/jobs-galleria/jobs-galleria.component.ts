import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-jobs-galleria',
  standalone: true,
  imports: [GalleriaModule, CarouselModule, ButtonModule],
  templateUrl: './jobs-galleria.component.html',
  styleUrl: './jobs-galleria.component.css',
})
export class JobsGalleriaComponent implements OnInit {
  blogs: any[] = [];

  ngOnInit(): void {
    this.blogs = [
      { itemImageSrc: '6ec80a93880881b89903eb1ccf2194bb.webp' },
      { itemImageSrc: '934da6cedfd8bf68a599053f359dd42e.webp' },
      { itemImageSrc: '237608a871f805033cf305c6911c20e5.webp' },
    ];
  }
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
