import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import createCache from '@emotion/cache';

import App from './app/app';
import { CacheProvider } from '@emotion/react';
import { getNonceValue } from './helper';

export const myCache = createCache({
  key: 'my-prefix-key',
  nonce: getNonceValue() || '',
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <CacheProvider value={myCache}>
      <App />
    </CacheProvider>
  </StrictMode>
);
