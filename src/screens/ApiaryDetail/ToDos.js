import React, { useState } from 'react';
import { View, Text } from "react-native";
import HideableCard from '../../components/HideableCard/index';
import { ScrollView } from 'react-native-gesture-handler';
import DeleteTarea from '../../components/Modals/DeleteTarea/index';
import MoreOptionsDetailsColmena from '../../components/Modals/MoreOptionsDetailsColmena/index';
import FONTS from '../../theme/fonts';

const ToDos = ({
    tareas,
    colmenaId
}) => {
    const [openCardId, setOpenCardId] = useState(null);
    const [openDeleteTarea, setOpenDeleteTarea] = useState(false);
    const [openMoreOptionsModal, setMoreOptionsModal] = useState(false);

    return (
        <ScrollView style={{ flex: 0.3 }}>
            <View style={{ height: '100%', alignItems: 'center', paddingTop: 10 }}>
                {
                    
                    tareas.length 
                     ? tareas.map((tarea) => (
                        <HideableCard 
                          setOpenCard={setOpenCardId} 
                          openCardId={openCardId}
                          activeCardId={tarea.id}
                          descripcion={tarea.descripcion}
                          header={tarea.tipoRegistro} 
                          date={tarea.fecha}
                          details={[]}
                          seccionTarea={true}
                          setMoreOptionsModal={setMoreOptionsModal}
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
                openDeleteTarea
                ? <DeleteTarea
                    visible={openDeleteTarea}
                    onDismiss={() => setOpenDeleteTarea(false)}
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
                    handleDeletePress={() => setOpenDeleteTarea(true)}
                    buttonLabel="Borrar Tarea"
                />
                : null
            }

        </ScrollView>
    )
}


export default ToDos;

