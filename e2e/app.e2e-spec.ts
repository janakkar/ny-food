import { NyFoodPage } from './app.po';

describe('ny-food App', function() {
  let page: NyFoodPage;

  beforeEach(() => {
    page = new NyFoodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('nyf works!');
  });
});
