import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { typography } from './config/typography';
import './styles.css';
import 'katex/dist/katex.min.css';

document.documentElement.style.setProperty('--font-family', typography.fontFamily);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
