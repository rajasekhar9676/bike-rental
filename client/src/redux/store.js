import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'
import { bikesReducer } from './reducers/bikeReducer';
import { alertReducer } from './reducers/alertReducer'

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsDenylist, actionsCreators and other options
});

const rootReducer = combineReducers({
    bikesReducer,
    alertReducer
})
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
        // other store enhancers if any
    )
);

export default store