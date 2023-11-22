import AsyncStorage from '@react-native-async-storage/async-storage';

const PUSH_NOTIFICATION_KEY = 'PUSH_NOTIFICATION_KEY';

export default class PushNotificationService {
  static setPushNotificationToken = async (pushNotificationToken) => {
    await AsyncStorage.setItem(PUSH_NOTIFICATION_KEY, pushNotificationToken);
  };

  static getPushNotificationToken = async () =>
    AsyncStorage.getItem(PUSH_NOTIFICATION_KEY);

  static resetPushNotificationToken = async () => {
    await AsyncStorage.setItem(PUSH_NOTIFICATION_KEY, '');
  };
}
