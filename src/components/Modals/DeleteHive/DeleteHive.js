import React, { useState } from 'react';
import { Modal, Portal, Text, Button } from 'react-native-paper';
import { View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../../theme/colors';
import FONTS from '../../../theme/fonts';
import { ContainedButton, TextButton } from '../../../elements/Button';
import Icon from 'react-native-remix-icon';
import { ROUTES } from '../../../constants';
import { DELETE_COLMENA } from '../../../graphql/mutations/deleteColmena';
import { GET_APIARIOS } from '../../../graphql/queries/index';
import { useMutation } from "@apollo/client";
import { useSnackbar } from '../../../context/SnackbarContext';

const DeleteHive = ({
    visible,
    onDismiss,
    colmenaId
}) => {
    
    const containerStyle = { backgroundColor: 'white', margin: 20, elevation: 10, borderRadius: 10, };
    const navigation = useNavigation();
  
    const { showSnackbar } = useSnackbar();

    const [deleteColmena, { loading }] = useMutation(DELETE_COLMENA, {
        refetchQueries: [{ query: GET_APIARIOS }],
    });


    const handleDeleteColmena = async () => {
      const res = await deleteColmena({ variables: { deleteColmenaId: colmenaId } });
        if (!res.data.errors) {
          showSnackbar("La colmena se borro correctamente!", "", "success");
          onDismiss();
          navigation.navigate(ROUTES.HOME);
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
                        Si borras esta, toda la informacion va ser permanentemente perdida.
                        ¿Estas seguro que queres hacerlo?
                    </Text>
                </View>

                <View style={{ paddingHorizontal: 15, flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                      <ContainedButton 
                         disabled={false}
                         onSubmit={() => handleDeleteColmena()}
                         label="Borrar colmena"
                         icon={ loading ? () => <ActivityIndicator color={COLORS.WHITE} /> : () => {} }
                      />
                    </View>
                </View>
            </View>
        </Modal>
      </Portal>
    )
}


export default DeleteHive;