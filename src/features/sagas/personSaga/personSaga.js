import { call, takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
// import { fetchData } from "./store";
import {fetchData } from "../../person/personSlice";
import { FETCH_DATA_SAGA} from "../sagaActions";

let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data
  });
};

export function* personDataSaga() {
  try {
    // let result = yield call(() =>
    //   callAPI({ url: "https://5ce2c23be3ced20014d35e3d.mockapi.io/api/todos" })
    // );
    yield put(fetchData([{name:"raushan"}]));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_DATA_SAGA, personDataSaga);
}
