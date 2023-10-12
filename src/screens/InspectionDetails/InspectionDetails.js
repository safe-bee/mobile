import React from 'react';
import styled from 'styled-components/native';
import { ScrollView, View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
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

const InspectionDetails = () => {
  return (
    <Container>
      <MainContentContainer>
        <View style={{ flex: 1}}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                 <Text style={{ color: COLORS.GREEN_2, fontSize: 24, fontWeight: 'bold', fontFamily: FONTS.medium}}>
                    Inspection Summary
                </Text>
            </View> 
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                 <Text style={{ color: COLORS.BLACK_1, fontSize: 14, fontWeight: 'bold', fontFamily: FONTS.medium}}>
                    Septiembre 17 de 2023
                </Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Card style={{ width: '65%'}}>
                    <Card.Content>
                        <View style={styles.detailsHeader}>
                            <View style={{ alignItems: 'center', flex: 0.3 }}>
                                <View style={styles.icon}>
                                    <Icon name="ri-emotion-happy-line" size={23} color={COLORS.WHITE} />
                                </View>
                            </View>
                            <View style={{ marginTop: 8, flex: 0.7 }}>
                                <Text style={styles.detailsHeaderText}>
                                    Hive Population 
                                </Text>
                            </View>
                        </View>

                        <View style={styles.detailsHeader}>
                            <View style={{ alignItems: 'center', flex: 0.3 }}>
                                <View style={styles.icon}>
                                    <Icon name="ri-vip-crown-line" size={21} color={COLORS.WHITE} />
                                </View>
                            </View>
                            <View style={{ marginTop: 8, flex: 0.7 }}>
                                <Text style={styles.detailsHeaderText}>
                                    Hive Population 
                                </Text>
                            </View>
                        </View>

                        <View style={styles.detailsHeader}>
                            <View style={{ alignItems: 'center', flex: 0.3 }}>
                                <View style={styles.icon}>
                                    <Icon name="ri-virus-line" size={22} color={COLORS.WHITE} />
                                </View>
                            </View>
                            <View style={{ marginTop: 8, flex: 0.7 }}>
                                <Text style={styles.detailsHeaderText}>
                                    Hive Population 
                                </Text>
                            </View>
                        </View>

                        <View style={styles.detailsHeader}>
                            <View style={{ alignItems: 'center', flex: 0.3 }}>
                                <View style={styles.icon}>
                                    <Icon name="ri-empathize-line" size={22} color={COLORS.WHITE} />
                                </View>
                            </View>
                            <View style={{ marginTop: 8, flex: 0.7 }}>
                                <Text style={styles.detailsHeaderText}>
                                    Hive Population 
                                </Text>
                            </View>
                        </View>

                        <View style={styles.detailsHeader}>
                            <View style={{ alignItems: 'center', flex: 0.3 }}>
                                <View style={styles.icon}>
                                    <Icon name="ri-leaf-line" size={22} color={COLORS.WHITE} />
                                </View>
                            </View>
                            <View style={{ marginTop: 8, flex: 0.7 }}>
                                <Text style={styles.detailsHeaderText}>
                                    Hive Population 
                                </Text>
                            </View>
                        </View>
                    </Card.Content>    
                </Card>
            </View>
            
            <View style={{ marginTop: 35, marginLeft: 30 }}>
                 <Text style={{ color: COLORS.BLACK_1, fontSize: 17, fontWeight: 'bold', fontFamily: FONTS.medium}}>
                    Details
                </Text>
                <View style={{ marginTop: 10 }}>
                  <View>
                    <Text style={{ color: COLORS.GREEN_2, fontSize: 12, fontFamily: FONTS.regular}}>
                        Symptoms
                    </Text>
                 </View>
                  <View style={{ marginTop: 5 }}>
                    <Text style={{ color: COLORS.BLACK_1, fontSize: 12, fontFamily: FONTS.regular}}>
                        None
                    </Text>
                  </View>
                </View>
                <View style={{ marginTop: 10 }}>
                  <View>
                    <Text style={{ color: COLORS.GREEN_2, fontSize: 12, fontFamily: FONTS.regular}}>
                        Symptoms
                    </Text>
                 </View>
                  <View style={{ marginTop: 5 }}>
                    <Text style={{ color: COLORS.BLACK_1, fontSize: 12, fontFamily: FONTS.regular}}>
                        None
                    </Text>
                  </View>
                </View>
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      backgroundColor: COLORS.WHITE
    },
    header: {
      flex: 1,
      height: '100%',
      flexDirection: 'row',
    },
    headerExpanded: {
        flex: 0.7,
        height: '100%',
        flexDirection: 'row',
        backgroundColor: '#aab7bd',
        alignItems: 'center'
    },
    leftHeader: {
      height: '100%',
      flex: 0.4,
      justifyContent: 'center'
    },
    rightHeader: {
       flex: 0.6,
       height: '100%',
       alignItems: 'flex-end',
       justifyContent: 'center',
    },
    rightHeaderExpanded: {
        flexDirection: 'row',
        flex: 0.6,
        justifyContent: 'flex-end',
    },  
    title: {
      fontSize: 16,
      fontFamily: FONTS.medium,
      color: COLORS.GREEN_1,
    },
    date: {
      fontSize: 14,
      fontFamily: FONTS.regular,
      color: COLORS.BLACK_1,
    },
    arrowUp: {
      paddingLeft: 5,
    },
    details: {
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
    },
    detailsRow: {
      marginTop: 5,
    },
    detailsHeaderText: {
      fontSize: 14,
      fontFamily: FONTS.medium,
      color: COLORS.GREY_3,
      flex: 1,
    },
    detailsHeader: {
      flexDirection: 'row',
      marginTop: 7,
      justifyContent: 'center'
    },
    detailsSubText: {
      fontSize: 14,
      fontFamily: FONTS.regular,
      color: COLORS.BLACK_1,
      backgroundColor: 'white',
      flex: 0.5
    },
    icon: {
      width: 35, 
      height: 35,
      backgroundColor: '#5c735c', 
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center'
    }
});


export default InspectionDetails;