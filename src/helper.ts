export const getNonceValue = () =>
  document.querySelector('meta[name="CSP-NONCE"]')?.getAttribute('content');
