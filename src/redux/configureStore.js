import { createStore, combineReducers, applyMiddleware } from 'redux';
import auth from './auth';
import curso from "./hooks/curso"
// Exemplo com redux
import thunk from 'redux-thunk';


const enhancers = applyMiddleware(thunk) && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const reducers = combineReducers({
	auth,
	curso
});

const store = createStore(reducers, enhancers);

export default store;
