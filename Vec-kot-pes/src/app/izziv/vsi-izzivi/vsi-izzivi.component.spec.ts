import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsiIzziviComponent } from './vsi-izzivi.component';

describe('VsiIzziviComponent', () => {
  let component: VsiIzziviComponent;
  let fixture: ComponentFixture<VsiIzziviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsiIzziviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsiIzziviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
