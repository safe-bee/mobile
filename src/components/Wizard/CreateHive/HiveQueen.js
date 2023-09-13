import React from 'react';
import { ScrollView, View, Text, ActivityIndicator } from "react-native";
import styled from 'styled-components/native';
import FONTS from '../../../theme/fonts';
import COLORS from '../../../theme/colors';
import Calendar from '../../../elements/Calendar/index';
import TextInput from '../../../elements/TextInput/index';
import CustomPicker from '../../../elements/CustomPicker/index'
import { ContainedButton } from '../../../elements/Button/Button'
import Menu from '../../Menu/index'
import Dots from '../../Dots/index'
import { MenuContainer, MainContentContainer, Content } from '../../../screens/sharedStyles';
import { useSnackbar } from '../../../context/SnackbarContext';
import Loading from '../../Loading/index';


const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
`;

const HiveQueen = ({
  wizardState,
  wizardStateSetters,
  setWizardPage,
}) => {

  const { showSnackbar } = useSnackbar();

  const handleNext = () => {
      setWizardPage('HiveConfirm');
  };

  const handleSubmit = () => {
    if (wizardState?.fields?.hiveType?.value && wizardState?.fields?.hiveName?.value) {
      wizardState?.onSubmit();
    } else if (!wizardState?.fields?.hiveName?.value || !wizardState?.fields?.environment?.value ) {
      showSnackbar("Error de Validacion!", "Corriga los errores");
    }
  }


  const tipoReina = [
    { value: 'LOCAL', label: 'Local' },
    { value: 'ITALIANA', label: 'Italiana' },
    { value: 'RUSA', label: 'Rusa' },
    { value: 'CARNIOLA', label: 'Carniola' },
    { value: 'CAUCASICA', label: 'Caucasica' },
    { value: 'BUCKFAST', label: 'Buckfast' },
    { value: 'ARPATIANA', label: 'Arpatiana' },
  ];

  const colorReina = [
    { value: 'BLANCO', label: 'Blanco' },
    { value: 'AMARILLO', label: 'Amarillo' },
    { value: 'ROJO', label: 'Rojo' },
    { value: 'VERDE', label: 'Verde' },
    { value: 'AZUL', label: 'Azul' },
  ];


  return (
      <Container>
        <MainContentContainer>
          <Content>
            <ScrollView style={{ flex: 1 }}>
               <View style={{ marginBottom: 20 }}>
                <Dots 
                  pages={[
                    {
                      onPress: () => setWizardPage('HiveSetup'),
                      actualPage: false
                    },
                    {
                      onPress: () => setWizardPage('HiveAdvanced'),
                      actualPage: false
                    },
                    {
                      onPress: () => setWizardPage('HiveQueen'),
                      actualPage: true
                    }
                    /*
                    {
                      onPress: () => setWizardPage('HiveConfirm'),
                      actualPage: false
                    }
                    */
                  ]}
                />
               </View>
                <View style={{ flex: 1, height: 550, paddingHorizontal: 10 }}>
                  <View style={{ marginBottom: 20, marginTop: 40 }}>
                    <Text style={{ fontSize: 15, fontFamily: FONTS.medium }}>
                      Detalles de Reina
                    </Text>
                  </View>
                    <View style={{ flex: 1, flexDirection: 'column', marginVertical: 10, zIndex: 9999999 }}>
                      <CustomPicker 
                        //onChange={(tex) =>console.log(tex)}
                        onChange={(text) => wizardStateSetters?.updateField({ name: "tipoReina", value: text })}
                        label='Tipo Reina'
                        value={wizardState?.fields?.tipoReina?.value}
                        options={tipoReina}
                        />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', marginVertical: 10, zIndex: 9999998 }}>
                      <CustomPicker 
                        onChange={(value) => wizardStateSetters?.updateField({ name: "colorReina", value })}
                        label='Color Reina'
                        value={wizardState?.fields?.colorReina?.value}
                        options={colorReina}
                        />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                      <Calendar 
                        onConfirm={(text) => wizardStateSetters?.updateField({ name: "reinaFechaAceptacion", value: text })}
                        label='Fecha de aceptacion de reina'
                        dateValue={wizardState?.fields?.fechaEstablecimiento?.value}
                        />
                    </View>

                    <View style={{ flex: 1, marginVertical: 10 }}>
                      <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        label='Notas'
                        onBlur={() => {}}
                        outlined={true}
                        onChangeText={(text) => wizardStateSetters?.updateField({ name: "reinaNotas", value: text })}
                        value={wizardState?.fields?.reinaNotas?.value}
                        textArea
                      />
                    </View>

                    <View style={{ flex: 1, marginTop: 30, flexDirection: 'column', alignItems: 'center' }}>
                      <ContainedButton 
                        disabled={false}
                        onSubmit={handleSubmit}
                        label="Crear colmena"
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


export default HiveQueen;