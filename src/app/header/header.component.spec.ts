import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { HeaderComponentHarness } from './testing/header.component.harness';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Heading text が kasaharu/try-angular-cdk-testing であること', async () => {
    const headerComponentHarness = await TestbedHarnessEnvironment.harnessForFixture(fixture, HeaderComponentHarness);
    const titleText = await headerComponentHarness.getTitleText();

    expect(titleText).toBe('kasaharu/try-angular-cdk-testing');
  });
});
