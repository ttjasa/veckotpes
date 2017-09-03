import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IscejodomComponent } from './iscejodom.component';

describe('IscejodomComponent', () => {
  let component: IscejodomComponent;
  let fixture: ComponentFixture<IscejodomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IscejodomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IscejodomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
