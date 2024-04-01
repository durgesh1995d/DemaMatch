import {persistStore, persistReducer} from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import {composeWithDevTools} from '@redux-devtools/extension';
import {applyMiddleware, createStore} from 'redux';
import ExpoFileSystemStorage from 'redux-persist-expo-filesystem';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage: ExpoFileSystemStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: [],
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  pReducer,
  __DEV__
    ? composeWithDevTools(applyMiddleware(ReduxThunk))
    : applyMiddleware(ReduxThunk),
);

let persistors = persistStore(store);

export {persistors};
export default store;
