import { ComponentHarness } from '@angular/cdk/testing';

export class HeaderHarness extends ComponentHarness {
  static hostSelector = 'app-header';

  protected getTitleElement = this.locatorFor('h1');

  async getTitleText() {
    const titleElement = await this.getTitleElement();
    return titleElement?.text();
  }
}
