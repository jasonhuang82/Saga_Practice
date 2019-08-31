import { put, takeEvery, all } from 'redux-saga/effects'

const delay = time => new Promise(resolve => {
    setTimeout(resolve, time);
});
function* addTodo(action) {
    yield delay(1000)
    yield put({ type: "ADD_TODO", payload: {
        text: action.payload.text,
    } })
}


function* watchAddTodo() {
    yield takeEvery('ADD_TODO_SAGA', addTodo)
}


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        // helloSaga(),
        watchAddTodo()
    ])
}