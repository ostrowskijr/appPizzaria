import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D1D2E',
  },
  logo: {
    marginBottom: 18,
  },
  buttonPrimary: {
    width: '95%',
    height: 40,
    backgroundColor: '#3FFFA3',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextPrimary: {
    color: '#101026',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  buttonSecondary: {
    width: '5%',
    height: 40,
    backgroundColor: '#3FD1FF',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextSecondary: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
