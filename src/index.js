import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { injectGlobal } from 'emotion';
import Player from './components/Player';
import store from './store';

/* eslint-disable */
injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    margin: 0;
    padding: 0;
  }
`;
/* eslint-enable */

const PlayerHLS = ({ url, title }) => (
  <Provider store={store}>
    <Player url={url} title={title} />
  </Provider>
);

PlayerHLS.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
};

PlayerHLS.defaultProps = {
  title: '',
};

export default PlayerHLS;
