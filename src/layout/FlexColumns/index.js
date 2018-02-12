import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const FlexColumns = ({ children }) => <Root>{children}</Root>;

FlexColumns.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
};

const flexCommon = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Root = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const LeftColumn = flexCommon.extend`
  justify-content: flex-start;
`;

export const RightColumn = flexCommon.extend`
  justify-content: flex-end;
`;
