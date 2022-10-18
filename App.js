import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import Index from './src/Index';
import RootStack from './src/Navigations/Index';
import { store } from './src/Redux/Store/Index';

const App = () => {

  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
