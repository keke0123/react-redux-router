
import { combineReducers } from 'redux'

export const firstNamedReducer = (state = 1, action) => state;
export const secondNamedReducer = (state = 2, action) => state;

const barReducer = combineReducers({
    firstNamedReducer,
    secondNamedReducer
})

export default barReducer
