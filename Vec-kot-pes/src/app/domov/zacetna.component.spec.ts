import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZacetnaComponent } from './zacetna.component';

describe('ZacetnaComponent', () => {
  let component: ZacetnaComponent;
  let fixture: ComponentFixture<ZacetnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZacetnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZacetnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
