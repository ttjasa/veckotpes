import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajpseComponent } from './dodajpse.component';

describe('DodajpseComponent', () => {
  let component: DodajpseComponent;
  let fixture: ComponentFixture<DodajpseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajpseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajpseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
