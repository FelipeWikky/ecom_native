import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";

import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Products from './pages/Produts';

export default class Routes extends React.Component {
  render() : React.ReactNode {

    const Stack = createStackNavigator();

    return(
      <Stack.Navigator
        headerMode='none'
        initialRouteName='Products'
      >

        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Products' component={Products} />

      </Stack.Navigator>
    );

  }
}