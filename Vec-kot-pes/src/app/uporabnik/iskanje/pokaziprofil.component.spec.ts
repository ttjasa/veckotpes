import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokaziprofilComponent } from './pokaziprofil.component';

describe('PokaziprofilComponent', () => {
  let component: PokaziprofilComponent;
  let fixture: ComponentFixture<PokaziprofilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokaziprofilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokaziprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
