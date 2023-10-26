import React, { useState } from 'react';
import { View, Text } from "react-native";
import HideableCard from '../../components/HideableCard/index';
import { ScrollView } from 'react-native-gesture-handler';
import COLORS from '../../theme/colors';
import FONTS from '../../theme/fonts';

const ToDos = ({
    tareas
}) => {
    const [openCardIndex, setOpenCard] = useState(null);
    return (
        <ScrollView style={{ flex: 0.3 }}>
            <View style={{ height: '100%', alignItems: 'center', paddingTop: 10 }}>
                
                
                {
                    
                    tareas.length 
                     ? tareas.map((tarea, index) => (
                        <HideableCard 
                          setOpenCard={setOpenCard} 
                          openCardIndex={openCardIndex}
                          descripcion={tarea.descripcion}
                          index={index}
                          header={tarea.tipoRegistro} 
                          date={tarea.fecha}
                          details={[]}
                          seccionTarea={true}
                      />
                    ))
                    : 
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 15, fontFamily: FONTS.light }}>
                            No hay tareas para mostrar
                        </Text>
                    </View>
                }
            </View>
        </ScrollView>
    )
}


export default ToDos;

