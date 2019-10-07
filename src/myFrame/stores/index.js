import { combineReducers } from 'redux'

import fooReducer from "./foo";
import barReducer from "./bar";

const rootReducer = combineReducers({
    fooReducer,
    barReducer
})

export default rootReducer
