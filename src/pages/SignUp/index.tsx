import React, { FC, useContext, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles';

import User from '../../models/User';
import { UserInterface } from '../../models/Interfaces';

import MainContext from '../../contexts/MainContext';

interface ErrorInterface {
  error: boolean,
  message?: string,
}

const SignUp: FC = (props: any) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState<ErrorInterface>({error:false});

  const { setLogged } = useContext(MainContext);

  async function handleRegister() {
    if (name == '' || age == '' || address =='' || email == '' || password == '' || passwordConfirm == '') {
      setError({error: true, message:'Todos os campos são obrigatórios'});
      return;
    }

    if (password != passwordConfirm) {
      setError({error: true, message:'As Senhas informadas precisam coincidir'});
      return;
    }
    setError({ error: false });

    const user: UserInterface = {
      name,
      age:Number(age),
      address,
      email,
      user: {
        password,
      }
    }
    const token = await User.register(user);
    if (token) {
      setLogged(true);
      props.navigation.navigate('Drawer');

    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Informe seus Dados para Cadastro</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formContainer}>

          {error.error ? 
            <Text style={{color:'#F00', fontWeight:'bold', fontSize:12, marginBottom:5}}>
              {error.message}
            </Text> 
          :
            null
          }

          <View style={styles.inputContainer}>
            <Text style={styles.labelInput}>Informe seu Nome</Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              onChangeText={setName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.labelInput}>Informe sua Idade</Text>
            <TextInput
              style={styles.input}
              keyboardType='numeric'
              onChangeText={setAge}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.labelInput}>Informe seu Endereço</Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              autoCapitalize='characters'
              onChangeText={setAddress}
            />
          </View>

          <View style={styles.credentialsContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.labelInput}>Informe seu E-mail</Text>
              <TextInput
                style={styles.input}
                keyboardType='email-address'
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.labelInput}>Informe uma Senha</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                onChangeText={setPassword}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.labelInput}>Repita a Senha informada</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                onChangeText={setPasswordConfirm}
              />
            </View>

          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={async () => await handleRegister()}
          >
            <Text style={styles.buttonText}>Cadastrar Conta</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>


    </View>
  );
}
export default SignUp;

//const { name, age, address, email,  user:{password} } = req.body;

// <Button title='cadastrar' onPress={ ()=> this.props.navigation.navigate('Drawer') } />