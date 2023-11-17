import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";
import InspectionCard from '../../components/InspectionCard/index';
import HideableCard from '../../components/HideableCard/index';
import { ScrollView } from 'react-native-gesture-handler';
import FONTS from '../../theme/fonts';
import COLORS from '../../theme/colors';
import DeleteRegistro from '../../components/Modals/DeleteRegistro/index';
import MoreOptionsDetailsColmena from '../../components/Modals/MoreOptionsDetailsColmena/index';

const HiveHistory = ({
    registros,
    colmenaId
}) => {
  const [openCardId, setOpenCardId] = useState(null);
  const [openDeleteRegistroModal, setOpenDeleteRegistroModal] = useState(false);
  const [openMoreOptionsModal, setMoreOptionsModal] = useState(false);

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
                 
                 registros.length 
                  ? registros.map(registro => (
                    <>
                        <View style={{ marginVertical: 15 }} key={registro.monthYear}>
                            <Text style={{ textTransform: 'capitalize', color: COLORS.GREEN_2, fontSize: 17, fontWeight: 'bold', fontFamily: FONTS.medium }}>
                                {registro.monthYear}
                            </Text>
                        </View>
                        
                        {
                        
                        registro.registros.map((registroDetalle) => 
                            registroDetalle.tipoRegistro === 'INSPECCION'
                            ?   <InspectionCard 
                                  details={details}
                                  date={registroDetalle?.fecha}
                                  inspeccionId={registroDetalle?.id}
                                 />
                            :    <HideableCard 
                                    setOpenCard={setOpenCardId} 
                                    openCardId={openCardId}
                                    activeCardId={registroDetalle.id}
                                    header={registroDetalle?.tipoRegistro} 
                                    date={registroDetalle?.fecha}
                                    details={registroDetalle?.detalles}
                                    setMoreOptionsModal={setMoreOptionsModal}
                                />
                            )}
                    </>
                 ))
                 : 
                  <View style={{ marginTop: 10 }}>
                      <Text style={{ fontSize: 15, fontFamily: FONTS.light }}>
                          No hay registros para mostrar
                      </Text>
                  </View>
                }
            </View>

              {
                  openDeleteRegistroModal
                  ? <DeleteRegistro
                      visible={openDeleteRegistroModal}
                      onDismiss={() => setOpenDeleteRegistroModal(false)}
                      colmenaId={colmenaId}
                      registroId={openCardId}
                  />
                  : null
              }

              {
                    openMoreOptionsModal
                    ? <MoreOptionsDetailsColmena
                        visible={openMoreOptionsModal}
                        onDismiss={() => setMoreOptionsModal(false)}
                        handleDeletePress={() => setOpenDeleteRegistroModal(true)} 
                        buttonLabel="Borrar Registro"
                    />
                    : null
              }
        </ScrollView>
    )
}


export default HiveHistory;

