import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { Global } from 'Styles/Global';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <ThemeProvider>
  <App />
  // <Global />
  // </ThemeProvider>
);
