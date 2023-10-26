import React from 'react';
import { Modal, Portal, Text, Button } from 'react-native-paper';
import { View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import COLORS from '../../../theme/colors';
import FONTS from '../../../theme/fonts';
import { ContainedButton } from '../../../elements/Button';
import Icon from 'react-native-remix-icon';
import { DELETE_TAREA } from '../../../graphql/mutations/deleteTarea';
import { GET_COLMENA } from '../../../graphql/queries/index';
import { useMutation } from "@apollo/client";
import { useSnackbar } from '../../../context/SnackbarContext';

const DeleteTarea = ({
    visible,
    onDismiss,
    colmenaId,
    tareaId
}) => {
    
    const containerStyle = { backgroundColor: 'white', margin: 20, elevation: 10, borderRadius: 10, };
  
    const { showSnackbar } = useSnackbar();

    const [deleteTarea, { loading }] = useMutation(DELETE_TAREA, {
        refetchQueries: [{ query: GET_COLMENA, variables: { id: colmenaId } }],
    });


    const handleDeleteTarea = async () => {
      const res = await deleteTarea({ variables: { deleteTareaId: tareaId } });
        if (!res.data.errors) {
          showSnackbar("La tarea se borro correctamente!", "", "success");
          onDismiss();
      } else {
          showSnackbar("Ha habido un error!", "", "error");
      }
    }

    return (
      <Portal>
        <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={containerStyle}>
            <View style={{ height: 320 }}>
                <View style={{ alignItems: 'flex-end', paddingRight: 10, paddingTop: 10}}>
                  <TouchableOpacity onPress={() => onDismiss()}>
                    <Icon size={23} name="ri-close-line" color={COLORS.GREY} />
                  </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center'}}>
                    <Image
                      source={require('../../../../assets/bee.png')} 
                      style={{ width: 130, height: 130 }} 
                    />
                </View>
                <View style={{ padding: 13, alignItems: 'center' }}>
                    <Text style={{ fontFamily: FONTS.light, color: COLORS.BLACK_2 }}>
                        ¿Estas seguro que deseas borrar permanentemente la tarea?
                    </Text>
                </View>

                <View style={{ paddingHorizontal: 15, flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                      <ContainedButton 
                         disabled={false}
                         onSubmit={() => handleDeleteTarea()}
                         label="Borrar tarea"
                         icon={ loading ? () => <ActivityIndicator color={COLORS.WHITE} /> : () => {} }
                      />
                    </View>
                </View>
            </View>
        </Modal>
      </Portal>
    )
}


export default DeleteTarea;