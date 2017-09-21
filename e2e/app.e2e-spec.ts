import { RaProject4Page } from './app.po';

describe('ra-project4 App', () => {
  let page: RaProject4Page;

  beforeEach(() => {
    page = new RaProject4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
