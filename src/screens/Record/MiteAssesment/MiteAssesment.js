import React from 'react';
import { ScrollView, View, Text, ActivityIndicator } from "react-native";
import styled from 'styled-components/native';
import FONTS from '../../../theme/fonts';
import COLORS from '../../../theme/colors';
import TextInput from '../../../elements/TextInput/index';
import useCreateMiteAssesment from './useCreateMiteAssesment';
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

const MiteAssesment = () => {

  const { showSnackbar } = useSnackbar();
  
  const {
    fields,
    updateField,
    onSubmit,
    isVisitedForm,
    mutationLoading,
    tipoMetodos,
    apiarios,
    colmenas
  } = useCreateMiteAssesment();

  const handleNext = () => {
    if (fields?.colmena?.value) {
      onSubmit();
    } else {
      showSnackbar("Error de Validacion!", "No seleccionaste ninguna colmena, revisa haber creado una previamente.", "error");
    }
  };


  return (
      <Container>
        <MainContentContainer>
          <Content>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, height: 750, paddingHorizontal: 10 }}>
                  <View style={{ marginBottom: 20, marginTop: 40 }}>
                    <Text style={{ fontSize: 15, fontFamily: FONTS.medium }}>
                      Registrar Varroa
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
                      onChange={(value) => updateField({ name: "colmena", value })}
                      label='Tarea asociada'
                      value={fields?.colmena.value}
                      options={colmenas}
                    />
                  </View>

                   <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginVertical: 8 }}>
                      <Calendar 
                        onConfirm={(text) => updateField({ name: "fechaDeRegistro", value: text })}
                        label='Fecha del registro'
                        dateValue={fields?.fechaDeRegistro?.value}
                        />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', marginVertical: 5, zIndex: 99999999  }}>
                      <CustomPicker 
                        onChange={(value) => updateField({ name: "tipoMetodo", value })}
                        label='Metodo'
                        value={fields?.tipoMetodo?.value}
                        options={tipoMetodos}
                        />
                    </View>

                    <View style={{ flex: 1, marginVertical: 8 }}>
                      <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        label='Porcentaje'
                        onBlur={() => {}}
                        outlined={true}
                        onChangeText={(text) => updateField({ name: "porcentaje", value: text })}
                        value={fields?.porcentaje?.value}
                        keyboardType="numeric"
                      />
                    </View>

                    <View style={{ flex: 1, marginTop: 50, flexDirection: 'column', alignItems: 'center' }}>
                      <ContainedButton 
                        disabled={!isVisitedForm}
                        onSubmit={handleNext}
                        label="Crear Tarea"
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


export default MiteAssesment;