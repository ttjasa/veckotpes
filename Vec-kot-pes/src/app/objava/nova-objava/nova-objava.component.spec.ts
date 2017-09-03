import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaObjavaComponent } from './nova-objava.component';

describe('NovaObjavaComponent', () => {
  let component: NovaObjavaComponent;
  let fixture: ComponentFixture<NovaObjavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaObjavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaObjavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
