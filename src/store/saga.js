import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {ADD_TODO , SET_VISIBILITY_FILTER} from './actions';

function* mySaga() {
    yield takeEvery(ADD_TODO, testEveryAdd);
    yield takeLatest(ADD_TODO, testLatestAdd);
    yield takeEvery(SET_VISIBILITY_FILTER, testAddTodo)
}

// function* mySaga() {
// }

// function* test(action) {
//     console.log()
// }

function* testAddTodo(action) {
    console.warn('action', action);
    yield put({type: ADD_TODO, text: 'show complete'});
}

function* testEveryAdd(action) {
    // console.log('add something');
    // console.log('action', action);
    // yield put({type: ADD_TODO, text: 'middleware interceptor'});
}
function* testLatestAdd(action) {
    // console.log('add latest');
    // console.log('action', action);
}

export default mySaga;

// multiple saga 사용할때 아래와 같이 사용하면 될거 같다. / fooSagas 는 export default 된 함수
// export default function* rootSaga() {
//     yield all([
//         fooSagas,
//         barSagas
//     ])
// }
