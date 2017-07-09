import { PrimeNgPage } from './app.po';

describe('prime-ng App', function() {
  let page: PrimeNgPage;

  beforeEach(() => {
    page = new PrimeNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
