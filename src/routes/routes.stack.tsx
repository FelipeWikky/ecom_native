import React, {Component, ReactNode} from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Drawer from './routes.drawer';

import Header from '../components/Header';

export default class RouteStack extends Component {
  render(): ReactNode {

    const Stack = createStackNavigator();

    return (
      <Stack.Navigator
        headerMode='none'
        initialRouteName='Drawer'
        screenOptions={{ 
          header: props => <Header /> 
        }}
      >

        <Stack.Screen name='Drawer' component={Drawer} />

      </Stack.Navigator>
    );
  }
}