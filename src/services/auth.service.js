import AsyncStorage from '@react-native-async-storage/async-storage';

const SESSION_KEY = 'SESSION_KEY';

export default class AuthService {
  static setAuth = async (user) => {
    await AsyncStorage.setItem(SESSION_KEY, user);
  };

  static getAuth = async () => AsyncStorage.getItem(SESSION_KEY);

  static resetAuth = async () => {
    await AsyncStorage.setItem(SESSION_KEY, '');
  };
}
