import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesecondComponent } from './homesecond.component';

describe('HomesecondComponent', () => {
  let component: HomesecondComponent;
  let fixture: ComponentFixture<HomesecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomesecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomesecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
