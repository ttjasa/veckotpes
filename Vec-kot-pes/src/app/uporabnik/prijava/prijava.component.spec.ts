import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijavaComponent } from './prijava.component';

describe('PrijavaComponent', () => {
  let component: PrijavaComponent;
  let fixture: ComponentFixture<PrijavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrijavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrijavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
