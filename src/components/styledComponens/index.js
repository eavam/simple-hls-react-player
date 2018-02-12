import { css } from 'react-emotion';

export const flexCommon = css`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const flexContainer = css`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const flexLeft = css`
  ${flexCommon};
  justify-content: flex-start;
`;

export const flexRight = css`
  ${flexCommon};
  justify-content: flex-end;
`;

export const baseIcon = css`
  width: 25px;
  height: 25px;
  padding: 5px;
  cursor: pointer;
  box-sizing: border-box;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;
