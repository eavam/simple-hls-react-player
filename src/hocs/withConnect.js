// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import * as selectors from '../selectors';

const withConnect = (propsStateNames: Array<string>, actions?: {}) => {
  const stateToProps = propsStateNames.reduce((acc, val) => {
    const method = `get${val[0].toUpperCase()}${val.substr(1)}`;

    if (!selectors[method]) throw new Error(`not have method ${method}`);

    acc[val] = selectors[method];
    return acc;
  }, {});

  const mapStateToProps = createStructuredSelector(stateToProps);
  const mapDispatchToProps = !actions ? actions : dispatch => bindActionCreators(actions, dispatch);

  return connect(mapStateToProps, mapDispatchToProps);
};

export default withConnect;
