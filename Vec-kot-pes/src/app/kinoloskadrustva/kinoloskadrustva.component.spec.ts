import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinoloskadrustvaComponent } from './kinoloskadrustva.component';

describe('KinoloskadrustvaComponent', () => {
  let component: KinoloskadrustvaComponent;
  let fixture: ComponentFixture<KinoloskadrustvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinoloskadrustvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinoloskadrustvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
