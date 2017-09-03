import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajIzzivComponent } from './dodaj-izziv.component';

describe('DodajIzzivComponent', () => {
  let component: DodajIzzivComponent;
  let fixture: ComponentFixture<DodajIzzivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajIzzivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajIzzivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
