import { EleWebsocketPage } from './app.po';

describe('ele-websocket App', function() {
  let page: EleWebsocketPage;

  beforeEach(() => {
    page = new EleWebsocketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
