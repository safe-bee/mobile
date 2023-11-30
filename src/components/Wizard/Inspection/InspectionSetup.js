import React from 'react';
import { ScrollView, View, Text, ActivityIndicator } from "react-native";
import styled from 'styled-components/native';
import { useQuery } from "@apollo/client";
import FONTS from '../../../theme/fonts';
import Dots from '../../Dots/index'
import COLORS from '../../../theme/colors';
import TextInput from '../../../elements/TextInput/index';
import CustomPicker from '../../../elements/CustomPicker/index'
import Calendar from '../../../elements/Calendar/index'
import { ContainedButton } from '../../../elements/Button/Button'
import { MenuContainer, MainContentContainer, Content } from '../../../screens/sharedStyles';
import { useSnackbar } from '../../../context/SnackbarContext';
import Menu from '../../../components/Menu/index';

const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
`;

const InspectionSetup = ({
    wizardState,
    wizardStateSetters,
    setWizardPage,
}) => {

  const { showSnackbar } = useSnackbar();
  
  const climaOptions = [{ value: 'SOLEADO', label: 'Soleado' }, { value: 'NUBLADO', label: 'Nublado' }, { value: 'TORMENTA', label: 'Tormenta' }, { value: 'LLUVIA', label: 'Lluvia' }]

  console.log("wizardState?.fields?.colmena.value");
  console.log(wizardState?.fields?.colmena.value);
  return (
      <Container>
        <MainContentContainer>
          <Content>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, height: 730, paddingHorizontal: 10 }}>
                    <View style={{ marginBottom: 30 }}>
                        <Dots 
                            pages={[
                                {
                                    onPress: () => setWizardPage('InspectionSetup'),
                                    actualPage: true
                                },
                                {
                                    onPress: () => setWizardPage('Cajon'),
                                    actualPage: false
                                },
                                {
                                    onPress: () => setWizardPage('HivePopulation'),
                                    actualPage: false
                                },
                                {
                                    onPress: () => setWizardPage('QueenAndBrood'),
                                    actualPage: false
                                },
                                {
                                    onPress: () => setWizardPage('Flora'),
                                    actualPage: false
                                },
                                {
                                    onPress: () => setWizardPage('Food'),
                                    actualPage: false
                                },
                                {
                                    onPress: () => setWizardPage('BeeStressors'),
                                    actualPage: false
                                },
                                {
                                    onPress: () => setWizardPage('InspectionSummary'),
                                    actualPage: false
                                },
                            ]}
                            />
                    </View>
                    
                    <View style={{ marginBottom: 20, marginTop: 40 }}>
                        <Text style={{ fontSize: 18, fontFamily: FONTS.medium }}>
                            Realizar inspeccion
                        </Text>
                    </View>
                    
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginBottom: 2 }}>
                        <Calendar 
                          onConfirm={(text) => wizardStateSetters?.updateField({ name: "dateInspection", value: text })}
                          label='Fecha de la inspeccion'
                          dateValue={wizardState?.fields?.dateInspection?.value}
                         />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', marginBottom: 2, zIndex: 9999999999  }}>
                        <CustomPicker 
                          onChange={(value) => wizardStateSetters?.updateField({ name: "apiario", value })}
                          label='Apiario'
                          value={wizardState?.fields?.apiario.value}
                          options={wizardState?.apiarios}
                        />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', marginBottom: 2, zIndex: 99999999  }}>
                        <CustomPicker 
                          onChange={(value) => {
                            wizardStateSetters?.updateField({ name: "colmena", value })}
                          }
                          label='Colmena'
                          value={wizardState?.fields?.colmena.value}
                          options={wizardState?.colmenas}
                        />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', marginBottom: 2, zIndex: 9999999  }}>
                        <CustomPicker 
                          onChange={(value) => wizardStateSetters?.updateField({ name: "clima", value })}
                          label='Clima'
                          value={wizardState?.fields?.clima.value}
                          options={climaOptions}
                        />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', marginBottom: 2, zIndex: 9999996  }}>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            label='Temperatura'
                            placeholder='Inserte temperatura'
                            onBlur={() => {}}
                            icon="ri-pencil-fill"
                            outlined={true}
                            onChangeText={(text) => wizardStateSetters?.updateField({ name: "temperatura", value: text })}
                            value={wizardState?.fields?.temperatura?.value}
                            error={wizardState?.fields?.temperatura?.error}
                        />
                    </View>


                    <View style={{ flex: 1, marginTop: 20, flexDirection: 'column', alignItems: 'center' }}>
                        <ContainedButton 
                          disabled={!wizardState?.isVisitedForm}
                          onSubmit={() => setWizardPage('Cajon')}
                          label="Siguiente"
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


export default InspectionSetup;