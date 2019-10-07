
import { combineReducers } from 'redux'

export const firstNamedReducer = (state = 1, action) => state;
export const secondNamedReducer = (state = 2, action) => state;

const fooReducer = combineReducers({
    firstNamedReducer,
    secondNamedReducer
})

export default fooReducer
