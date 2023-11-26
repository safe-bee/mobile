import { useEffect, useRef, useState } from 'react';
import * as ExpoNotifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { Platform } from 'react-native';
import PushNotificationService from '../services/pushNotification.service';
import { useApolloClient } from '@apollo/client';

const usePushNotifications = () => {

    const notificationListener = useRef();
    const responseListener = useRef();
    const [expoPushToken, setExpoPushToken] = useState('');
    const [, setNotification] = useState(false);
    const [handlingNotification, setHandlingNotification] = useState(false);

    async function registerForPushNotificationsAsync() {
        let token;
        const { status: existingStatus } = await ExpoNotifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        
        if (existingStatus !== 'granted') {
            const { status } = await ExpoNotifications.requestPermissionsAsync();
            finalStatus = status;
        }

        if (finalStatus !== 'granted') {
            return null;
        }
        
        token = (await ExpoNotifications.getExpoPushTokenAsync({
            projectId: "dd25e13a-091e-410d-9edb-5ed0b2a94131"
        })).data;
        await PushNotificationService.setPushNotificationToken(token);

      
        if (Platform.OS === 'android') {
          ExpoNotifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: ExpoNotifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
    
        return token;
      }

      useEffect(() => {
        registerForPushNotificationsAsync().then(
          (token) => token && setExpoPushToken(token)
        );
    
        if (expoPushToken) {
          notificationListener.current =
            ExpoNotifications.addNotificationReceivedListener((notification) => {
              setNotification(notification);
            });
    
          responseListener.current =
            ExpoNotifications.addNotificationResponseReceivedListener(
              (response) => {
                console.log("response");
                console.log(response);
              }
            );
        }
    
        return () => {
          if (notificationListener.current) {
            ExpoNotifications.removeNotificationSubscription(
              notificationListener.current
            );
          }
          if (responseListener.current) {
            ExpoNotifications.removeNotificationSubscription(
              responseListener.current
            );
          }
          if (handlingNotification) {
            setHandlingNotification(false);
          }
        };
      }, [expoPushToken, handlingNotification]);

      return {
        expoPushToken
      }
    
}


export default usePushNotifications;