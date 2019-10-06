import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgtppComponent } from './sgtpp.component';

describe('SgtppComponent', () => {
  let component: SgtppComponent;
  let fixture: ComponentFixture<SgtppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgtppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgtppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
