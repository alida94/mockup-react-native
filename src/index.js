import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import configureStore from '@redux';
import App from './App';
import enUS from '@ant-design/react-native/lib/locale-provider/en_US';

export default () => {
  return (
    <Provider locale={enUS} store={configureStore}>
      <App />
    </Provider>
  );
};
