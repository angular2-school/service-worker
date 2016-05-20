import { ServiceWorkerPage } from './app.po';

describe('service-worker App', function() {
  let page: ServiceWorkerPage;

  beforeEach(() => {
    page = new ServiceWorkerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('service-worker works!');
  });
});
