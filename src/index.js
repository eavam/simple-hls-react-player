import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import PlayerContainer from './containers/PlayerContainer';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <PlayerContainer />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
