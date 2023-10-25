import React from 'react';
import { ScrollView, View, Text, ActivityIndicator } from "react-native";
import styled from 'styled-components/native';
import FONTS from '../../../theme/fonts';
import COLORS from '../../../theme/colors';
import TextInput from '../../../elements/TextInput/index';
import useCreateDocumentFlora from './useCreateDocumentFlora';
import CustomPicker from '../../../elements/CustomPicker/index'
import Calendar from '../../../elements/Calendar/index'
import { ContainedButton } from '../../../elements/Button/Button'
import { MenuContainer, MainContentContainer, Content } from '../../sharedStyles';
import Menu from '../../../components/Menu/index';


const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
`;

const DocumentFlora = () => {

  
  const {
    fields,
    updateField,
    onSubmit,
    isVisitedForm,
    mutationLoading,
    apiarios,
    colmenas,
    tareasAsociadas
  } = useCreateDocumentFlora();

  const handleNext = () => {
      onSubmit();
  };


  return (
      <Container>
        <MainContentContainer>
          <Content>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, height: 920, paddingHorizontal: 10 }}>
                  <View style={{ marginBottom: 20, marginTop: 40 }}>
                    <Text style={{ fontSize: 15, fontFamily: FONTS.medium }}>
                      Registrar Alimentacion
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
                      options={colmenas}
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
                        label='Alimento'
                        onBlur={() => {}}
                        outlined={true}
                        onChangeText={(text) => updateField({ name: "alimento", value: text })}
                        value={fields?.alimento?.value}
                        error={fields?.alimento?.error}
                      />
                    </View>

                    <View style={{ flex: 1 }}>
                      <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        label='Cantidad'
                        onBlur={() => {}}
                        outlined={true}
                        onChangeText={(text) => updateField({ name: "cantidadAlimentacion", value: text })}
                        value={fields?.cantidadAlimentacion?.value}
                        error={fields?.cantidadAlimentacion?.error}
                        keyboardType="numeric"
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


export default DocumentFlora;