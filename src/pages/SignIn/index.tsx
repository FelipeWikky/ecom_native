import React, {useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import styles from './styles';

import User from '../../models/User';
import MainContext from '../../contexts/MainContext';

type State = {
  login: string,
  password: string,
}

const SignIn:React.FC = (props:any) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const isFocused = useIsFocused();

  const { logged, setLogged } = useContext(MainContext);

  function handleChangeInput(input: string, text: string) {
    switch(input) {
      case 'login':
        setLogin(text);
        break;
      case 'password':
        setPassword(text);
        break;
    }
  }

  useEffect(() => {
    async function verifyLogout(){
      if ( await User.isLogged() && isFocused == true ) {
        await User.signOut();
        setLogged(false);
        console.log('Deslogando...');
      }
    }
    verifyLogout();

  }, [isFocused]);

  async function handleLogin(){
    await User.signIn(login, password);

    const logged = await User.isLogged();

    if (logged) {
      setLogged(logged);
      props.navigation.navigate('Products');
    }
  }

  if ( logged ) {
    props.navigation.navigate('Products');
    return null;
  } else {
    return (
      <View style={styles.container}>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Entypo name='shop' size={30} color='#0074C3' />
          <Text style={styles.title}>E-Commerce</Text>
        </View>

        <View style={styles.formContainer}>

          <Text style={styles.textInput}>Login:</Text>
          <TextInput
            style={styles.input}
            keyboardType='email-address'
            autoCapitalize='none'
            onChangeText={(text) => setLogin(text)}
          />

          <Text style={styles.textInput}>Password:</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity
            style={[styles.button, { marginTop: 15 }]}
            onPress={async () => await handleLogin()}
          >
            <Text style={styles.textButton}>Fazer Login</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity
          style={[styles.button, { marginBottom: 30 }]}
          onPress={() => props.navigation.navigate('SignUp')}
        >
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignIn;
