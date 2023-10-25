import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";
import InspectionCard from '../../components/InspectionCard/index';
import HideableCard from '../../components/HideableCard/index';
import { ScrollView } from 'react-native-gesture-handler';
import FONTS from '../../theme/fonts';
import COLORS from '../../theme/colors';
import { GET_COLMENA } from '../../graphql/queries';

const HiveHistory = ({
    registros
}) => {
   const [openCardIndex, setOpenCard] = useState(null);


   const details = [
        {
          "header": "poblacion",
          "value": true
        },
        {
          "header": "reina larvas",
          "value": true
        },
        {
          "header": "flora",
          "value": true
        },
        {
          "header": "alimento",
          "value": true
        },
        {
          "header": "plagas",
          "value": false
        }
    ];

    return (
        <ScrollView style={{ flex: 0.3 }}>
            <View style={{ height: '100%', alignItems: 'center', paddingTop: 10 }}>
                {
                 registros.map(registro => (
                    <>
                        <View style={{ marginVertical: 15 }} key={registro.monthYear}>
                            <Text style={{ textTransform: 'capitalize', color: COLORS.GREEN_2, fontSize: 17, fontWeight: 'bold', fontFamily: FONTS.medium }}>
                                {registro.monthYear}
                            </Text>
                        </View>
                        
                        {registro.registros.map((registroDetalle, index) => 
                            registroDetalle.tipoRegistro === 'INSPECCION'
                            ?   <InspectionCard 
                                  setOpenCard={setOpenCard}
                                  details={details}
                                  date={registroDetalle?.fecha}
                                 />
                            :    <HideableCard 
                                    setOpenCard={setOpenCard} 
                                    openCardIndex={openCardIndex} 
                                    index={index}
                                    header={registroDetalle?.tipoRegistro} 
                                    date={registroDetalle?.fecha}
                                    details={registroDetalle?.detalles}
                                />
                            )}
                    </>
                 ))
                }
            </View>
        </ScrollView>
    )
}


export default HiveHistory;

