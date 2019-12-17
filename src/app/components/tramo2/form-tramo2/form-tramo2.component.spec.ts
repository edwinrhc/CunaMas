import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTramo2Component } from './form-tramo2.component';

describe('FormTramo2Component', () => {
  let component: FormTramo2Component;
  let fixture: ComponentFixture<FormTramo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTramo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTramo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
