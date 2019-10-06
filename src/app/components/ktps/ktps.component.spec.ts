import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KtpsComponent } from './ktps.component';

describe('KtpsComponent', () => {
  let component: KtpsComponent;
  let fixture: ComponentFixture<KtpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KtpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KtpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
