import React from 'react';
import styled from 'styled-components/native';
import { ScrollView, View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { Card } from 'react-native-paper';
import COLORS from '../../theme/colors';
import { formatToReadableData, fullDate } from '../../utils/helpers';
import FONTS from '../../theme/fonts';
import Icon from 'react-native-remix-icon';

export const ContentContainer = styled.View`
  flex: 0.9;
`;

export const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
`;


const InspectionCardDetails = ({
  estadoCajon,
  estadoPoblacion,
  estadoReina,
  estadoFloraCircundante,
  estadoAlimento,
  estadoPlagas,
  fechaInspeccion,
  detalles,
}) => {
  return (
    <Container>
        <View style={{ flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                 <Text style={{ color: COLORS.GREEN_2, fontSize: 24, fontWeight: 'bold', fontFamily: FONTS.medium}}>
                    Resumen de inspeccion
                </Text>
            </View> 
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                 <Text style={{ color: COLORS.BLACK_1, fontSize: 14, fontWeight: 'bold', fontFamily: FONTS.medium}}>
                    {fullDate(fechaInspeccion)}
                </Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Card style={{ width: '80%' }}>
                    <Card.Content>
                        <View style={styles.detailsHeader}>
                            <View style={{ alignItems: 'center', flex: 0.3 }}>
                                <View style={estadoCajon ? styles.icon : { ...styles.icon, ...styles.disabled }}>
                                    <Icon name="ri-emotion-happy-line" size={22} color={COLORS.WHITE} />
                                </View>
                            </View>
                            <View style={{ marginTop: 8, flex: 0.7 }}>
                                <Text style={styles.detailsHeaderText}>
                                    Estado del cajon 
                                </Text>
                            </View>
                        </View>

                        <View style={styles.detailsHeader}>
                            <View style={{ alignItems: 'center', flex: 0.3 }}>
                                <View style={estadoPoblacion ? styles.icon : { ...styles.icon, ...styles.disabled }}>
                                    <Icon name="ri-vip-crown-line" size={22} color={COLORS.WHITE} />
                                </View>
                            </View>
                            <View style={{ marginTop: 8, flex: 0.7  }}>
                                <Text style={styles.detailsHeaderText}>
                                    Estado poblacion 
                                </Text>
                            </View>
                        </View>

                        <View style={styles.detailsHeader}>
                            <View style={{ alignItems: 'center', flex: 0.3 }}>
                              <View style={estadoReina ? styles.icon : { ...styles.icon, ...styles.disabled }}>
                                    <Icon name="ri-virus-line" size={22} color={COLORS.WHITE} />
                                </View>
                            </View>
                            <View style={{ marginTop: 8, flex: 0.7 }}>
                                <Text style={styles.detailsHeaderText}>
                                    Estado de reina y larvas 
                                </Text>
                            </View>
                        </View>

                        <View style={styles.detailsHeader}>
                            <View style={{ alignItems: 'center', flex: 0.3 }}>
                                <View style={estadoFloraCircundante ? styles.icon : { ...styles.icon, ...styles.disabled }}>
                                    <Icon name="ri-empathize-line" size={22} color={COLORS.WHITE} />
                                </View>
                            </View>
                            <View style={{ marginTop: 8, flex: 0.7 }}>
                                <Text style={styles.detailsHeaderText}>
                                  Estado flora circundante
                                </Text>
                            </View>
                        </View>

                        <View style={styles.detailsHeader}>
                            <View style={{ alignItems: 'center', flex: 0.3 }}>
                                <View style={estadoAlimento ? styles.icon : { ...styles.icon, ...styles.disabled }}>
                                    <Icon name="ri-leaf-line" size={22} color={COLORS.WHITE} />
                                </View>
                            </View>
                            <View style={{ marginTop: 8, flex: 0.7 }}>
                                <Text style={styles.detailsHeaderText}>
                                    Estado del alimento 
                                </Text>
                            </View>
                        </View>
                        
                        <View style={styles.detailsHeader}>
                            <View style={{ alignItems: 'center', flex: 0.3 }}>
                                <View style={estadoPlagas ? styles.icon : { ...styles.icon, ...styles.disabled }}>
                                    <Icon name="ri-leaf-line" size={22} color={COLORS.WHITE} />
                                </View>
                            </View>
                            <View style={{ marginTop: 8, flex: 0.7 }}>
                                <Text style={styles.detailsHeaderText}>
                                    Estado de plagas 
                                </Text>
                            </View>
                        </View>
                    </Card.Content>    
                </Card>
            </View>
            
            <View style={{ marginTop: 35, marginLeft: 30 }}>
                {
                  detalles.length
                  ?
                  <>
                    <Text style={{ color: COLORS.BLACK_1, fontSize: 17, fontWeight: 'bold', fontFamily: FONTS.medium}}>
                        Detalles
                    </Text>
                      {
                        detalles.map( detalle => {
                          return (
                          <View style={{ marginTop: 10 }}>
                            <View>
                                <Text style={{ color: COLORS.GREEN_2, fontSize: 12, textTransform: 'capitalize', fontFamily: FONTS.regular}}>
                                    {detalle.label}
                                </Text>
                            </View>
                              <View style={{ marginTop: 5 }}>
                                <Text style={{ color: COLORS.BLACK_1, fontSize: 12, textTransform: 'capitalize', fontFamily: FONTS.regular}}>
                                  {formatToReadableData(detalle.value)}
                                </Text>
                              </View>
                          </View>
                        )})
                      }
                  </>
                  : ''
                }
                
                
                
            </View>

        </View>

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
      flex: 1,
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
    },
    disabled: {
      backgroundColor: '#b5725e', 
    },
});


export default InspectionCardDetails;