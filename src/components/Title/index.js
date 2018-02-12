import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = ({ title }) => <Root>{title}</Root>;

Title.propTypes = {
  title: PropTypes.string
};

Title.defaultProps = {
  title: ''
};

const Root = styled.div`
  color: #fff;
  font-size: 30px;
`;

export default Title;
