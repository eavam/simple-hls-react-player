import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Title from '../Title';

const Root = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 2%;
  box-shadow: inset 0px 100px 60px -35px black;
`;

const TopControls = ({ title }) => (
  <Root>
    <Title title={title} />
  </Root>
);

TopControls.propTypes = {
  title: PropTypes.string
};

TopControls.defaultProps = {
  title: ''
};

export default TopControls;
