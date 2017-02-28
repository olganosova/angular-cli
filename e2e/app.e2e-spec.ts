import { WebsocketProjectPage } from './app.po';

describe('websocket-project App', () => {
  let page: WebsocketProjectPage;

  beforeEach(() => {
    page = new WebsocketProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
