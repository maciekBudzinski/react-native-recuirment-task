import React from 'react';
import { Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import createPersistedStore from './config/store';

const {store, persistor} = createPersistedStore();


const App = () => (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View>
            <Text>Redux persist</Text>
          </View>
        </PersistGate>
      </Provider>
    );

export default App;