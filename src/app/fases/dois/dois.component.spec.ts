import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoisComponent } from './dois.component';

describe('DoisComponent', () => {
  let component: DoisComponent;
  let fixture: ComponentFixture<DoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
