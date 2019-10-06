import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BktppComponent } from './bktpp.component';

describe('BktppComponent', () => {
  let component: BktppComponent;
  let fixture: ComponentFixture<BktppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BktppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BktppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
