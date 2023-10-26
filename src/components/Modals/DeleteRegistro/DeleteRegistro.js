import React from 'react';
import { Modal, Portal, Text, Button } from 'react-native-paper';
import { View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import COLORS from '../../../theme/colors';
import FONTS from '../../../theme/fonts';
import { ContainedButton } from '../../../elements/Button';
import Icon from 'react-native-remix-icon';
import { DELETE_REGISTRO } from '../../../graphql/mutations/deleteRegistro';
import { GET_REGISTROS } from '../../../graphql/queries/index';
import { useMutation } from "@apollo/client";
import { useSnackbar } from '../../../context/SnackbarContext';

const DeleteRegistro = ({
    visible,
    onDismiss,
    colmenaId,
    registroId
}) => {
    
    const containerStyle = { backgroundColor: 'white', margin: 20, elevation: 10, borderRadius: 10, };
  
    const { showSnackbar } = useSnackbar();

    const [deleteRegistro, { loading }] = useMutation(DELETE_REGISTRO, {
        refetchQueries: [{ query: GET_REGISTROS, variables: { colmenaId } }],
    });


    const handleDeleteRegistro = async () => {
      const res = await deleteRegistro({ variables: { deleteRegistroId: registroId } });
        if (!res.data.errors) {
          showSnackbar("El registro se borro correctamente!", "", "success");
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
                        ¿Estas seguro que deseas borrar permanentemente el registro?
                    </Text>
                </View>

                <View style={{ paddingHorizontal: 15, flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                      <ContainedButton 
                         disabled={false}
                         onSubmit={() => handleDeleteRegistro()}
                         label="Borrar registro"
                         icon={ loading ? () => <ActivityIndicator color={COLORS.WHITE} /> : () => {} }
                      />
                    </View>
                </View>
            </View>
        </Modal>
      </Portal>
    )
}


export default DeleteRegistro;