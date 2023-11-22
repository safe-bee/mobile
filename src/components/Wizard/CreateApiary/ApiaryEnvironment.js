import React from 'react';
import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import COLORS from '../../../theme/colors';
import FONTS from '../../../theme/fonts';
import { useSnackbar } from '../../../context/SnackbarContext';
import Menu from '../../../components/Menu/index'
import { MenuContainer, MainContentContainer, Content } from '../../../screens/sharedStyles';
import Dots from '../../../components/Dots/index'
import { Label } from '../../../elements/TextInput/TextInput.styles';

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

    const urbanSelected = wizardState?.fields?.environment?.value === 'urbano';
    const surbanSelected = wizardState?.fields?.environment?.value === 'suburbano';
    const ruralSelected = wizardState?.fields?.environment?.value === 'rural';

    const onEnvironmentPress = (environment) => {
      wizardStateSetters?.updateField({ name: "environment", value: environment });
      setWizardPage('ApiaryLocation');
    }
    
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
                <View style={{ flex: 1, height: 500, justifyContent: 'center', alignContent: 'center' }}>
                    <View style={{ marginLeft: 30, justifyContent: 'center' }}>
                      <Label
                        fontFamily={FONTS.regular}
                      >
                       Rural
                      </Label>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                      <TouchableOpacity onPress={() => onEnvironmentPress('rural')}>
                        <Card style={{ alignItems:'center', marginTop: 10, width: cardWidth , alignContent: 'center', elevation: 10 }}>
                          <Card.Cover style={ruralSelected ? selectedCardStyle : cardStyle} source={require('../../../../assets/rural.jpeg')} />
                        </Card>
                      </TouchableOpacity>
                    </View>
                    
                    <View style={{ marginLeft: 30, marginTop: 20, justifyContent: 'center' }}>
                      <Label
                        fontFamily={FONTS.regular}
                      >
                       Suburbano
                      </Label>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => onEnvironmentPress('suburbano')}>
                          <Card style={{ marginTop: 10, width: cardWidth, elevation: 10 }}>
                            <Card.Cover style={surbanSelected ? selectedCardStyle : cardStyle} source={require('../../../../assets/suburban.jpeg')} />
                          </Card>
                       </TouchableOpacity>
                    </View>
                    
                    <View style={{ marginLeft: 30, marginTop: 20,  justifyContent: 'center' }}>
                        <Label
                          fontFamily={FONTS.regular}
                        >
                        Urbano
                        </Label>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                      <TouchableOpacity onPress={() => onEnvironmentPress('urbano')}>
                          <Card style={{ marginTop: 10, width: cardWidth, elevation: 10 }}>
                            <Card.Cover style={urbanSelected ? selectedCardStyle : cardStyle} source={require('../../../../assets/urban.jpeg')} />
                          </Card>
                        </TouchableOpacity>
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