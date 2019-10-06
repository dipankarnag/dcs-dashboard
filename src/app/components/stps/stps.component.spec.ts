import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StpsComponent } from './stps.component';

describe('StpsComponent', () => {
  let component: StpsComponent;
  let fixture: ComponentFixture<StpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
