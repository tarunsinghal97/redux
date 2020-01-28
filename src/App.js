import React from 'react';
import {createStore, compose} from 'redux'
import {Provider} from 'react-redux';
import reducers from './Reducers';
import DisplayContainer from './container/DisplayContainer';
// import { applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// );
const store = createStore(reducers, /* preloadedState, */ devToolsEnhancer(
  // options like actionSanitizer, stateSanitizer
));;
// const store = createStore(reducers +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store = {store}>
      <DisplayContainer/>
    </Provider>
  );
}

export default App;
