import React from 'react';
import { ScrollView, View, Text, ActivityIndicator } from "react-native";
import styled from 'styled-components/native';
import FONTS from '../../../theme/fonts';
import COLORS from '../../../theme/colors';
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

const HiveSetup = ({
  wizardState,
  wizardStateSetters,
  setWizardPage,
}) => {

  const { showSnackbar } = useSnackbar();

  const handleNext = () => {
    if (wizardState?.fields?.hiveType?.value && wizardState?.fields?.hiveName?.value) {
      setWizardPage('HiveAdvanced');
    } else {
      showSnackbar("Error de Validacion!", "Corriga los siguientes errores", "error");
    }
  };

  const tipoColmena = [
    { value: 'HORIZONTAL', label: 'Horizontal' },
    { value: 'LANGSTROTH', label: 'Langstroth' },
    { value: 'NUCLEO', label: 'Nucleo' },
    { value: 'TOPBAR', label: 'Topbar' },
    { value: 'TRADICIONAL', label: 'Tradicional' },
    { value: 'TRANSICIONAL', label: 'Transicional' },
    { value: 'WARR', label: 'Warr' },
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
                      actualPage: true
                    },
                    {
                      onPress: () => setWizardPage('HiveAdvanced'),
                      actualPage: false
                    },
                    {
                      onPress: () => setWizardPage('HiveQueen'),
                      actualPage: false
                    },
                    /*
                    {
                      onPress: () => setWizardPage('HiveConfirm'),
                      actualPage: false
                    }
                    */
                  ]}
                />
               </View>
                <View style={{ flex: 1, height: 450, paddingHorizontal: 10 }}>
                  <View style={{ marginBottom: 20, marginTop: 40 }}>
                    <Text style={{ fontSize: 15, fontFamily: FONTS.medium }}>
                      Configuracion Colmena
                    </Text>
                  </View>

                   <View style={{ flex: 1 }}>
                      <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        label='Nombre colmena'
                        placeholder='Nombre para colmena'
                        onBlur={() => {}}
                        icon="ri-pencil-fill"
                        outlined={true}
                        onChangeText={(text) => wizardStateSetters?.updateField({ name: "hiveName", value: text })}
                        value={wizardState?.fields?.hiveName?.value}
                        error={wizardState?.fields?.hiveName?.error}
                      />
                    </View>
                   
                   <View style={{ flex: 1 }}>
                      <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        label='Apiario'
                        onBlur={() => {}}
                        outlined={true}
                        disabled
                        value={wizardState?.apiario?.nombre}
                        editable={false}
                      />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', marginVertical: 10, zIndex: 9999998  }}>
                      <CustomPicker 
                        onChange={(value) => wizardStateSetters?.updateField({ name: "hiveType", value })}
                        label='Tipo Colmena'
                        value={wizardState?.fields?.hiveType?.value}
                        options={tipoColmena}
                        />
                    </View>

                    <View style={{ flex: 1, marginTop: 10, flexDirection: 'column', alignItems: 'center' }}>
                      <ContainedButton 
                        disabled={false}
                        onSubmit={handleNext}
                        label="Next"
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


export default HiveSetup;