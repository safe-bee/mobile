import React, { useState } from 'react';
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';
import { View, Image, TouchableOpacity } from "react-native";
import COLORS from '../../../theme/colors';
import FONTS from '../../../theme/fonts';
import { ContainedButton, TextButton } from '../../../elements/Button';
import Icon from 'react-native-remix-icon';
import { useSnackbar } from '../../../context/SnackbarContext';

const MoreOptions = ({
    visible,
    onDismiss,
    handleDeletePress,
}) => {
    
    const containerStyle = { backgroundColor: 'white', margin: 20, elevation: 10, borderRadius: 10, };
  
    const onDeletePress = () => {
        handleDeletePress();
        onDismiss();
    };


    return (
      <Portal>
        <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={containerStyle}>
            <View style={{ height: 220 }}>


                <View style={{ alignItems: 'flex-end', paddingRight: 10, paddingTop: 10}}>
                  <TouchableOpacity onPress={() => onDismiss()}>
                    <Icon size={23} name="ri-close-line" color={COLORS.GREY} />
                  </TouchableOpacity>
                </View>

                <View style={{ paddingHorizontal: 15, flex: 0.5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                      <ContainedButton 
                         disabled={false}
                         onSubmit={onDeletePress}
                         label="Borrar apiario"
                         buttonColor={COLORS.RED_60}
                         labelColor={COLORS.WHITE}
                         icon={() => <Icon size={23} name="ri-delete-bin-line" color={COLORS.WHITE} /> }
                      />
                    </View>
                </View>

                <View style={{ paddingHorizontal: 15, flex: 0.5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                      <ContainedButton 
                         disabled={false}
                         onSubmit={onDeletePress}
                         label="Editar apiario"
                         buttonColor={COLORS.BLUE_2}
                         labelColor={COLORS.WHITE}
                         icon={() => <Icon size={23} name="ri-pencil-fill" color={COLORS.WHITE} /> }
                      />
                    </View>
                </View>

            </View>
        </Modal>
      </Portal>
    )
}


export default MoreOptions;