import React, { useState } from 'react';
import { View, Text } from "react-native";
import HideableCard from '../../components/HideableCard/index';
import { ScrollView } from 'react-native-gesture-handler';
import DeleteTarea from '../../components/Modals/DeleteTarea/index';
import FONTS from '../../theme/fonts';

const ToDos = ({
    tareas,
    colmenaId
}) => {
    const [openCardIndex, setOpenCard] = useState(null);
    const [openDeleteTareaModal, setOpenDeleteTareaModal] = useState(false);
    const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

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
            {
                openDeleteTareaModal
                ? <DeleteTarea
                    visible={openDeleteTareaModal}
                    onDismiss={() => setOpenDeleteTareaModal(false)}
                    colmenaId={colmenaId}
                    tareaId={tareaSeleccionada.id}
                />
                : null
           }
        </ScrollView>
    )
}


export default ToDos;

