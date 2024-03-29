import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { Root } from 'native-base';
import createPersistedStore from './config/store';
import RootNavigator from './config/navigation';
import theme from './style/theme';

const { store, persistor } = createPersistedStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Root>
          <RootNavigator />
        </Root>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
