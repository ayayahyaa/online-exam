import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSummryComponent } from './exam-summry.component';

describe('ExamSummryComponent', () => {
  let component: ExamSummryComponent;
  let fixture: ComponentFixture<ExamSummryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamSummryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamSummryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
