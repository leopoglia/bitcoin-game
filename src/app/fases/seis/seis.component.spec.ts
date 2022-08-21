import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeisComponent } from './seis.component';

describe('SeisComponent', () => {
  let component: SeisComponent;
  let fixture: ComponentFixture<SeisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
