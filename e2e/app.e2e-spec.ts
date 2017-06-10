import { Jun10Page } from './app.po';

describe('jun10 App', () => {
  let page: Jun10Page;

  beforeEach(() => {
    page = new Jun10Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
