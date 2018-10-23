import { createStore } from 'redux';

import index from './reducers/index';
//import { index } from './reducers/index';

export default createStore(index);


/*
import { createStore } from 'redux';

import index from './reducers/index';*/

//const store = createStore(
//    index, /* preloadedState, */
//    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//);

//export default { store };
