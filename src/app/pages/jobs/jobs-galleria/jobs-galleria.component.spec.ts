import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsGalleriaComponent } from './jobs-galleria.component';

describe('JobsGalleriaComponent', () => {
  let component: JobsGalleriaComponent;
  let fixture: ComponentFixture<JobsGalleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsGalleriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsGalleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
