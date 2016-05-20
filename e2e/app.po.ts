export class ServiceWorkerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('service-worker-app h1')).getText();
  }
}
