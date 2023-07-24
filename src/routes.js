import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from './constants';
import Home from './screens/Home/index'
import Profile from './screens/Profile/index'

const Stack = createStackNavigator();

const settingsNavAnimation = ({ current, layouts }) => ({
  cardStyle: {
    transform: [
      {
        translateX: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [-layouts.screen.width, 0],
        }),
      },
    ],
  },
});


export default function Routes() {

  /*
  const signInOptions = {
    animationTypeForReplace: isSignOut ? 'pop' : 'push',
  };
  */

  return (
    <NavigationContainer
      // fallback={<Loader backgroundColor={COLORS.PK.WHITE} />}
    >
        <Stack.Navigator
            headerMode="screen"
            /*
            screenOptions={() => ({
            // eslint-disable-next-line react/prop-types
            header: ({ scene, previous ,navigation }) =>
                currentUser && !isInitialStartup ? (
                <Header
                    scene={scene}
                    navigation={navigation}
                    previous={previous}
                />
                ) : null,
            })}*/
        >
            {
                /*
                <Stack.Screen
                    name={ROUTES.SETTINGS}
                    component={Settings}
                    options={{
                    cardStyleInterpolator: settingsNavAnimation,
                    title: i18n.t('settings-SettingsNavigation-settings'),
                    animationEnabled: false,
                    }}
                />
                */
            }
            <Stack.Screen
                name={ROUTES.HOME}
                component={Home}
                options={{
                title: "Home",
              }}
            />
            <Stack.Screen
                name={ROUTES.PROFILE}
                component={Profile}
                options={{
                title: "Profile",
              }}
            />
            
        </Stack.Navigator>
    </NavigationContainer>
  );
}