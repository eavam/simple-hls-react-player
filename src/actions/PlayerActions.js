import { changeVolume, toggleShowControls, timeUpdate } from '../actionTypes';

/**
 * Calculates the value to change the volume
 */
export const volumeMouseMove = (event, dispatch) => {
  const { left, width } = event.target.getBoundingClientRect();

  return windowEvent => {
    // Difference between the current position and the min
    let volumeNew = windowEvent.clientX - left;

    // Check value position in range
    if (volumeNew >= width) volumeNew = width;
    if (volumeNew <= 0) volumeNew = 0;

    // Get percent value
    const volumeProcent = volumeNew / (width / 100);

    // Get float value
    const volumeNumber = volumeProcent / 100;

    dispatch(
      changeVolume({
        volumeNumber,
        volumeNew,
      }),
    );
  };
};

/**
 * Adds event listeners to volume changes
 */
export const handleChangeVolume = event => dispatch => {
  const bindVolumeMouseMove = volumeMouseMove(event, dispatch);

  // If this single click is reacted immediately
  bindVolumeMouseMove(event);

  // Change the volume when moving the mouse
  window.addEventListener('mousemove', bindVolumeMouseMove);

  // If the button is released, deletes the listeners
  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', bindVolumeMouseMove);
  });
};

// global timer
let timer = null;

/**
 * Show/Hide Controls
 */
export const showHideControls = () => (dispatch, getState) => {
  const { showControls } = getState();
  const action = () => dispatch(toggleShowControls());

  clearTimeout(timer);
  if (!showControls) action();
  timer = setTimeout(action, 5000);
};

export const actionTimeUpdate = event => dispatch => {
  const { currentTime } = event.target;

  let minute = Math.floor(currentTime / 60);
  let seconds = Math.floor(currentTime % 60);

  minute = minute < 10 ? `0${minute}` : minute;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  dispatch(timeUpdate(`${minute}:${seconds}`));
};
