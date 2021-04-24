import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import en from './lang/en.json';
import es from './lang/es.json';

import App from './App';

import store from './store/store';
import reportWebVitals from './reportWebVitals';

const translations = (() => {
  switch ('en') {
    // case 'es': return es;
    case 'en':
    default: return en;
  }
})();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProvider locale={navigator.language.split('-')[0]} messages={translations}>
        <App />
      </IntlProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
