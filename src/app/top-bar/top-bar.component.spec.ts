import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TopBarComponentHarness } from './testing/top-bar.component.harness';
import { TopBarComponent } from './top-bar.component';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopBarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('', async () => {
    const topBarComponentHarness = await TestbedHarnessEnvironment.harnessForFixture(fixture, TopBarComponentHarness);
    const titleText = await topBarComponentHarness.getTitleText();

    expect(titleText).toBe('My Store');
  });
});
