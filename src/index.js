import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/tweets">
    <App />
  </BrowserRouter>
);
