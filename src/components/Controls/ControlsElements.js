import styled from 'react-emotion';
import { flexContainer, flexLeft, flexRight } from '../styledComponens';

export const Root = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Title = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 2%;
  box-shadow: inset 0px 100px 60px -35px black;
  color: #fff;
  font-size: 30px;
`;

export const BottomBar = styled('div')`
  ${flexContainer};
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100px;
  align-items: center;
  padding: 0 2%;
  box-shadow: inset 0px -100px 60px -35px black;
`;

export const LeftColumn = styled('div')`
  ${flexLeft};
`;

export const RightColumn = styled('div')`
  ${flexRight};
`;
