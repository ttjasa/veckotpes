import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsipodatkiComponent } from './psipodatki.component';

describe('PsipodatkiComponent', () => {
  let component: PsipodatkiComponent;
  let fixture: ComponentFixture<PsipodatkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsipodatkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsipodatkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
