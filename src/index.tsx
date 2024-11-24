import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import AppRoot from './container/app-root';

const root = createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <AppRoot />
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();