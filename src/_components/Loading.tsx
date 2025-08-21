import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

const Loading = (props: { message?: string }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <ActivityIndicator size="large" color="#fff" />
      <Text style={styles.text}>{props.message || 'Loading...'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1d1d2e',
  },
  logo: {
    marginBottom: 18,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Loading;
