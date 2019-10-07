import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import fooSaga from "./foo";
import barSaga from './bar'

export default function* rootSaga() {
    yield all([
        fooSaga,
        barSaga
    ])
}
