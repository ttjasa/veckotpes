import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcenipasmoComponent } from './ocenipasmo.component';

describe('OcenipasmoComponent', () => {
  let component: OcenipasmoComponent;
  let fixture: ComponentFixture<OcenipasmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcenipasmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcenipasmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
