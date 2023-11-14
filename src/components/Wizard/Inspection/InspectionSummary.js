import React, { useState } from 'react';
import InspectionStepCard from '../../InspectionStepCard/InspectionStepCard';
import { ScrollView, View, Text, ActivityIndicator } from "react-native";
import { ContainedButton } from '../../../elements/Button/Button'
import { MenuContainer, MainContentContainer, Content } from '../../../screens/sharedStyles';
import Menu from '../../Menu/index'
import InspectionCardDetails from '../../../components/InspectionCardDetails/index'
import Dots from '../../Dots/index'
import styled from 'styled-components/native';
import FONTS from '../../../theme/fonts';
import COLORS from '../../../theme/colors';

const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
`;

const InspectionSummary = ({
    wizardState,
    wizardStateSetters,
    setWizardPage,
}) => {
 
 console.log("wizardState");
 console.log(wizardState?.fields?.estadoCajon.value);
 console.log(wizardState?.fields?.estadoPoblacion.value);
 console.log(wizardState?.fields?.estadoReina.value);
 console.log(wizardState?.fields?.estadoFloraCircundante.value);
 console.log(wizardState?.fields?.estadoAlimento.value);
 console.log(wizardState?.fields?.estadoPlagas.value);
 return (
    <Container>
        <MainContentContainer>
          <Content>
            <ScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ marginBottom: 30 }}>
                    <Dots 
                        pages={[
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
                            },            {
                                onPress: () => setWizardPage('InspectionSummary'),
                                actualPage: true
                            },
                        ]}
                        />
                </View>
                
                <View style={{ flex: 1 }}>
                    <InspectionCardDetails
                        estadoAlimento={wizardState?.fields?.estadoAlimento.value}
                        estadoCajon={wizardState?.fields?.estadoCajon.value}
                        estadoPoblacion={wizardState?.fields?.estadoPoblacion.value}
                        estadoReina={wizardState?.fields?.estadoReina.value}
                        estadoPlagas={wizardState?.fields?.estadoPlagas.value}
                        estadoFloraCircundante={wizardState?.fields?.estadoFloraCircundante.value}
                    />
               </View>

               <View style={{ marginTop: 40, alignItems: 'center', flex: 1 }}>
                    <ContainedButton 
                        disabled={false}
                        onSubmit={() =>{}}
                        label="Finalizar inspeccion"
                        buttonColor='white'
                        fontWeight={FONTS.light}
                        extraStyles={{
                            elevation: 5,
                            borderColor: COLORS.GREY_3,
                            borderWidth: 0.3,
                            shadowColor: COLORS.GREY_3,
                            shadowOffset: { width: 0, height: 1 }, 
                            shadowOpacity: 0.3,
                            shadowRadius: 1,
                        }}
                    />
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

export default InspectionSummary;