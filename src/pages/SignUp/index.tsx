import React, { Component, ReactNode } from 'react';
import { View, Button } from 'react-native';

import styles from './styles';

export default class SignUp extends Component<any, any> {
  constructor(props:any){
    super(props);
  }
  render(): ReactNode {
    console.log(this.props.navigation);
    return (
      <View style={styles.container}>
        <Button title='cadastrar' onPress={ ()=> this.props.navigation.navigate('Drawer') } />
      </View>
    );
  }
}

//const { address, age, email, name, user:{password} } = req.body;