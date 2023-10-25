import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { Card } from 'react-native-paper';
import { ROUTES } from '../../constants';
import COLORS from '../../theme/colors';
import FONTS from '../../theme/fonts';
import Icon from 'react-native-remix-icon';
import { formatDate } from '../../utils/helpers';


const InspectionCard = ({
    details,
    date
}) => {
  const navigation = useNavigation();

  const getInspectionIcon = (inspectionStep) => {
    let icon;

    if (inspectionStep === 'plagas') {
        icon = <Icon name="ri-emotion-happy-line" size={22} color={COLORS.WHITE} />;
    } else if (inspectionStep === 'poblacion') {
        icon = <Icon name="ri-vip-crown-line" size={21} color={COLORS.WHITE} />;
    } else if (inspectionStep === 'reina larvas') {
        icon =  <Icon name="ri-virus-line" size={22} color={COLORS.WHITE} />;
    } else if (inspectionStep === 'flora') {
        icon = <Icon name="ri-empathize-line" size={22} color={COLORS.WHITE} />;
    } else {
        icon = <Icon name="ri-leaf-line" size={22} color={COLORS.WHITE} />;
    }

    return icon;
  }


  return (
    <Card
        style={{
            width: '80%',
            height: (70 + 49*5 ),
            marginTop: 12
        }}
    >
        <Card.Content
            style={{ height: '100%', backgroundColor: '#aab7bd' }}
        >
            <View style={styles.container}>
                
                <View style={styles.headerExpanded}>
                    <View style={styles.leftHeader}>
                        <Text style={styles.title}>Inspeccion</Text>
                        <Text style={styles.date}>{formatDate(date)}</Text>
                    </View>
                    
                    <View style={styles.rightHeaderExpanded}>
                        <TouchableOpacity style={styles.arrowUp} onPress={() => navigation.navigate(ROUTES.INSPECTION_DETAILS)}>
                            <Icon name="ri-arrow-right-s-line" size={30} color={COLORS.GREY_3} />
                        </TouchableOpacity>
                    </View>
                </View>
                
                <Card.Content 
                >
                    {
                        details?.map(detail => {
                          let icon = getInspectionIcon(detail.header)
                          return (
                            <View style={styles.detailsHeader}>
                                <View style={{ alignItems: 'center', flex: 0.3 }}>
                                    <View style={detail.value ? styles.icon : { ...styles.icon, ...styles.disabled }}>
                                        {icon}
                                    </View>
                                </View>
                                <View style={{ marginTop: 8, flex: 0.7 }}>
                                    <Text style={styles.detailsHeaderText}>
                                        {detail.header}
                                    </Text>
                                </View>
                            </View>
                          )})
                    }
                </Card.Content>

                </View>
            
            
        </Card.Content>
    </Card>
  )
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
      textTransform: 'capitalize'
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
    disabled: {
      backgroundColor: '#b5725e', 
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


export default InspectionCard;