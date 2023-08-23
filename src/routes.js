import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from './constants';
import Home from './screens/Home/index'
import Header from './components/Header/index'
import Profile from './screens/Profile/index'
import Record from './screens/Record/index'
import Todo from './screens/Todo/index'
import Inspection from './screens/Inspection/index'
import CreateApiary from './components/Wizard/CreateApiary/CreateApiaryWizard';
import { MenuProvider } from './context/MenuContext';

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
        <MenuProvider>
          <Stack.Navigator
              headerMode="screen"
              screenOptions={{
                animationEnabled: false,
                header: ({ scene, route, options, previous ,navigation }) =>
                  <Header
                    route={route}
                    options={options}
                    navigation={navigation}
                    previous={previous}
                    scene={scene}
                  />
              }}
          >
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
              <Stack.Screen
                  name={ROUTES.INSPECTION}
                  component={Inspection}
                  options={{
                  title: "Inspection",
                }}
              />
              <Stack.Screen
                  name={ROUTES.TODO}
                  component={Todo}
                  options={{
                  title: "Todo",
                }}
              />
              <Stack.Screen
                  name={ROUTES.RECORD}
                  component={Record}
                  options={{
                  title: "Record",
                }}
              />
              <Stack.Screen
                  name={ROUTES.CREATE_APIARY}
                  component={CreateApiary}
                  options={{
                  title: "Create Apiary",
                }}
              />
              
        </Stack.Navigator>
      </MenuProvider>
    </NavigationContainer>
  );
}