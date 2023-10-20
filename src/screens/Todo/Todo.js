import React from 'react';
import { ScrollView, View, Text, ActivityIndicator } from "react-native";
import styled from 'styled-components/native';
import FONTS from '../../theme/fonts';
import COLORS from '../../theme/colors';
import TextInput from '../../elements/TextInput/index';
import CustomPicker from '../../elements/CustomPicker/index'
import Calendar from '../../elements/Calendar/index'
import { ContainedButton } from '../../elements/Button/Button'
import { MenuContainer, MainContentContainer, Content } from '../../screens/sharedStyles';
import { useSnackbar } from '../../context/SnackbarContext';
import Menu from '../../components/Menu/index';

const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
`;

const Todo = () => {

  const { showSnackbar } = useSnackbar();

  const handleNext = () => {
    if (wizardState?.fields?.hiveType?.value && wizardState?.fields?.hiveName?.value) {
      setWizardPage('HiveAdvanced');
    } else {
      showSnackbar("Error de Validacion!", "Corriga los siguientes errores", "error");
    }
  };

  const tipoAlerta = [
    { value: 'COSECHA', label: 'Cosecha' },
    { value: 'TRATAMIENTOS', label: 'Tratamientos' },
    { value: 'HIBERNACION', label: 'Hibernacion' },
    { value: 'MUERTE', label: 'Muerte' },
    { value: 'ALIMENTACION', label: 'Alimentacion' },
    { value: 'TRATAMIENTO_VARROA', label: 'Tratamiento Varroa' },
    { value: 'CAMBIO_DE_CUADROS', label: 'Cambio de cuadros' },
  ];

  const apiarios = [
    { value: 'APIARIO1', label: 'Apiario 1' },
  ];

  const colmenas = [
    { value: 'COLMENA1', label: 'Colmena 1' },
  ];



  return (
      <Container>
        <MainContentContainer>
          <Content>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, height: 580, paddingHorizontal: 10 }}>
                  <View style={{ marginBottom: 20, marginTop: 40 }}>
                    <Text style={{ fontSize: 15, fontFamily: FONTS.medium }}>
                      Creacion de Alerta
                    </Text>
                  </View>

                  <View style={{ flex: 1, flexDirection: 'column', marginVertical: 5, zIndex: 99999999  }}>
                      <CustomPicker 
                        onChange={(value) => wizardStateSetters?.updateField({ name: "hiveType", value })}
                        label='Tipo de Alerta'
                        value={{ value: 'COSECHA', label: 'Cosecha' }}
                        options={tipoAlerta}
                        />
                  </View>

                  <View style={{ flex: 1, flexDirection: 'column', marginVertical: 15, zIndex: 9999999  }}>
                    <CustomPicker 
                      onChange={(value) => wizardStateSetters?.updateField({ name: "hiveType", value })}
                      label='Apiario'
                      value={{ value: 'APIARIO1', label: 'Apiario 1' }}
                      options={apiarios}
                      />
                  </View>

                  <View style={{ flex: 1, flexDirection: 'column', marginVertical: 15, zIndex: 9999998  }}>
                    <CustomPicker 
                      onChange={(value) => wizardStateSetters?.updateField({ name: "hiveType", value })}
                      label='Colmena'
                      value={{ value: 'COLMENA', label: 'Colmena 1' }}
                      options={colmenas}
                    />
                  </View>

                   <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginVertical: 15 }}>
                      <Calendar 
                        onConfirm={(text) => wizardStateSetters?.updateField({ name: "fechaEstablecimiento", value: text })}
                        label='Fecha de la Alerta'
                        dateValue={new Date()}
                        />
                    </View>


                    <View style={{ flex: 1, marginTop: 20, flexDirection: 'column', alignItems: 'center' }}>
                      <ContainedButton 
                        disabled={false}
                        onSubmit={handleNext}
                        label="Crear Alerta"
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


export default Todo;