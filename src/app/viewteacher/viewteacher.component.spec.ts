import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewteacherComponent } from './viewteacher.component';

describe('ViewteacherComponent', () => {
  let component: ViewteacherComponent;
  let fixture: ComponentFixture<ViewteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewteacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
