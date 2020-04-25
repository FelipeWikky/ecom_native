import React, {Component, ReactNode, useContext} from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Drawer from './routes.drawer';

import Products from '../pages/Products';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import MainContext from '../contexts/MainContext';

import Header from '../components/Header';

export class StackRoute extends Component<any, any> {
  render(): ReactNode {

    const Stack = createStackNavigator();

    return (
      <Stack.Navigator
        headerMode='none'
        initialRouteName='SignIn'
        screenOptions={{ 
          //header: props => <Header /> 
        }}
      >

        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='Products' component={Products} />

      </Stack.Navigator>
    );
  }
}

const Route = () => {
  const { logged } = useContext(MainContext);
  return(
    <StackRoute logged={logged}/>
  );
}
export default Route;