import React, {Component, ReactNode, useContext} from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Drawer from './routes.drawer';
import SignUp from '../pages/SignUp';

import MainContext from '../contexts/MainContext';

export class StackRoute extends Component<any, any> {
  render(): ReactNode {

    const Stack = createStackNavigator();

    return (
      <Stack.Navigator
        headerMode='none'
        initialRouteName='Drawer'
        screenOptions={{ 
          //header: props => <Header /> 
        }}
      >

        <Stack.Screen name='Drawer' component={Drawer} />
        <Stack.Screen name='SignUp' component={SignUp} />

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