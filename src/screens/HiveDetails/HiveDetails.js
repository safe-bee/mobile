import React, { useEffect, useState } from 'react';
import { View, Image, Text } from "react-native";
import styled from 'styled-components/native';
import COLORS from '../../theme/colors';
import FONTS from '../../theme/fonts';
import Menu from '../../components/Menu/index';
import HideableCard from '../../components/HideableCard/index';
import { Divider, Card } from 'react-native-paper';
import FabMenu from '../../components/Menu/FabMenu';
import { MenuContainer, MainContentContainer, Content } from '../sharedStyles';
import TwoOptionsSelector from '../../elements/TwoOptionsSelector/index';
import { ScrollView } from 'react-native-gesture-handler';

const Container = styled.View`
  flex: 1;
`;

const HiveDetails = () => {
    
  const [openCardIndex, setOpenCard] = useState(null);

  return (
      <Container>
        <MainContentContainer>
            <Content>
              
              <View style={{ direction: 'row', flex: 1 }}>
                
                <View style={{ flex: 0.3, alignItems: 'center' }}>
                  <Image
                    source={require('../../../assets/hive4.png')} 
                    style={{ width: 100, height: 100 }} 
                  />
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

                <View style={{ flex: 0.1, alignItems: 'center' }}>
                  <TwoOptionsSelector />
                </View>

                <View style={{ overflow: 'hidden', paddingBottom: 5}}>
                  <View 
                    style={{ 
                      width: '100%', 
                      height: 20, 
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
            

                
                <ScrollView style={{ flex: 0.3 }}>
                    <View style={{ height: '100%', alignItems: 'center', paddingTop: 10 }}>
                      <HideableCard setOpenCard={setOpenCard} openCardIndex={openCardIndex} index={1}/>
                      <HideableCard setOpenCard={setOpenCard} openCardIndex={openCardIndex} index={2} />
                      <HideableCard setOpenCard={setOpenCard} openCardIndex={openCardIndex} index={3} />
                      <HideableCard setOpenCard={setOpenCard} openCardIndex={openCardIndex} index={4} />
                      <HideableCard setOpenCard={setOpenCard} openCardIndex={openCardIndex} index={5} />
                      <HideableCard setOpenCard={setOpenCard} openCardIndex={openCardIndex} index={6} />
                      <HideableCard setOpenCard={setOpenCard} openCardIndex={openCardIndex} index={7} />
                    </View>
                </ScrollView>

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
  
  export default HiveDetails;