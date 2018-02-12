import { injectGlobal } from 'styled-components';
import PlayerContainer from './containers/PlayerContainer';

// eslint-disable-next-line
injectGlobal`
  body {
    font-family: 'Ubuntu', sans-serif;
  }
`;
export default PlayerContainer;
