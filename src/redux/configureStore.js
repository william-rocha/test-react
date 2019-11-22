import { createStore, combineReducers } from 'redux';
import auth from './auth';
import curso from "./hooks/curso"
// Exemplo com redux
const reducers = combineReducers({
	auth,
	curso
});

const store = createStore(reducers);

export default store;
