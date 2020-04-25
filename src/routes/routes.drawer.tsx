import React, { Component, ReactNode, useContext } from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';

import Products from '../pages/Products';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import MainContext from '../contexts/MainContext';

export class DrawerRoute extends Component<any, any> {
  render(): ReactNode {

    const Drawer = createDrawerNavigator();

    return (
      <Drawer.Navigator
      //initialRouteName= 'Login' //
      >

        {this.props.logged ?
          <Drawer.Screen name='Products' component={Products} options={{
            title: 'Produtos',
            drawerIcon: () => <Entypo name='shopping-bag' size={25} color='#000' />,
          }} />
          :
          null
        }

        <Drawer.Screen name='Login' component={SignIn} options={{
          //drawerLabel: () => { return this.props.logged ? <LogoutItem/> : <LoginItem/>}
          title: this.props.logged ? 'Sair' : 'Entrar',
          drawerIcon: () => (this.props.logged ? <FontAwesome name='sign-out' size={25} /> : <FontAwesome name='sign-in' size={25} />),
        }} />

        {this.props.logged ?
          null
          :
          <Drawer.Screen name='SignUp' component={SignUp} options={{
            //drawerLabel: SignUpItem,
            title: 'Cadastrar',
            drawerIcon: () => <FontAwesome name='arrow-circle-o-up' size={25} />,
          }} />
        }

      </Drawer.Navigator>
    );

  }
}

const Route = () => {
  const { logged } = useContext(MainContext);
  return (
    <DrawerRoute logged={logged} />
  );
}

export default Route;

const LoginItem = () => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <FontAwesome name='sign-in' size={25} />
    <Text style={{ marginLeft: 5, }}>Entrar</Text>
  </View>
);

const LogoutItem = () => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <FontAwesome name='sign-out' size={25} />
    <Text style={{ marginLeft: 5, }}>Sair</Text>
  </View>
);

const SignUpItem = () => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <FontAwesome name='arrow-circle-o-up' size={25} />
    <Text style={{ marginLeft: 5, }}>Cadastrar</Text>
  </View>
)