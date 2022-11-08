
import {
  configureStore
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// Saga import here
import saga from "../features/sagas/index";

//Reducers import here
import counterReducer from "../features/counter/counterSlice";
import personReducer from "../features/person/personSlice"


let sagaMiddleware = createSagaMiddleware();
const middleware = (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

 const store = configureStore({
  reducer: {
    counterName: counterReducer,
    personData:personReducer
  },
  middleware
})
sagaMiddleware.run(saga);
export default store;