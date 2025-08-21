import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useSigninManagement } from './hooks/useSigninManagement';
import { globalStyles } from '../../styles';

const Signin = () => {
  const { fields, actions } = useSigninManagement();
  return (
    <View style={globalStyles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={globalStyles.logo}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          placeholderTextColor="#fff"
          keyboardType="email-address"
          value={fields.email}
          onChangeText={value => actions.handleChangeField('email', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          maxLength={10}
          value={fields.password}
          onChangeText={value => actions.handleChangeField('password', value)}
        />
        <TouchableOpacity style={styles.button} onPress={actions.handleSignin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '95%',
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 4,
  },
  input: {
    width: '95%',
    height: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 32,
  },
  button: {
    width: '95%',
    height: 40,
    backgroundColor: '#3FFFA3',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#101026',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default Signin;
