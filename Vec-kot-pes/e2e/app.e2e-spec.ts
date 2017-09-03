import { VecKotPesPage } from './app.po';

describe('vec-kot-pes App', () => {
  let page: VecKotPesPage;

  beforeEach(() => {
    page = new VecKotPesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
