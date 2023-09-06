import React from 'react';
import { ScrollView, View, Text, ActivityIndicator } from "react-native";
import styled from 'styled-components/native';
import FONTS from '../../../theme/fonts';
import COLORS from '../../../theme/colors';
import TextInput from '../../../elements/TextInput/index';
import CustomPicker from '../../../elements/CustomPicker/index'
import Calendar from '../../../elements/Calendar/index'
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

const HiveAdvanced = ({
  wizardState,
  wizardStateSetters,
  setWizardPage,
}) => {


  const handleNext = () => {
     setWizardPage('HiveQueen');
  };

  const hiveColorOptions = [{ value: 'azul', label: 'Azul' }, { value: 'verde', label: 'Verde' }, { value: 'amarillo', label: 'Amarillo' }]

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
                      actualPage: true
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
                <View style={{ flex: 1, height: 550, paddingHorizontal: 10, zIndex: -30000 }}>
                  <View style={{ marginBottom: 20, marginTop: 40 }}>
                    <Text style={{ fontSize: 15, fontFamily: FONTS.medium }}>
                      Configuracion Colmena
                    </Text>
                  </View>
                   <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ flex: 0.45 }}>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            label='# Deeps'
                            placeholder='# Deeps'
                            onBlur={() => {}}
                            icon="ri-pencil-fill"
                            outlined={true}
                            onChangeText={(text) => wizardStateSetters?.updateField({ name: "datosNumeroDeep", value: text })}
                            value={wizardState?.fields?.datosNumeroDeep?.value}
                            error={wizardState?.fields?.datosNumeroDeep?.error}
                        />
                      </View>
                      <View style={{ flex: 0.45 }}>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            label='# Supers'
                            placeholder='# Supers'
                            onBlur={() => {}}
                            icon="ri-pencil-fill"
                            outlined={true}
                            onChangeText={(text) => wizardStateSetters?.updateField({ name: "datosNumeroSupers", value: text })}
                            value={wizardState?.fields?.datosNumeroSupers?.value}
                            error={wizardState?.fields?.datosNumeroSupers?.error}
                        />
                      </View>
                    </View>

                    <View style={{ flex: 1 }}>
                      <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        label='Total # of frames'
                        placeholder='Total # of frames'
                        onBlur={() => {}}
                        icon="ri-pencil-fill"
                        outlined={true}
                        onChangeText={(text) => wizardStateSetters?.updateField({ name: "datosNumeroCuadros", value: text })}
                        value={wizardState?.fields?.datosNumeroCuadros?.value}
                        error={wizardState?.fields?.datosNumeroCuadros?.error}
                      />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', marginVertical: 10, zIndex: 9999999 }}>
                      <CustomPicker 
                        onChange={(value) => wizardStateSetters?.updateField({ name: "color", value })}
                        label='Color Colmena'
                        value={wizardState?.fields?.color?.value}
                        options={hiveColorOptions}
                        />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                      <Calendar 
                        onConfirm={(text) => wizardStateSetters?.updateField({ name: "fechaEstablecimiento", value: text })}
                        label='Fecha Establecimiento'
                        dateValue={wizardState?.fields?.fechaEstablecimiento?.value}
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


export default HiveAdvanced;