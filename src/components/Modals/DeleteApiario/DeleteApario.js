import React, { useState } from 'react';
import { Modal, Portal, Text, Button } from 'react-native-paper';
import { View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { useUserContext } from '../../../context/UserContext';
import COLORS from '../../../theme/colors';
import FONTS from '../../../theme/fonts';
import { ContainedButton, TextButton } from '../../../elements/Button';
import Icon from 'react-native-remix-icon';
import { DELETE_APIARIO } from '../../../graphql/mutations/deleteApiario';
import { GET_APIARIOS } from '../../../graphql/queries/index';
import { useMutation } from "@apollo/client";
import { useSnackbar } from '../../../context/SnackbarContext';

const DeleteApario = ({
    visible,
    onDismiss,
    selectedApiario,
}) => {
    
  const { currentUser } = useUserContext();
    const containerStyle = { backgroundColor: 'white', margin: 20, elevation: 10, borderRadius: 10, };
  
    const { showSnackbar } = useSnackbar();

    const [deleteApiario, { loading }] = useMutation(DELETE_APIARIO, {
      refetchQueries: [{ query: GET_APIARIOS,  variables: { usuarioId: currentUser?.usuarioId } }],
    });


    const handleDeleteApiario = async () => {
      const res = await deleteApiario({ variables: { deleteApiarioId: selectedApiario.id } });
        if (!res.data.errors) {
          showSnackbar("El apiario se borro correctamente!", "", "success");
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
                        Si borras el apiario, toda la informacion va ser permanentemente perdida.
                        ¿Estas seguro que queres hacerlo?
                    </Text>
                </View>

                <View style={{ paddingHorizontal: 15, flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                      <ContainedButton 
                         disabled={false}
                         onSubmit={() => handleDeleteApiario()}
                         label="Borrar apiario"
                         icon={ loading ? () => <ActivityIndicator color={COLORS.WHITE} /> : () => {} }
                      />
                    </View>
                </View>
            </View>
        </Modal>
      </Portal>
    )
}


export default DeleteApario;