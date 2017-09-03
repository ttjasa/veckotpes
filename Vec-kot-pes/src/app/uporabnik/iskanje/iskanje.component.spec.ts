import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IskanjeComponent } from './iskanje.component';

describe('IskanjeComponent', () => {
  let component: IskanjeComponent;
  let fixture: ComponentFixture<IskanjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IskanjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IskanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
