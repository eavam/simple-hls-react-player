// @flow
import React from 'react';
import styled from 'react-emotion';

const Root = styled('div')`
  font-size: 19px;
  color: #fff;
`;

const CurrentTime = ({ time }: { time?: string }) => <Root>{time}</Root>;

CurrentTime.defaultProps = {
  time: '00:00',
};

export default CurrentTime;
