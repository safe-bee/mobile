import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Image } from "react-native";
import { Card } from 'react-native-paper';
import COLORS from '../../theme/colors';
import FONTS from '../../theme/fonts';
import Icon from 'react-native-remix-icon';



const ApiarioCard = ({ apiario }) => {
    return (
      <View style={{ flex: 1 }}>
          <Card style={{ height: 210, flexDirection: 'row' }}>
            <Card.Content
                style={{
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1000,
                }}>
               <View style={{ alignItems: 'center', marginBottom: 5, }}>
                 <Text style={{ fontSize: 16, fontFamily: FONTS.medium }}>
                    {apiario.nombreApiario}
                 </Text>
               </View>

            <ScrollView
             keyboardShouldPersistTaps="handled"
            >
                {apiario.colmenas.map( colmena => (
                    <View style={{ alignItems: 'center', borderRadius: 5, backgroundColor: 'rgba(173, 216, 230, 0.5)', flex: 0.3, borderRadius: 8, marginTop: 10, flexDirection: 'row' }}>
                        <View style={{ flex: 0.2, alignItems: 'center' }}>
                            <Image
                              source={require('../../../assets/hive4.png')} 
                              style={{ width: 50, height: 50 }} 
                            />
                        </View>
                        <View style={{ flex: 0.8, flexDirection: 'row' }}>
                            <Text style={{ fontSize: 15,fontFamily: FONTS.regular, color: COLORS.BLACK_2 }}>
                                {colmena.nombreColmena}
                            </Text>
                            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => {}}>
                                <Icon size={19} name="ri-pencil-fill" color={COLORS.BLACK_2} />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
            
            <View style={{ paddingVertical: 5 }}>
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => {}}>
                    <Icon size={30} name="ri-add-circle-line" color={COLORS.YELLOW} />
                </TouchableOpacity>
            </View>
    
            </Card.Content>
            <Card.Cover
              source={require('../../../assets/header.jpeg')}
              style={{ width: '100%', height: '100%', aspectRatio: 33 / 18 }}
              resizeMode='cover'
             />
          </Card>
      </View>
    )
}

export default ApiarioCard;