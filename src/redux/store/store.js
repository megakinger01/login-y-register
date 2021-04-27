import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducer/authReducer';
import { uiReducer } from '../reducer/uiReducer';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducers = combineReducers({

    auth: authReducer,
    ui: uiReducer
    
})

export const store = createStore(
    reducers,composeEnhancers(
        applyMiddleware( thunk )
    )
)