import React from 'react';
import { ScrollView, View, Text, ActivityIndicator } from "react-native";
import styled from 'styled-components/native';
import FONTS from '../../../theme/fonts';
import COLORS from '../../../theme/colors';
import TextInput from '../../../elements/TextInput/index';
import useCreateTreatment from './useCreateTreatment';
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

const Treatment = () => {

  const { showSnackbar } = useSnackbar();
  
  const {
    fields,
    updateField,
    onSubmit,
    isVisitedForm,
    mutationLoading,
    tipoPlagas,
    apiarios,
    colmenas,
    tareasAsociadas
  } = useCreateTreatment();

  const handleNext = () => {
      onSubmit();
  };


  return (
      <Container>
        <MainContentContainer>
          <Content>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, height: 950, paddingHorizontal: 10 }}>
                  <View style={{ marginBottom: 20, marginTop: 40 }}>
                    <Text style={{ fontSize: 15, fontFamily: FONTS.medium }}>
                      Registrar tratamiento
                    </Text>
                  </View>

                  <View style={{ flex: 1, flexDirection: 'column', marginVertical: 8, zIndex: 9999999  }}>
                    <CustomPicker 
                      onChange={(value) => updateField({ name: "apiario", value })}
                      label='Apiario'
                      value={fields?.apiario.value}
                      options={apiarios}
                      />
                  </View>

                  <View style={{ flex: 1, flexDirection: 'column', marginVertical: 8, zIndex: 9999998  }}>
                    <CustomPicker 
                      onChange={(value) => updateField({ name: "colmena", value })}
                      label='Colmena'
                      value={fields?.colmena.value}
                      options={colmenas}
                    />
                  </View>

                  <View style={{ flex: 1, flexDirection: 'column', marginVertical: 8, zIndex: 9999997  }}>
                    <CustomPicker 
                      onChange={(value) => updateField({ name: "tareaAsociada", value })}
                      label='Tarea asociada'
                      value={fields?.tareaAsociada.value}
                      options={colmenas}
                    />
                  </View>

                   <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginVertical: 8 }}>
                      <Calendar 
                        onConfirm={(text) => updateField({ name: "fechaDeTarea", value: text })}
                        label='Fecha de la tarea'
                        dateValue={fields?.fechaDeTarea?.value}
                        />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', marginVertical: 5, zIndex: 99999999  }}>
                      <CustomPicker 
                        onChange={(value) => updateField({ name: "tipoPlaga", value })}
                        label='Plaga tratada'
                        value={fields?.tipoPlaga?.value}
                        options={tipoPlagas}
                        />
                    </View>


                    <View style={{ flex: 1, marginVertical: 8 }}>
                      <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        label='Producto'
                        onBlur={() => {}}
                        outlined={true}
                        onChangeText={(text) => updateField({ name: "producto", value: text })}
                        value={fields?.producto?.value}
                      />
                    </View>

                    <View style={{ flex: 1, marginVertical: 8 }}>
                      <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        label='Dosis'
                        onBlur={() => {}}
                        outlined={true}
                        onChangeText={(text) => updateField({ name: "dosis", value: text })}
                        value={fields?.dosis?.value}
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


export default Treatment;