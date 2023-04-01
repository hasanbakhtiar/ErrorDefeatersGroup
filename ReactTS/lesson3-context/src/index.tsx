import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import { ProductProvider } from './context/ProductContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <ProductProvider>
   <App />
   </ProductProvider>
  </React.StrictMode>
);

