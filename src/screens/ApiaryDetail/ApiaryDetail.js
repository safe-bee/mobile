import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";
import styled from 'styled-components/native';
import COLORS from '../../theme/colors';
import FONTS from '../../theme/fonts';
import Menu from '../../components/Menu/index';
import HideableCard from '../../components/HideableCard/index';
import { Divider, Card } from 'react-native-paper';
import FabMenu from '../../components/Menu/FabMenu';
import { MenuContainer, MainContentContainer, Content } from '../sharedStyles';
import TwoOptionsSelector from '../../elements/TwoOptionsSelector/index';
import Animation from './Animation';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-remix-icon';
import ToDos from './ToDos';
import HiveHistory from './HiveHistory';

const Container = styled.View`
  flex: 1;
`;

const ApiaryDetail = () => {
    
  const [tabSelected, setTabSelected] = useState(1);

  return (
      <Container>
        <MainContentContainer>
            <Content>
              
              <View style={{ direction: 'row', flex: 1 }}>
                
                <View style={{ flex: 0.5, alignItems: 'center' }}>
                  <Image
                    source={require('../../../assets/hive4.png')} 
                    style={{ width: 100, height: 100 }} 
                  />
                  <TouchableOpacity onPress={()=>{}}>
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
                    }}
                  >
                    Colmena 1
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
                  ? <ToDos />
                  : <HiveHistory />
                }

              </View>


              


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