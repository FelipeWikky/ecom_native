import React, { Component, ReactNode, useContext } from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import Products from '../pages/Produts';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import MainContext from '../contexts/MainContext';

export class DrawerRoute extends Component<any, any> {
  render(): ReactNode {

    const Drawer = createDrawerNavigator();

    return (
      <Drawer.Navigator
        initialRouteName='Login'
      >

        <Drawer.Screen name='Products' component={Products} options={{
          title: 'Produtos',
          drawerIcon: () => <Ionicons name='md-list' size={30} color='#000' />,

        }} />

        <Drawer.Screen name='Login' component={SignIn} options={{
          drawerLabel: () => { return this.props.logged ? <LogoutItem/> : <LoginItem/>}
        }} />

        {this.props.logged ?
          null
          :
          <Drawer.Screen name='SignUp' component={SignUp} />

        }
      </Drawer.Navigator>
    );

  }
}

const Route = () => {
  const { logged } = useContext(MainContext);
  return(
    <DrawerRoute logged={logged}/>
  );
}

export default Route;

const LoginItem = () => (
  <View style={{flexDirection:'row', alignItems:'center'}}>
    <Entypo name='login' size={25} />
    <Text style={{marginLeft:5, }}>Login</Text>
  </View>
);

const LogoutItem = () => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <MaterialCommunityIcons name='logout' size={25} />
    <Text style={{ marginLeft: 5, }}>Sair</Text>
  </View>
);