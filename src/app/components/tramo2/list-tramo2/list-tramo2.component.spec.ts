import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTramo2Component } from './list-tramo2.component';

describe('ListTramo2Component', () => {
  let component: ListTramo2Component;
  let fixture: ComponentFixture<ListTramo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTramo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTramo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
