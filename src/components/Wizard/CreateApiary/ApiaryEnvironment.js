import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from "react-native";
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import COLORS from '../../../theme/colors';
import FONTS from '../../../theme/fonts';
import { ContainedButton } from '../../../elements/Button/Button'
import { useSnackbar } from '../../../context/SnackbarContext';
import Menu from '../../../components/Menu/index'
import { MenuContainer, MainContentContainer, Content } from '../../../screens/sharedStyles';
import Dots from '../../../components/Dots/index'

const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
`;

const ApiaryEnvironment = ({
  wizardState,
  wizardStateSetters,
  setWizardPage,
}) => {
    
  const { showSnackbar } = useSnackbar();
  
    const cardWidth = 300;
    const cardHeight = 120;

    
    const cardStyle  = { height: cardHeight, width: cardWidth };
    const selectedCardStyle = { ...cardStyle, borderWidth: 2, borderColor: COLORS.YELLOW };

    const urbanSelected = wizardState?.fields?.environment?.value === 'urban';
    const surbanSelected = wizardState?.fields?.environment?.value === 'suburban';
    const ruralSelected = wizardState?.fields?.environment?.value === 'rural';

    
    const handleNext = () => {
      if (wizardState?.fields?.environment?.value ) {
        setWizardPage('ApiaryLocation');
      } else {
        showSnackbar("Error de Validacion!", "Corriga los siguientes errores: 'ambiente' no seleccionado");
      }
    };

    
    return (
        <Container>
          <MainContentContainer>
            <Content>
              <ScrollView style={{ flex: 1 }}>
                <View style={{ marginBottom: 20, width: '100%' }}>
                  <Dots 
                    pages={[
                      {
                        onPress: () => setWizardPage('ApiarySetup'),
                        actualPage: false
                      },
                      {
                        onPress: () => setWizardPage('ApiaryEnvironment'),
                        actualPage: true
                      },
                      {
                        onPress: () => setWizardPage('ApiaryLocation'),
                        actualPage: false
                      }
                    ]}
                  />
                 </View>
                <View style={{ paddingLeft: 25 }}>
                  <Text style={{ fontFamily: FONTS.medium }}>
                    Ambiente del Apiario
                  </Text>
                  <Text style={{ paddingTop: 10, fontFamily: FONTS.regular }}>
                    Selecciona el ambiente que mejor se adapte a tu apiario.
                  </Text>
                </View>
                <View style={{ flex: 1, height: 600, justifyContent: 'center', alignContent: 'center' }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                      <TouchableOpacity onPress={() => wizardStateSetters?.updateField({ name: "environment", value: 'rural' })}>
                        <Card style={{ alignItems:'center', marginTop: 20, width: cardWidth , alignContent: 'center', elevation: 10 }}>
                          <Card.Cover style={ruralSelected ? selectedCardStyle : cardStyle} source={require('../../../../assets/rural.jpeg')} />
                        </Card>
                      </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                      <TouchableOpacity onPress={() => wizardStateSetters?.updateField({ name: "environment", value: 'suburban' })}>
                        <Card style={{ marginTop: 20, width: cardWidth, elevation: 10 }}>
                          <Card.Cover style={surbanSelected ? selectedCardStyle : cardStyle} source={require('../../../../assets/suburban.jpeg')} />
                        </Card>
                       </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => wizardStateSetters?.updateField({ name: "environment", value: 'urban' })}>
                        <Card style={{ marginTop: 20, width: cardWidth, elevation: 10 }}>
                          <Card.Cover style={urbanSelected ? selectedCardStyle : cardStyle} source={require('../../../../assets/urban.jpeg')} />
                        </Card>
                      </TouchableOpacity>
                    </View>
                    
                    <View style={{ flex: 1, marginTop: 20, flexDirection: 'column', alignItems: 'center' }}>
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

export default ApiaryEnvironment;