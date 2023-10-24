import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";
import HideableCard from '../../components/HideableCard/index';
import { ScrollView } from 'react-native-gesture-handler';


const ToDos = ({
    tareas
}) => {
    const [openCardIndex, setOpenCard] = useState(null);
    return (
        <ScrollView style={{ flex: 0.3 }}>
            <View style={{ height: '100%', alignItems: 'center', paddingTop: 10 }}>
                {
                    tareas.map((tarea, index) => (
                        <HideableCard 
                          setOpenCard={setOpenCard} 
                          openCardIndex={openCardIndex} 
                          index={index}
                          header={tarea.tipoRegistro} 
                          date={tarea.fecha}
                          details={[
                            {
                                title: 'Notas',
                                moreInfo: tarea.descripcion || 'Sin notas'
                            },
                        ]}
                      />
                    ))
                }
            </View>
        </ScrollView>
    )
}


export default ToDos;

