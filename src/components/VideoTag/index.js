import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { shouldUpdate } from 'recompose';

const Video = styled.video`
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  background-color: black;
`;

const VideoTag = ({ setVideoEl }) => <Video controls={false} innerRef={setVideoEl} />;

VideoTag.propTypes = {
  setVideoEl: PropTypes.func.isRequired
};

export default shouldUpdate(() => false)(VideoTag);
