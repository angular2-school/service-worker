import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ServiceWorkerAppComponent } from '../app/service-worker.component';

beforeEachProviders(() => [ServiceWorkerAppComponent]);

describe('App: ServiceWorker', () => {
  it('should create the app',
      inject([ServiceWorkerAppComponent], (app: ServiceWorkerAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'service-worker works!\'',
      inject([ServiceWorkerAppComponent], (app: ServiceWorkerAppComponent) => {
    expect(app.title).toEqual('service-worker works!');
  }));
});
