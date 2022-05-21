import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import BottomTab from './BottomTab';

const RootStack = () => {

  const token = 1;
  const RenderStack = token === 1 ? AuthStack : BottomTab
  return (
    <NavigationContainer>
      <RenderStack />
    </NavigationContainer>
  );
};

export default RootStack;

