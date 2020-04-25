import React, { Component, ReactNode, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import styles from './styles';

import User from '../../models/User';
import MainContext from '../../contexts/MainContext';

type State = {
  login: string,
  password: string,
}

export class SignIn extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      login: '',
      password: '',
    }
  }


  handleChangeInput(input: string, text: string) {
    this.setState({ ...this.state, [input]: text });
  }


  async handleLogin(){
    const { login, password } = this.state;
    await User.signIn(login, password);

    const logged = await User.isLogged();

    if ( logged ) {
      this.props.s_handleLogin(logged);
      this.props.navigation.navigate('Products');
    }
  }

  render(): ReactNode {
    return (
      <View style={styles.container}>

        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Entypo name='shop' size={30} color='#0074C3'/>
          <Text style={styles.title}>E-Commerce</Text>
        </View>

        <View style={styles.formContainer}>

          <Text style={styles.textInput}>Login:</Text>
          <TextInput
            style={styles.input}
            keyboardType='email-address'
            autoCapitalize='none'
            onChangeText={(text) => this.handleChangeInput('login', text)}
          />

          <Text style={styles.textInput}>Password:</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(text) => this.handleChangeInput('password', text)}
          />

          <TouchableOpacity
            style={[styles.button, { marginTop: 15 }]}
            onPress={() =>  this.handleLogin() }
          >
            <Text style={styles.textButton}>Fazer Login</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity
          style={[styles.button, { marginBottom: 30 }]}
          onPress={() => this.props.navigation.navigate('SignUp') }
        >
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const SignInRender = (props:any) => {
  function super_handleLogin(logged:boolean){
    const { setLogged } = useContext(MainContext);
    setLogged(logged);

  }
  return(
    <SignIn s_handleLogin={super_handleLogin}/>
  );
}
export default SignInRender;