import { ComponentHarness } from '@angular/cdk/testing';

export class TopBarComponentHarness extends ComponentHarness {
  static hostSelector = 'app-top-bar';

  protected getTitleElement = this.locatorFor('h1');

  async getTitleText() {
    const titleElement = await this.getTitleElement();
    return titleElement?.text();
  }
}
