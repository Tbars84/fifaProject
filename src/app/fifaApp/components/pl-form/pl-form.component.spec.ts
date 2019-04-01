import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlFormComponent } from './pl-form.component';

describe('PlFormComponent', () => {
  let component: PlFormComponent;
  let fixture: ComponentFixture<PlFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
