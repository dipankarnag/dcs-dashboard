import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantDataComponent } from './plant-data.component';

describe('PlantDataComponent', () => {
  let component: PlantDataComponent;
  let fixture: ComponentFixture<PlantDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
