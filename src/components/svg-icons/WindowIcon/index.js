import React from 'react';
import { pure } from 'recompose';
import SvgIcon from '../../SvgIcon';

const WindowIcon = () => (
  <SvgIcon viewBox="0 0 25 25">
    <path fill="#fff" d="M0 25h25V0H0zM2 2h21v21H2zm1.58 1.58" />
    <path
      fill="#fff"
      d="M5.91 16.14H4.46v4.36h4.36V19H5.91zm0 0M5.91 6h2.91V4.5H4.46v4.37h1.45zm0 0M19 19h-2.91v1.5h4.36v-4.36H19zm0 0M16.09 4.5V6H19v2.87h1.46V4.5zm0 0"
    />
  </SvgIcon>
);

export default pure(WindowIcon);
