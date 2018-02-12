import React from 'react';
import { pure } from 'recompose';

const FullIcon = () => (
  <svg viewBox="0 0 25 25">
    <path fill="#fff" d="M4.54 20.5h16v-16h-16zM6.83 6.79h11.43v11.42H6.83zm0 0" />
    <path
      fill="#fff"
      d="M2.28 18.18H0V25h6.82v-2.28H2.28zm0 0M2.28 2.28h4.54V0H0v6.82h2.28zm0 0M22.72 22.72h-4.54V25H25v-6.82h-2.28zm0 0M18.18 0v2.28h4.54v4.54H25V0zm0 0"
    />
  </svg>
);

export default pure(FullIcon);
