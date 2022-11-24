import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTechAndPublisherComponent } from './ad-tech-and-publisher.component';

describe('AdTechAndPublisherComponent', () => {
  let component: AdTechAndPublisherComponent;
  let fixture: ComponentFixture<AdTechAndPublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdTechAndPublisherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdTechAndPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
