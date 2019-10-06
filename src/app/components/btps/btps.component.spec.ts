import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtpsComponent } from './btps.component';

describe('BtpsComponent', () => {
  let component: BtpsComponent;
  let fixture: ComponentFixture<BtpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
