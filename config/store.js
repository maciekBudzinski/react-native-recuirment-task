import { createStore } from 'redux';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import rootReducer from './rootReducer';

// eslint-disable-next-line
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();



const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, devtools)
  const persistor = persistStore(store);
  
  return {
    store,
    persistor
  }
}
