import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuthContext } from '../../../shared/hooks/useAuthContext';

const Dashboard = () => {
  const { signOut } = useAuthContext();
  return (
    <View>
      <Text>Dashboard</Text>
      <Button title="Sair" onPress={() => signOut()} />
    </View>
  );
};

export default Dashboard;
