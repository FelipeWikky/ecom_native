import React, { FC, useContext, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

import Header from '../../components/Header';

import User from '../../models/User';

import { UserInterface, ErrorInterface } from '../../models/Interfaces';

import MainContext from '../../contexts/MainContext';

const SignUp: FC = (props: any) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState<ErrorInterface>({ error: false });

  const { setLogged } = useContext(MainContext);

  async function handleRegister() {
    if (name == '' || age == '' || address == '' || email == '' || password == '' || passwordConfirm == '') {
      setError({ error: true, message: 'Todos os campos são obrigatórios' });
      return;
    }

    if (password != passwordConfirm) {
      setError({ error: true, message: 'As Senhas informadas precisam coincidir' });
      return;
    }
    setError({ error: false });

    const user: UserInterface = {
      address,
      age: Number(age),
      email,
      name,
      userPassword: password
    }

    console.log(user);

    const token = await User.register(user);

    if (token) {
      setLogged(true);
      props.navigation.navigate('Drawer');

    }
  }

  return (
    <View style={styles.container}>
      <Header
        title='Cadastro'
        titleComponent={
          <Text style={styles.titleHeader}> Cadastro </Text>
        }
        leftButtonIcon={<AntDesign name='back' size={30} />}
        leftButtonPress={() => props.navigation.goBack() }
      />

      <View style={{paddingHorizontal:30, marginTop:10,}} >

        <Text style={styles.title}>Informe seus Dados para Cadastro</Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.formContainer}>

            {error.error ?
              <Text style={{ color: '#F00', fontWeight: 'bold', fontSize: 12, marginBottom: 5 }}>
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
                  autoCapitalize='none'
                  autoCorrect={false}
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
    </View>
  );
}
export default SignUp;