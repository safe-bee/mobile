import React, { useState } from 'react';
import InspectionStepCard from '../../InspectionStepCard/InspectionStepCard';
import { ScrollView, View, Text } from "react-native";
import { ContainedButton } from '../../../elements/Button/Button'
import CustomPicker from '../../../elements/CustomPicker/index'
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

const Flora = ({
    wizardState,
    wizardStateSetters,
    setWizardPage,
}) => {
 const [moreDetails, setMoreDetails] = useState(false);

 const onThumbsUpPress = () => {
    wizardStateSetters?.updateField({ name: "estadoFloraCircundante", value: true });
    setWizardPage('Food');
 }

 const onThumbsDownPress = () => {
    wizardStateSetters?.updateField({ name: "estadoFloraCircundante", value: false });
    setWizardPage('Food');
 }

 const floraEstadoOptions = [{ value: 'MUY_BUENO', label: 'Muy bueno' }, { value: 'BUENO', label: 'Bueno' }, { value: 'NORMAL', label: 'Normal' }, { value: 'BAJO', label: 'Bajo' }, { value: 'MUY_BAJO', label: 'Muy bajo'} ]
 const floraDisponibiilidadRecursos = [{ value: 'ALTO', label: 'Alto' }, { value: 'MEDIO', label: 'Medio' }, { value: 'BAJO', label: 'Bajo' }, { value: 'NINGUNO', label: 'Ninguno' }]

 
 const onActualStatePress = () => {
    setWizardPage('Flora');
    setMoreDetails(false);
 };

 const goToNextStep = () => {
    setWizardPage('Food');
 };


 return (
    <Container>
        <MainContentContainer>
          <Content>
            <View>
                <View style={{ marginBottom: 30 }}>
                    <Dots 
                        pages={[
                            {
                                onPress: () => setWizardPage('InspectionSetup'),
                                actualPage: false
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
                                onPress: onActualStatePress,
                                actualPage: true,
                            },
                            {
                                onPress: goToNextStep,
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
                {
                    moreDetails
                    ? 
                    <View style={{ flex: 1, paddingHorizontal: 10}}>
                        
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, marginBottom: 20 }}>
                            <Text style={{ color: COLORS.GREEN_2, fontSize: 20, fontWeight: 'bold', fontFamily: FONTS.medium}}>
                                Estado de flora
                            </Text>
                        </View> 

                        <View style={{ width: 300, flex: 1 }}>
                            <View style={{ flex: 0.2, flexDirection: 'column', marginVertical: 10, zIndex: 9999999 }}>
                                <CustomPicker 
                                    onChange={(value) => wizardStateSetters?.updateField({ name: "detalleFloraEstado", value })}
                                    label='Estado'
                                    value={wizardState?.fields?.detalleFloraEstado?.value}
                                    options={floraEstadoOptions}
                                />
                            </View>
                            <View style={{ flex: 0.2, flexDirection: 'column', marginVertical: 10, zIndex: 9999998 }}>
                                <CustomPicker 
                                    onChange={(value) => wizardStateSetters?.updateField({ name: "detalleFloraDispRecursos", value })}
                                    label='Disponibilidad de recursos cercanos'
                                    value={wizardState?.fields?.detalleFloraDispRecursos?.value}
                                    options={floraDisponibiilidadRecursos}
                                />
                            </View>
                            <View style={{ flex: 0.2, marginTop: 20, alignItems: 'center'}}>
                                <ContainedButton 
                                    disabled={false}
                                    onSubmit={goToNextStep}
                                    label="Siguiente"
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
                    </View>
                    : (
                        <>
                            <View style={{ flex: 1, height: 300, alignItems: 'center' }}>
                                <InspectionStepCard 
                                    header="Estado de flora"
                                    subtitle="¿Como evaluarias el estado de tu flora?"
                                    onThumbUp={onThumbsUpPress}
                                    onThumbDown={onThumbsDownPress}
                                />
                            </View>

                            <View style={{ flex: 1, marginTop: 40, alignItems: 'center' }}>
                                <ContainedButton 
                                    disabled={false}
                                    onSubmit={() => setMoreDetails(true)}
                                    label="Mas detalles"
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
                    </>
                )
              }
            </View>
          </Content>
        </MainContentContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>

     </Container>
  )
}

export default Flora;