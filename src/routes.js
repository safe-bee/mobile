import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthService from './services/auth.service';
import { ROUTES } from './constants';
import Home from './screens/Home/index'
import Header from './components/Header/index'
import Profile from './screens/Profile/index'
import Record from './screens/Record/index'
import HiveDetails from './screens/HiveDetails/index'
import Tarea from './screens/Tarea/index'
import Inspection from './screens/Inspection/index'
import CreateApiary from './components/Wizard/CreateApiary/CreateApiaryWizard';
import EditApiary from './components/Wizard/CreateApiary/EditApiary';
import CreateHive from './components/Wizard/CreateHive/CreateHiveWizard';
import { MenuProvider } from './context/MenuContext';
import { useUserContext } from './context/UserContext';
import { RealizarTareaProvider } from './context/RealizarTareaContext';
import { SnackbarProvider } from './context/SnackbarContext'; 
import ApiaryDetail from './screens/ApiaryDetail/index';
import InspectionDetails from './screens/InspectionDetails/index';
import SignIn from './screens/SignIn/index';
import CambioDeCuadros from './screens/Record/CambioDeCuadros/CambioDeCuadros';
import DeadHive from './screens/Record/DeadHive/index';
import DocumentFlora from './screens/Record/DocumentFlora/index'
import HarvestHoney from './screens/Record/HarvestHoney/index';
import MiteAssesment from './screens/Record/MiteAssesment/index';
import Treatment from './screens/Record/Treatment/index';
import Winterize from './screens/Record/Winterize/index';


const Stack = createStackNavigator();

export default function Routes() {

  const { currentUser, setCurrentUser } = useUserContext();

  useEffect(() => {
    async function getUserAuth() {
      const user = await AuthService.getAuth();
      if (user) {
        const parsedUser = await JSON.parse(user);
        setCurrentUser(parsedUser);
      }
    }
    getUserAuth();
  }, []);
  

  return (
    
    <NavigationContainer>
        <SnackbarProvider>
          <MenuProvider>
            <RealizarTareaProvider>
                <Stack.Navigator
                    headerMode="screen"
                    screenOptions={{
                      animationEnabled: false,
                      header: ({ scene, route, options, previous ,navigation }) =>
                        currentUser ? 
                          <Header
                            route={route}
                            options={options}
                            navigation={navigation}
                            previous={previous}
                            scene={scene}
                          />
                        : null
                    }}
                >
                  {
                    currentUser
                    ? 
                    <>
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
                            title: "Perfil",
                          }}
                        />
                        <Stack.Screen
                            name={ROUTES.INSPECTION}
                            component={Inspection}
                            options={{
                            title: "Inspeccion",
                          }}
                        />
                        <Stack.Screen
                            name={ROUTES.TAREA}
                            component={Tarea}
                            options={{
                            title: "Tarea",
                          }}
                        />
                        <Stack.Screen
                            name={ROUTES.RECORD}
                            component={Record}
                            options={{
                            title: "Registrar",
                          }}
                        />
                        <Stack.Screen
                            name={ROUTES.CREATE_APIARY}
                            component={CreateApiary}
                            options={{
                            title: "Crear apiario",
                          }}
                        />
                        <Stack.Screen
                            name={ROUTES.EDIT_APIARY}
                            component={EditApiary}
                            options={{
                            title: "Editar apiario",
                          }}
                        />
                        <Stack.Screen
                            name={ROUTES.CREATE_HIVE}
                            component={CreateHive}
                            options={{
                            title: "Crear colmena",
                          }}
                        />
                        <Stack.Screen
                            name={ROUTES.APIARY_DETAIL}
                            component={ApiaryDetail}
                            options={{
                            title: "Detalle de apiario",
                          }}
                        />
                        <Stack.Screen
                            name={ROUTES.HIVE_DETAILS}
                            component={HiveDetails}
                            options={{
                            title: "Detalle de colmena",
                          }}
                        />
                        <Stack.Screen
                            name={ROUTES.INSPECTION_DETAILS}
                            component={InspectionDetails}
                            options={{
                            title: "Detalle de inspeccion",
                          }}
                        />
                        <Stack.Screen
                            name={ROUTES.CAMBIO_CUADROS}
                            component={CambioDeCuadros}
                            options={{
                            title: "Cambio de cuadros",
                          }}
                        />
                        <Stack.Screen
                            name={ROUTES.DEAD_HIVE}
                            component={DeadHive}
                            options={{
                            title: "Muerte colmena",
                          }}
                        />
                        <Stack.Screen
                            name={ROUTES.HARVEST_HONEY}
                            component={HarvestHoney}
                            options={{
                            title: "Cosecha",
                          }}
                        />
                        <Stack.Screen
                            name={ROUTES.TREATMENT}
                            component={Treatment}
                            options={{
                            title: "Tratamiento",
                          }}
                        />
                        <Stack.Screen
                            name={ROUTES.WINTERIZE}
                            component={Winterize}
                            options={{
                            title: "Hibernacion",
                          }}
                        />
                        <Stack.Screen
                            name={ROUTES.MITE_ASSESMENT}
                            component={MiteAssesment}
                            options={{
                            title: "Tratamiento varroa",
                          }}
                        />
                        <Stack.Screen
                            name={ROUTES.DOCUMENT_FLORA}
                            component={DocumentFlora}
                            options={{
                            title: "Alimentar abejas",
                        }}
                      />
                    </>
                    : 
                      <>
                        <Stack.Screen
                            name={ROUTES.SIGN_IN}
                            component={SignIn}
                            options={{
                              title: "Sign in",
                            }}
                        />
                      </>
                  }
                    
              </Stack.Navigator>
            </RealizarTareaProvider>
          </MenuProvider>
        </SnackbarProvider>
    </NavigationContainer>
  );
}