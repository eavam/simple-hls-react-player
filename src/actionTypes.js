import { createAction } from 'redux-act';

export const toggleMute = createAction('toggleMute');
export const togglePause = createAction('togglePause');
export const toggleFullscreen = createAction('toggleFullscreen');
export const toggleShowControls = createAction('toggleShowControls');

export const timeUpdate = createAction('timeUpdate', time => ({ time }));
export const changeVolume = createAction('changeVolume', volume => ({
  volume,
}));
