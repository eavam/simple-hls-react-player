import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import PlayerContainer from './containers/Player';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

const url =
  'https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8';

ReactDOM.render(
  <Provider store={store}>
    <PlayerContainer url={url} />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
