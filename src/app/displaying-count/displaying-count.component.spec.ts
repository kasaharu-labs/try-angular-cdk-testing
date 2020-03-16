import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayingCountComponent } from './displaying-count.component';

describe('DisplayingCountComponent', () => {
  let component: DisplayingCountComponent;
  let fixture: ComponentFixture<DisplayingCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayingCountComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayingCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
