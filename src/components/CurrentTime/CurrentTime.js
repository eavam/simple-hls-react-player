// @flow
import React from 'react';
import styled from 'react-emotion';
import withConnect from '../../hocs/withConnect';

const Root = styled('div')`
  font-size: 19px;
  color: #fff;
`;

export const CurrentTime = ({ time }: { time?: string }) => <Root>{time}</Root>;

CurrentTime.defaultProps = {
  time: '00:00',
};

export default withConnect(['time'])(CurrentTime);
