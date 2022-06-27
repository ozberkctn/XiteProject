import {mswServer} from './api-mocks/msw-server';

beforeAll(() => {
  mswServer.listen({
    onUnhandledRequest(req) {
      console.log(
        'Found an unhandled %s request to %s',
        req.method,
        req.url.href,
      );
    },
  });
});
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());

export {};
