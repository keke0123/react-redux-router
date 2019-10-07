
import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
// import {ADD_TODO} from "../../../store/actions";

export default function *fooSaga() {
    yield all([
        takeEvery("FOO_A", fooASaga),
        takeEvery("FOO_B", fooASaga),
    ]);
}

function* fooASaga(action) {
    console.warn('action', action);
    // yield put({type: ADD_TODO, text: 'show complete'});
}
