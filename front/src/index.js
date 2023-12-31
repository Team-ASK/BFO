// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // 1. Provider를 import합니다.
import store from './redux/config/store'; // Redux 스토어를 import합니다.
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/config/store';
import GlobalStyles from './globalStyles';
import "./components/Fonts/Font.css";

// 1. ReactDOM.render 대신 createRoot로 변경
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
  
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

reportWebVitals();