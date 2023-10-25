import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { Card } from 'react-native-paper';
import { ROUTES } from '../../constants';
import COLORS from '../../theme/colors';
import FONTS from '../../theme/fonts';
import Icon from 'react-native-remix-icon';
import { formatDate } from '../../utils/helpers';

const HideableCard = ({
    setOpenCard,
    openCardIndex,
    index,
    header,
    date,
    details,
}) => {
  

  const handlePressDetails = () => {
    if (index === openCardIndex) {
        setOpenCard(null);
    } else {
        setOpenCard(index);
    }
  };

  const calculateCardHeight = () => {
    const minHeight = 70;
    const additionalHeight = details.length ? details.length * 50 : 45;
    return openCardIndex === index ? minHeight + additionalHeight : minHeight;
  };


  return (
    <Card
        style={{
            width: '80%',
            height: calculateCardHeight(),
            marginTop: 12
        }}
    >
        <Card.Content
            style={{ height: '100%' }}
        >
            {
                openCardIndex === index ?
                (
                    <View style={styles.container}>
                        
                        <View style={styles.headerExpanded}>
                            <View style={styles.leftHeader}>
                                <Text style={styles.title}>{header}</Text>
                                <Text style={styles.date}>{formatDate(date)}</Text>
                            </View>
                            
                            <View style={styles.rightHeaderExpanded}>
                                <TouchableOpacity>
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

                                <TouchableOpacity style={styles.arrowUp} onPress={handlePressDetails}>
                                    <Icon name="ri-arrow-up-s-line" size={30} color={COLORS.GREY_3} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.details}>
                            {
                                details.length 
                                  ? details.map(detail => (
                                      <View style={styles.detailsRow}>
                                          <View style={styles.detailsHeader}>
                                              <Text style={styles.detailsHeaderText}>
                                                  {detail.header}
                                              </Text>
                                          </View>
                                          <View style={styles.detailsHeader}>
                                              <Text style={styles.detailsSubText}>
                                                  {detail.value}
                                              </Text>
                                          </View>
                                      </View>
                                  ))
                                : <View style={styles.noNotes}>
                                      <View style={styles.detailsHeader}>
                                          <Text style={styles.detailsSubText}>
                                              Sin notas adicionales
                                          </Text>
                                      </View>
                                  </View>
                            }
                        </View>
                      </View>
                ) : 
                (
                    <View style={styles.container}>
                        
                        <View style={styles.header}>
                            <View style={styles.leftHeader}>
                                <Text style={styles.title}>{header}</Text>
                                <Text style={styles.date}>{formatDate(date)}</Text>
                            </View>
                            <View style={styles.rightHeader}>
                                <TouchableOpacity onPress={handlePressDetails}>
                                    <Icon name="ri-arrow-down-s-line" size={30} color={COLORS.GREY_3} />
                                </TouchableOpacity>
                            </View>
                        </View>

                      </View>
                )
            }
            
            
        </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
    },
    header: {
      flex: 1,
      height: '100%',
      flexDirection: 'row',
    },
    headerExpanded: {
        flex: 0.65,
        height: '100%',
        flexDirection: 'row',
    },
    leftHeader: {
      height: '100%',
      flex: 1,
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
      textTransform: 'capitalize'
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
      marginTop: 15
    },
    noNotes : {
      marginTop: 20, 
    },
    detailsRow: {
      marginTop: 5
    },
    detailsHeaderText: {
      fontSize: 14,
      fontFamily: FONTS.medium,
      color: COLORS.PINK_1,
    },
    detailsSubText: {
      fontSize: 14,
      fontFamily: FONTS.regular,
      color: COLORS.BLACK_1,
    }
});


export default HideableCard;