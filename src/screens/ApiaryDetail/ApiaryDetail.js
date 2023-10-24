import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import Loading from '../../components/Loading/index';
import COLORS from '../../theme/colors';
import FONTS from '../../theme/fonts';
import Menu from '../../components/Menu/index';
import FabMenu from '../../components/Menu/FabMenu';
import DeleteHive from '../../components/Modals/DeleteHive/index';
import { MenuContainer, MainContentContainer, Content } from '../sharedStyles';
import TwoOptionsSelector from '../../elements/TwoOptionsSelector/index';
import Icon from 'react-native-remix-icon';
import ToDos from './ToDos';
import HiveHistory from './HiveHistory';
import HiveDetailsMoreOptions from '../../components/Modals/HiveDetailsMoreOptions/index';
import { GET_COLMENA } from '../../graphql/queries';
import executeQuery from '../../graphql/api';

const Container = styled.View`
  flex: 1;
`;

const ApiaryDetail = () => {
    
  const [tabSelected, setTabSelected] = useState(1);
  const [openMoreOptionsModal, setMoreOptionsModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const route = useRoute();
  const { id } = route.params;


  const { data, loading } = useQuery(GET_COLMENA, { variables: { id },  fetchPolicy: "cache-and-network" });

  const colmena = data?.colmena;
  const tareas = colmena?.tareas;

  console.log("tareas");
  console.log(tareas);
  return (
      <Container>
        <MainContentContainer>
            <Content>
              {
                loading 
                ? <Loading size={50} />
                : (
                  <View style={{ direction: 'row', flex: 1 }}>
                    
                          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: COLORS.GREEN_2, fontSize: 16, fontWeight: 'bold', fontFamily: FONTS.medium}}>
                                Detalles de colmena
                            </Text>
                          </View> 
                          <View style={{ flex: 0.5, alignItems: 'center' }}>
                            <Image
                              source={require('../../../assets/hive4.png')} 
                              style={{ width: 100, height: 100 }} 
                            />
                            <TouchableOpacity onPress={()=> setMoreOptionsModal(true)}>
                              <View 
                                style={{
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    backgroundColor: COLORS.WHITE, 
                                    borderRadius: 40, 
                                    height: 25, 
                                    width: 25,
                                    shadowColor: 'black', // Color de la sombra
                                    shadowOffset: { width: 0, height: 1 }, // Tamaño de la sombra
                                    shadowOpacity: 0.3,
                                    shadowRadius: 4, // Radio de la sombra
                                    elevation: 10, // Ef
                                }}
                              >
                                <Icon size={22} name="ri-more-fill" color={COLORS.BLACK_1} />
                              </View>
                            </TouchableOpacity>
                            <Text
                              style={{
                                fontSize: 16,
                                paddingTop: 10,
                                fontFamily: FONTS.medium,
                                color: COLORS.GREEN_1,
                                textTransform: 'capitalize',
                              }}
                            >
                              {colmena?.nombre}
                            </Text>
                          </View>

                          <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center' }}>
                            <TwoOptionsSelector setSelectedOption={setTabSelected} selectedOption={tabSelected} />
                          </View>

                          <View style={{ overflow: 'hidden', paddingBottom: 5}}>
                            <View 
                              style={{ 
                                width: '100%', 
                                height: 10, 
                                backgroundColor: COLORS.HOME_GREY,
                                flexDirection: 'row',
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                shadowColor: 'black',
                                shadowOffset: { width: 1, height: 1 },
                                shadowOpacity:  0.4,
                                shadowRadius: 3,
                                elevation: 5,
                              }} 
                            />                
                      </View>
                        
                      {
                        tabSelected === 1
                        ? <ToDos tareas={tareas} />
                        : <HiveHistory />
                      }
                  </View>
               )
              }

              {
                openMoreOptionsModal
                ? <HiveDetailsMoreOptions
                    visible={openMoreOptionsModal}
                    onDismiss={() => setMoreOptionsModal(false)}
                    handleDeletePress={() => setOpenDeleteModal(true)} 
                    colmenaId={id}
                  />
                : null
              }

              {
                openDeleteModal
                ? <DeleteHive
                    visible={openDeleteModal}
                    onDismiss={() => setOpenDeleteModal(false)}
                    colmenaId={id}
                  />
                : null
               }
          

            </Content>
        </MainContentContainer>
        
        <View >
          <FabMenu />
        </View>
        
        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>
    );
  }
  
  export default ApiaryDetail;