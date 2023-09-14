import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MenuProvider } from "./context/MenuContext";
import { SnackbarProvider } from "./context/SnackbarContext";
import { ROUTES } from "./constants";
import CreateApiary from "./components/Wizard/CreateApiary/CreateApiaryWizard";
import CreateHive from "./components/Wizard/CreateHive/CreateHiveWizard";
import Home from "./screens/Home/index";
import Header from "./components/Header/index";
import Profile from "./screens/Profile/index";
import Record from "./screens/Record/index";
import Todo from "./screens/Todo/index";
import DocumentFlora from "./screens/DocumentFlora/index";
import FeedBees from "./screens/FeedBees/index";
import MiteAssessment from "./screens/MiteAssessment/index";
import Treatment from "./screens/Treatment/index";
import HarvestHoney from "./screens/HarvestHoney/index";
import Winterize from "./screens/Winterize/index";
import DeadHive from "./screens/DeadHive/index";
import LogSymptoms from "./screens/LogSymptoms/index";
import Inspection from "./screens/Inspection/index";

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
      <SnackbarProvider>
        <MenuProvider>
          <Stack.Navigator
            headerMode="screen"
            screenOptions={{
              animationEnabled: false,
              header: ({ scene, route, options, previous, navigation }) => (
                <Header
                  route={route}
                  options={options}
                  navigation={navigation}
                  previous={previous}
                  scene={scene}
                />
              ),
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
            <Stack.Screen
              name={ROUTES.CREATE_HIVE}
              component={CreateHive}
              options={{
                title: "Create Hive",
              }}
            />
            <Stack.Screen
              name={ROUTES.DOCUMENT_FLORA}
              component={DocumentFlora}
              options={{
                title: "Document Flora",
              }}
            />
            <Stack.Screen
              name={ROUTES.FEED_BEES}
              component={FeedBees}
              options={{
                title: "Feed Bees",
              }}
            />
            <Stack.Screen
              name={ROUTES.MITE_ASSESSMENT}
              component={MiteAssessment}
              options={{
                title: "Mite Assessment",
              }}
            />
            <Stack.Screen
              name={ROUTES.TREATMENT}
              component={Treatment}
              options={{
                title: "Treatment",
              }}
            />
            <Stack.Screen
              name={ROUTES.HARVEST_HONEY}
              component={HarvestHoney}
              options={{
                title: "Harvest Honey",
              }}
            />
            <Stack.Screen
              name={ROUTES.WINTERIZE}
              component={Winterize}
              options={{
                title: "Winterize",
              }}
            />
            <Stack.Screen
              name={ROUTES.DEAD_HIVE}
              component={DeadHive}
              options={{
                title: "Dead Hive",
              }}
            />
            <Stack.Screen
              name={ROUTES.LOG_SYMPTOMS}
              component={LogSymptoms}
              options={{
                title: "Log Symptoms",
              }}
            />
          </Stack.Navigator>
        </MenuProvider>
      </SnackbarProvider>
    </NavigationContainer>
  );
}
