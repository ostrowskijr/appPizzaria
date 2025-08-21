import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { useSigninManagement } from './hooks/useSigninManagement';
import { globalStyles } from '../../../shared/styles';
import { useAuthContext } from '../../../shared/hooks/useAuthContext';

const Signin = () => {
  const { fields, actions } = useSigninManagement();
  const { isLoadingAuth } = useAuthContext();
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
        <TouchableOpacity
          style={globalStyles.buttonPrimary}
          onPress={actions.handleSignin}
        >
          {isLoadingAuth ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={globalStyles.buttonTextPrimary}>Login</Text>
          )}
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
});

export default Signin;
