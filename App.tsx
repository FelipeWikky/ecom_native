import 'react-native-gesture-handler';
import 'intl';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Routes from './src/routes/index';

import {MainProvider} from './src/contexts/MainContext';

export default function App() {
  return (
    <NavigationContainer>

      <MainProvider>

        <Routes />
        
      </MainProvider>

    </NavigationContainer>
  );
}

