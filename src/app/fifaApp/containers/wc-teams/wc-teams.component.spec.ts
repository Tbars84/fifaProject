import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcTeamsComponent } from './wc-teams.component';

describe('WcTeamsComponent', () => {
  let component: WcTeamsComponent;
  let fixture: ComponentFixture<WcTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
