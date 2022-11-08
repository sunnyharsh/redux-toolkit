import { takeLatest, all } from "redux-saga/effects";

import { FETCH_DATA_SAGA } from "./sagaActions";
import { personDataSaga } from "./personSaga/personSaga";

function* sagas() {
  yield all([takeLatest(FETCH_DATA_SAGA, personDataSaga)]);
}

export default sagas;