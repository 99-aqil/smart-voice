import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalEngagementsComponent } from './digital-engagements.component';

describe('DigitalEngagementsComponent', () => {
  let component: DigitalEngagementsComponent;
  let fixture: ComponentFixture<DigitalEngagementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalEngagementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalEngagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
