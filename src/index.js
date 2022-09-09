import React from 'react';
import ReactDOM from 'react-dom/client';
//to connect the store with the react app, import:
import { Provider } from 'react-redux';
//import the store as well
import store from './redux/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
