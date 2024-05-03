import { InfomoneyUiPage } from './app.po';

describe('infomoney-ui App', () => {
  let page: InfomoneyUiPage;

  beforeEach(() => {
    page = new InfomoneyUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
