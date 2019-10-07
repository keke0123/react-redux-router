
import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
// import {ADD_TODO} from "../../../store/actions";

export default function *barSaga() {
    yield all([
        takeEvery("BAR_A", barASaga),
        takeEvery("BAR_B", barASaga),
    ]);
}

function* barASaga(action) {
    console.warn('action', action);
    // yield put({type: ADD_TODO, text: 'show complete'});
}
