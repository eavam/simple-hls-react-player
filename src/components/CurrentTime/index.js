import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CurrentTime = ({ time }) => <Root>{time}</Root>;

CurrentTime.propTypes = {
  time: PropTypes.string
};

CurrentTime.defaultProps = {
  time: '00:00'
};

const Root = styled.div`
  font-size: 19px;
  color: #fff;
`;

export default CurrentTime;
