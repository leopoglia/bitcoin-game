import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CincoComponent } from './cinco.component';

describe('CincoComponent', () => {
  let component: CincoComponent;
  let fixture: ComponentFixture<CincoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CincoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
