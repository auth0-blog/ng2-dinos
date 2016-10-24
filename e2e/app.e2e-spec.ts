import { Ng2DinosPage } from './app.po';

describe('ng2-dinos App', function() {
  let page: Ng2DinosPage;

  beforeEach(() => {
    page = new Ng2DinosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
