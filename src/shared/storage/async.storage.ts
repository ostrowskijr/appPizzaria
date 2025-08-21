import AsyncStorage from "@react-native-async-storage/async-storage";


export const setStorageInformation = async (key: string, value: string) => {
  const data = JSON.stringify(value);
  await AsyncStorage.setItem(key, data);
};

export const getStorageInformation = async (key: string) => {
  const data = await AsyncStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const removeStorageInformation = async (key: string) => await AsyncStorage.removeItem(key);