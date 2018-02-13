/* import React from 'react';
import styled from 'react-emotion'; */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import Controls from '../../components/Controls';
import {
  getTitle,
  getTypeActionPlayer,
  getVolume,
  getMuted,
  getTime,
  getFullscreen
} from '../../selectors';
import { handleChangeVolume } from '../../actions/PlayerActions';
import { togglePause, toggleMute, toggleFullscreen } from '../../actionTypes';

const mapStateToProps = createStructuredSelector({
  title: getTitle,
  isFullscreen: getFullscreen,
  typeActionPlayer: getTypeActionPlayer,
  volume: getVolume,
  muted: getMuted,
  time: getTime
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ togglePause, toggleMute, toggleFullscreen, handleChangeVolume }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
