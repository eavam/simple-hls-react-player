import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const enhancers = [];
const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  const { __REDUX_DEVTOOLS_EXTENSION__ } = window;

  if (typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function') {
    enhancers.push(__REDUX_DEVTOOLS_EXTENSION__());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(rootReducer, composedEnhancers);
