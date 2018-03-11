import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubreddisComponent } from './subreddis.component';

describe('SubreddisComponent', () => {
  let component: SubreddisComponent;
  let fixture: ComponentFixture<SubreddisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubreddisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubreddisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
