import React, { useState } from 'react';
import InspectionStepCard from '../../InspectionStepCard/InspectionStepCard';
import { ScrollView, View, Text, ActivityIndicator } from "react-native";
import TextInput from '../../../elements/TextInput/index';
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

const HivePopulation = ({
    wizardState,
    wizardStateSetters,
    setWizardPage,
}) => {
 const [moreDetails, setMoreDetails] = useState(false);

 const onThumbsUpPress = () => {
    wizardStateSetters?.updateField({ name: "estadoPoblacion", value: true });
    setWizardPage('QueenAndBrood');
 }

 const onThumbsDownPress = () => {
    wizardStateSetters?.updateField({ name: "estadoPoblacion", value: false });
    setWizardPage('QueenAndBrood');
 }

 const faltaEspacioOptions = [{ value: true, label: 'Si' }, { value: false, label: 'No' }]

 const estadoPoblacionOptions = [{ value: 'MUY_BUENO', label: 'Muy bueno' }, { value: 'BUENO', label: 'Bueno' }, { value: 'NORMAL', label: 'Normal' }, { value: 'BAJO', label: 'Bajo' }, { value: 'MUY_BAJO ', label: 'Muy bajo'} ]
 
 const onActualStatePress = () => {
    setWizardPage('HivePopulation');
    setMoreDetails(false);
 };

 const goToNextStep = () => {
    setWizardPage('QueenAndBrood')
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
                                actualPage: false,
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
                {
                    moreDetails
                    ? 
                    <View style={{ flex: 1, paddingHorizontal: 10 }}>
                        
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, marginBottom: 20 }}>
                            <Text style={{ color: COLORS.GREEN_2, fontSize: 20, fontWeight: 'bold', fontFamily: FONTS.medium}}>
                                Estado de la poblacion
                            </Text>
                        </View> 

                        <View style={{ width: 300, flex: 1 }}>
                            <View style={{ flex: 0.2, flexDirection: 'column', marginVertical: 10, zIndex: 9999999 }}>
                                <CustomPicker 
                                    onChange={(value) => wizardStateSetters?.updateField({ name: "detallePoblacionEstado", value })}
                                    label='Estado poblacion'
                                    value={wizardState?.fields?.detallePoblacionEstado?.value}
                                    options={estadoPoblacionOptions}
                                    multiple
                                />
                            </View>
                            <View style={{ flex: 0.2 }}>
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    label='Numero de cuadros'
                                    placeholder='# de cuadros'
                                    onBlur={() => {}}
                                    outlined={true}
                                    onChangeText={(text) => wizardStateSetters?.updateField({ name: "detallePoblacionNumCuadros", value: text })}
                                    value={wizardState?.fields?.detallePoblacionNumCuadros?.value}
                                />
                            </View>
                            <View style={{ flex: 0.2, flexDirection: 'column', marginVertical: 10, zIndex: 9999998 }}>
                                <CustomPicker 
                                    onChange={(value) => wizardStateSetters?.updateField({ name: "detallePoblacionFaltaEspacio", value })}
                                    label='¿Falta Espacio?'
                                    value={wizardState?.fields?.detallePoblacionFaltaEspacio?.value}
                                    options={faltaEspacioOptions}
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
                                    header="Estado de poblacion"
                                    subtitle="¿Como evaluarias la poblacion de tu colmena?"
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

export default HivePopulation;