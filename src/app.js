import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';
import Form from './components/form';

import storeFactory from './store';

const store = storeFactory();

window.React = React;
window.store = store;

render(
  <Provider store={store}>
    <Form />
  </Provider>,
  document.getElementById('app'),
);
