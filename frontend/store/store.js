 import { createStore, applyMiddleware, compose } from 'redux'; 
 import thunk from '../middleware/thunk';
 import logger  from 'redux-logger';

 import rootReducer from '../reducers/root_reducer';

 const configureStore = ( preloadedState= {}) => (
     createStore(
         rootReducer,
         preloadedState,
         compose(
             applyMiddleware(thunk, logger),
             window.devToolsExtension ? window.devToolsExtension() : f => f
         )
     )
 );
 

 export default configureStore;