import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgPatternComponent } from './msg-pattern.component';

describe('MsgPatternComponent', () => {
  let component: MsgPatternComponent;
  let fixture: ComponentFixture<MsgPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsgPatternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
