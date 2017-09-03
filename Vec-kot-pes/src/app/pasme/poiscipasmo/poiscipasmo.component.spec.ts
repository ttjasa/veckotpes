import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiscipasmoComponent } from './poiscipasmo.component';

describe('PoiscipasmoComponent', () => {
  let component: PoiscipasmoComponent;
  let fixture: ComponentFixture<PoiscipasmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoiscipasmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoiscipasmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
