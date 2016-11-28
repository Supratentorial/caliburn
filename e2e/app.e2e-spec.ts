import { CaliburnPage } from './app.po';

describe('caliburn App', function() {
  let page: CaliburnPage;

  beforeEach(() => {
    page = new CaliburnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
