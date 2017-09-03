import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AktualnoComponent } from './aktualno.component';

describe('AktualnoComponent', () => {
  let component: AktualnoComponent;
  let fixture: ComponentFixture<AktualnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AktualnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AktualnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
