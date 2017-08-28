import { RandomFacePage } from './app.po';

describe('random-face App', () => {
  let page: RandomFacePage;

  beforeEach(() => {
    page = new RandomFacePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
