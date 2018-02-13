import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Root = styled('div')`
  font-size: 19px;
  color: #fff;
`;

const CurrentTime = ({ time }) => <Root>{time}</Root>;

CurrentTime.propTypes = {
  time: PropTypes.string,
};

CurrentTime.defaultProps = {
  time: '00:00',
};

export default CurrentTime;
