import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
// import Reducer from './reducers';
import signUp from './reducers/signUp'
// Redux Debugger
let composeEnhancer = compose;
if (__DEV__) {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const Reducers = {
  signUp,
};
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['navigation'], // navigation will not be persisted
  // stateReconciler: autoMergeLevel2,
  // timeout: 100000,
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(Reducers),
);
export const Store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(thunk)),
);
export const persistor = persistStore(Store);