import React from 'react';
import { ScrollView, View, Text, ActivityIndicator } from "react-native";
import styled from 'styled-components/native';
import FONTS from '../../../theme/fonts';
import COLORS from '../../../theme/colors';
import TextInput from '../../../elements/TextInput/index';
import useCreateWinterize from './useCreateWinterize';
import CustomPicker from '../../../elements/CustomPicker/index'
import Calendar from '../../../elements/Calendar/index'
import { ContainedButton } from '../../../elements/Button/Button'
import { MenuContainer, MainContentContainer, Content } from '../../sharedStyles';
import { useSnackbar } from '../../../context/SnackbarContext';
import Menu from '../../../components/Menu/index';


const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
`;

const Winterize = () => {

  const { showSnackbar } = useSnackbar();
  
  const {
    fields,
    updateField,
    onSubmit,
    isVisitedForm,
    mutationLoading,
    apiarios,
    colmenas,
    tareasAsociadas
  } = useCreateWinterize();

  const handleNext = () => {
      onSubmit();
  };


  return (
      <Container>
        <MainContentContainer>
          <Content>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, height: 670, paddingHorizontal: 10 }}>
                  <View style={{ marginBottom: 20, marginTop: 40 }}>
                    <Text style={{ fontSize: 15, fontFamily: FONTS.medium }}>
                      Registrar Hibernacion
                    </Text>
                  </View>

                  <View style={{ flex: 1, flexDirection: 'column', zIndex: 9999999  }}>
                    <CustomPicker 
                      onChange={(value) => updateField({ name: "apiario", value })}
                      label='Apiario'
                      value={fields?.apiario.value}
                      options={apiarios}
                      />
                  </View>

                  <View style={{ flex: 1, flexDirection: 'column', zIndex: 9999998  }}>
                    <CustomPicker 
                      onChange={(value) => updateField({ name: "colmena", value })}
                      label='Colmena'
                      value={fields?.colmena.value}
                      options={colmenas}
                    />
                  </View>

                  <View style={{ flex: 1, flexDirection: 'column', zIndex: 9999997  }}>
                    <CustomPicker 
                      onChange={(value) => updateField({ name: "tareaAsociada", value })}
                      label='Tarea asociada'
                      value={fields?.tareaAsociada.value}
                      options={tareasAsociadas}
                    />
                  </View>

                   <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                      <Calendar 
                        onConfirm={(text) => updateField({ name: "fechaDeRegistro", value: text })}
                        label='Fecha del registro'
                        dateValue={fields?.fechaDeRegistro?.value}
                        />
                    </View>

                    <View style={{ flex: 1 }}>
                      <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        label='Notas'
                        onBlur={() => {}}
                        outlined={true}
                        onChangeText={(text) => updateField({ name: "notas", value: text })}
                        value={fields?.notas?.value}
                        textArea
                      />
                    </View>


                    <View style={{ flex: 1, marginTop: 50, flexDirection: 'column', alignItems: 'center' }}>
                      <ContainedButton 
                        disabled={!isVisitedForm}
                        onSubmit={handleNext}
                        label="Crear Registro"
                        icon={ mutationLoading ? () => <ActivityIndicator color={COLORS.WHITE} /> : () => {} }
                      />
                    </View>

                </View>
              </ScrollView>

          </Content>
        </MainContentContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>


      </Container>
    )
}


export default Winterize;