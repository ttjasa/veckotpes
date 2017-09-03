import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokaziObjavoComponent } from './pokazi-objavo.component';

describe('PokaziObjavoComponent', () => {
  let component: PokaziObjavoComponent;
  let fixture: ComponentFixture<PokaziObjavoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokaziObjavoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokaziObjavoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
