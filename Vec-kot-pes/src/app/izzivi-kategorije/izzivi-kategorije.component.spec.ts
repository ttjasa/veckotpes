import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzziviKategorijeComponent } from './izzivi-kategorije.component';

describe('IzziviKategorijeComponent', () => {
  let component: IzziviKategorijeComponent;
  let fixture: ComponentFixture<IzziviKategorijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzziviKategorijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzziviKategorijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
