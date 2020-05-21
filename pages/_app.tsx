import React, { FunctionComponent } from 'react';
import { AppProps } from 'next/app';

/**
 * Determines if we are running on server or in client.
 * @return {boolean} true if running on server
 */
const getIsServerRendered = () => typeof window === 'undefined';

/**
 * Accessibility tool - outputs to devtools console on dev only and client-side only.
 * @see https://github.com/dequelabs/react-axe
 */
if (process.env.NODE_ENV !== 'production' && !getIsServerRendered()) {
  const ReactDOM = require('react-dom');
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
