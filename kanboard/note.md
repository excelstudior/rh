#5e13E7 ,#7AD9F5,#BDF2D5,#F6F6F6,#404040,#508Abc

import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './reducers'; // the value from combineReducers

const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

// import the two exports from the last code snippet.
import { persistor, store } from './store';
// import your necessary custom components.
import { RootComponent, LoadingView } from './components';

const App = () => {
  return (
    <Provider store={store}>
      // the loading and persistor props are both required!
      <PersistGate loading={<LoadingView />} persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
};

export default App;