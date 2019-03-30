import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifaDashboardComponent } from './fifa-dashboard.component';

describe('FifaDashboardComponent', () => {
  let component: FifaDashboardComponent;
  let fixture: ComponentFixture<FifaDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
