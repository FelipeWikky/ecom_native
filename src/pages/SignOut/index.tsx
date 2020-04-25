import React, { Component, ReactNode } from 'react';
import {View, Text} from 'react-native';

import Authentication from '../../utils/Authentication';

export default class SignOut extends Component<any, any> {
  render(): ReactNode {

    if ( Authentication.signOut() ) {
      this.props.navigation.navigate('Login');
      return null;
    } else {
      this.props.navigation.navigate('Products');
      console.log('enter 2');
    }
    console.log('enter 3');
    return null;
  }
}