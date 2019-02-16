import {createStore, applyMiddleware,compose} from '../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers'

const initialState={};

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : (function(f){return f;})
    )
);

export default store;