import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingSolutionComponent } from './messaging-solution.component';

describe('MessagingSolutionComponent', () => {
  let component: MessagingSolutionComponent;
  let fixture: ComponentFixture<MessagingSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagingSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagingSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
