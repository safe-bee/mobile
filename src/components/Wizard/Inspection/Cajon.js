import React, { useState } from 'react';
import InspectionStepCard from '../../InspectionStepCard/InspectionStepCard';
import { ScrollView, View, Text, ActivityIndicator } from "react-native";
import { ContainedButton } from '../../../elements/Button/Button'
import { MenuContainer, MainContentContainer, Content } from '../../../screens/sharedStyles';
import Menu from '../../Menu/index'
import Dots from '../../Dots/index'
import styled from 'styled-components/native';
import FONTS from '../../../theme/fonts';
import COLORS from '../../../theme/colors';

const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
`;

const Cajon = ({
    wizardState,
    wizardStateSetters,
    setWizardPage,
}) => {
 const [moreDetails, setMoreDetails] = useState(false);

 const onThumbsUpPress = () => {
    wizardStateSetters?.updateField({ name: "estadoCajon", value: true });
    setWizardPage('HivePopulation');
 }

 const onThumbsDownPress = () => {
    wizardStateSetters?.updateField({ name: "estadoCajon", value: false });
    setWizardPage('HivePopulation');
 }

 return (
    <Container>
        <MainContentContainer>
          <Content>
        
            {
                moreDetails
                ? <View></View>
                : (
                    <View>
                        <View style={{ marginBottom: 30 }}>
                            <Dots 
                                pages={[
                                    {
                                        onPress: () => setWizardPage('Cajon'),
                                        actualPage: true
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
                                ]}
                              />
                        </View>
                        <View style={{ flex: 1, height: 300, alignItems: 'center' }}>
                            <InspectionStepCard 
                                header="Estado del cajon"
                                subtitle="¿Como evaluarias la populacion de tu colmena?"
                                onThumbUp={onThumbsUpPress}
                                onThumbDown={onThumbsDownPress}
                            />
                        </View>

                        <View style={{ flex: 1, marginTop: 40, alignItems: 'center' }}>
                            <ContainedButton 
                                disabled={false}
                                onSubmit={() =>{}}
                                label="Mas detalle"
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
                </View>
                )
            }
          </Content>
        </MainContentContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>

     </Container>
  )
}

export default Cajon;