import React from 'react';
import styled from 'styled-components/native';
import { Image, View, TouchableOpacity, Text, StyleSheet, ScrollView } from "react-native";
import { Card } from 'react-native-paper';
import COLORS from '../../theme/colors';
import FONTS from '../../theme/fonts';
import Menu from '../../components/Menu/index';
import FabMenu from '../../components/Menu/FabMenu';
import { MenuContainer, MainContentContainer, Content } from '../sharedStyles';
import Icon from 'react-native-remix-icon';

export const ContentContainer = styled.View`
  flex: 0.9;
`;

export const Container = styled.View`
  flex: 1;
`;

const HiveDetails = () => {
  return (
    <Container>
      <MainContentContainer>
        <View style={{ flex: 1}}>

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


            <View style={{ flex: 0.4, alignItems: 'center', marginTop: 20 }}>
                <View style={{ alignSelf: 'left', marginLeft: 60, marginBottom: 12 }}>
                    <Text style={{ color: COLORS.GREEN_2, fontSize: 15, fontWeight: 'bold', fontFamily: FONTS.medium}}>
                        Detalles de Colmena
                    </Text>
                </View> 
                
                <Card style={{ width: '70%'}}>
                    <Card.Content>
                      <ScrollView>
                         
                         <View>
                            <View>
                              <Text style={{ color: COLORS.GREEN_2, fontSize: 12, fontFamily: FONTS.regular}}>
                                  Nombre
                              </Text>
                            </View>

                            <View style={{ marginTop: 3 }}>
                              <Text style={{ color: COLORS.BLACK_1, fontSize: 12, fontFamily: FONTS.regular}}>
                                  Colmena 1
                              </Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <View>
                              <Text style={{ color: COLORS.GREEN_2, fontSize: 12, fontFamily: FONTS.regular}}>
                                  Fecha de creacion
                              </Text>
                            </View>

                            <View style={{ marginTop: 3 }}>
                              <Text style={{ color: COLORS.BLACK_1, fontSize: 12, fontFamily: FONTS.regular}}>
                                  10 de Agosto del 2023
                              </Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <View>
                              <Text style={{ color: COLORS.GREEN_2, fontSize: 12, fontFamily: FONTS.regular}}>
                                  Tipo de colmena
                              </Text>
                            </View>

                            <View style={{ marginTop: 3 }}>
                              <Text style={{ color: COLORS.BLACK_1, fontSize: 12, fontFamily: FONTS.regular}}>
                                  Langstroh
                              </Text>
                            </View>
                        </View>

                      </ScrollView>
                    </Card.Content> 
                </Card>
            </View>
            
        </View>

      </MainContentContainer>
      
      <View>
        <FabMenu />
      </View>
      
      <MenuContainer>
        <Menu />
      </MenuContainer>
    </Container>
  );
}

export default HiveDetails;