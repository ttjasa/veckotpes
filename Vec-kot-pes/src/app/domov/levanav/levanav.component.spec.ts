import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevanavComponent } from './levanav.component';

describe('LevanavComponent', () => {
  let component: LevanavComponent;
  let fixture: ComponentFixture<LevanavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevanavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevanavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
