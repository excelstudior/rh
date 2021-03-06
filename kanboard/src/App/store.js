import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import reducers from './reducer';
import thunk from 'redux-thunk';
import tokenMiddleware from '../Util/Api/tokenMiddleware';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk,tokenMiddleware,apiMiddleware),
  // other store enhancers if any
);
const store = createStore(reducers, enhancer);
export default store;