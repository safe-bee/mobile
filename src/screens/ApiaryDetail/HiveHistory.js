import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";
import InspectionCard from '../../components/InspectionCard/index';
import HideableCard from '../../components/HideableCard/index';
import { ScrollView } from 'react-native-gesture-handler';
import FONTS from '../../theme/fonts';
import COLORS from '../../theme/colors';
import DeleteTarea from '../../components/Modals/DeleteTarea/index';
import MoreOptionsDetailsColmena from '../../components/Modals/MoreOptionsDetailsColmena/index';

const HiveHistory = ({
    registros
}) => {
  const [openCardId, setOpenCardId] = useState(null);
  const [openDeleteTareaModal, setOpenDeleteTareaModal] = useState(false);
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
                        
                        {registro.registros.map((registroDetalle) => 
                            registroDetalle.tipoRegistro === 'INSPECCION'
                            ?   <InspectionCard 
                                  setOpenCard={setOpenCard}
                                  details={details}
                                  date={registroDetalle?.fecha}
                                 />
                            :    <HideableCard 
                                    setOpenCard={setOpenCardId} 
                                    openCardId={openCardId}
                                    activeCardId={tarea.id}
                                    header={registroDetalle?.tipoRegistro} 
                                    date={registroDetalle?.fecha}
                                    details={registroDetalle?.detalles}
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
                  openDeleteTareaModal
                  ? <DeleteTarea
                      visible={openDeleteTareaModal}
                      onDismiss={() => setOpenDeleteTareaModal(false)}
                      colmenaId={colmenaId}
                      tareaId={openCardId}
                  />
                  : null
              }

              {
                    openMoreOptionsModal
                    ? <MoreOptionsDetailsColmena
                        visible={openMoreOptionsModal}
                        onDismiss={() => setMoreOptionsModal(false)}
                        handleDeletePress={() => setOpenDeleteTareaModal(true)} 
                    />
                    : null
              }
        </ScrollView>
    )
}


export default HiveHistory;

