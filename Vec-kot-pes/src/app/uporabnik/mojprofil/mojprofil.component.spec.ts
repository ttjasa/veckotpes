import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojprofilComponent } from './mojprofil.component';

describe('MojprofilComponent', () => {
  let component: MojprofilComponent;
  let fixture: ComponentFixture<MojprofilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojprofilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
