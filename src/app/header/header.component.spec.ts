import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { HeaderHarness } from './testing/header-harness';

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
    const headerHarness = await TestbedHarnessEnvironment.harnessForFixture(fixture, HeaderHarness);
    const titleText = await headerHarness.getTitleText();

    expect(titleText).toBe('kasaharu/try-angular-cdk-testing');
  });
});
