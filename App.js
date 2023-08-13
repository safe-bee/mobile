import React, { useEffect, useState, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { ApolloProvider } from "@apollo/client";
import { Text, TextInput } from 'react-native';
import apolloClient from "./src/configs/createApolloClient";
import { SplashScreenContainer } from './src/components/SpashScreen/SplashScreen.styles';
import Routes from './src/routes'
import { PaperProvider } from 'react-native-paper';
import {
  useFonts,
  Barlow_400Regular,
  Barlow_500Medium_Italic,
  Barlow_500Medium,
  Barlow_700Bold,
} from '@expo-google-fonts/barlow';


export default function App() {
  
  
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    Barlow_400Regular,
    Barlow_500Medium,
    Barlow_700Bold,
    Barlow_500Medium_Italic,
  });

  
  useEffect(() => {
    async function prepare() {
      if(fontsLoaded) {
        try {
          await SplashScreen.preventAutoHideAsync();
        } catch (e) {
          console.warn(e);
        } finally {
          setAppIsReady(true);
        }
      }
    }

    prepare();
  }, [fontsLoaded]);


  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {

    return null;
  }


  /* Globally disables accessibility scaling of fonts */
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.allowFontScaling = false;
  
  return (
    <SplashScreenContainer onLayout={onLayoutRootView}>
      <ApolloProvider client={apolloClient}>
        <PaperProvider>
          <Routes />
        </PaperProvider>
      </ApolloProvider>
    </SplashScreenContainer>
  );
}
