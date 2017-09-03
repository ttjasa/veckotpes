import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokaziIzzivComponent } from './pokazi-izziv.component';

describe('PokaziIzzivComponent', () => {
  let component: PokaziIzzivComponent;
  let fixture: ComponentFixture<PokaziIzzivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokaziIzzivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokaziIzzivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
