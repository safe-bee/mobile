import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, TouchableOpacity, Text, Image } from "react-native";
import { Card } from 'react-native-paper';
import { ROUTES } from '../../constants';
import COLORS from '../../theme/colors';
import FONTS from '../../theme/fonts';
import Icon from 'react-native-remix-icon';


const ApiarioCard = ({ apiario, setSelectedApiario, setMoreOptionsPress }) => {
    const navigation = useNavigation();
    
    const onMoreOptionsPress = () => {
        setSelectedApiario(apiario);
        setMoreOptionsPress(true);
    };

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
                    {apiario.nombre}
                 </Text>
               </View>

            <ScrollView
              keyboardShouldPersistTaps="handled"
            >
            {
                apiario.colmenas.length ?
                    apiario.colmenas.map( colmena => (
                    <TouchableOpacity key={colmena.id} onPress={() => navigation.navigate(ROUTES.APIARY_DETAIL, { id: colmena.id })} style={{ alignItems: 'center', borderRadius: 5, backgroundColor: 'rgba(173, 216, 230, 0.5)', flex: 0.3, borderRadius: 8, marginTop: 10, flexDirection: 'row' }}>
                        <View style={{ flex: 0.2, alignItems: 'center' }}>
                            <Image
                              source={require('../../../assets/hive4.png')} 
                              style={{ width: 50, height: 50 }} 
                            />
                        </View>
                        <View style={{ flex: 0.8, flexDirection: 'row' }}>
                            <Text style={{ fontSize: 15,fontFamily: FONTS.regular, color: COLORS.BLACK_2 }}>
                                {colmena.nombre}
                            </Text>
                            <TouchableOpacity style={{ marginLeft: 10 }}>
                                <Icon size={19} name="ri-pencil-fill" color={COLORS.BLACK_2} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )) 
                : <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{ paddingLeft: 10, fontSize: 15 ,fontFamily: FONTS.medium, color: COLORS.BLACK_1 }}>
                        Parece que no tenes configurada ninguna colmena ahora. Ahora que tu apiario fue creado, podes empezar creando tus colmenas!
                    </Text>
                </View>
             }
            </ScrollView>
            
            <View style={{ paddingVertical: 5, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity style={{ marginLeft: 10, flexDirection: 'row', alignItems: 'center', }} onPress={() => navigation.navigate(ROUTES.CREATE_HIVE, { apiarioId: apiario.id })}>
                        <View >
                            <Icon size={30} name="ri-add-circle-line" color={COLORS.YELLOW} />
                        </View>
                        <View style={{ paddingLeft: 5, fontSize: 15 }}>
                          <Text style={{ fontFamily: FONTS.medium, color: COLORS.YELLOW }}>
                                Agregar Colmena
                          </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 10, flexDirection: 'row', alignItems: 'center', }} onPress={() => onMoreOptionsPress()}>
                        <View>
                            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.WHITE, borderRadius: 40, height: 23, width: 23 }}>
                                <Icon size={18} name="ri-more-fill" color={COLORS.BLACK_1} />
                            </View>
                        </View>
                        <View style={{ paddingLeft: 5, fontSize: 15 }}>
                          <Text style={{ fontFamily: FONTS.medium, color: COLORS.WHITE }}>
                                Mas opciones
                          </Text>
                        </View>
                    </TouchableOpacity>
                </View>
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