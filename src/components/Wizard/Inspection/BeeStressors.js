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

const BeeStressors = ({
    wizardState,
    wizardStateSetters,
    setWizardPage,
}) => {
 const [moreDetails, setMoreDetails] = useState(false);

 const plagasOptions = [{ value: 'CALMAS', label: 'Calmas' }, { value: 'NERVIOSAS', label: 'Nerviosas' }, { value: 'AGRESIVAS', label: 'Agresivas' }]
 const temperamentoOptions = [{ value: 'VARROA', label: 'Varroa' }, { value: 'NOSEMA', label: 'Nosema' }, { value: 'ESCARABAJOS', label: 'Escarabajos' }, { value: 'RATAS', label: 'Ratas' }, { value: 'HORMIGAS', label: 'Hormigas' }, { value: 'POLILLAS', label: 'Polillas' }, { value: 'AVISPAS', label: 'Avispas' }, { value: 'NINGUNA', label: 'Ninguna' }]

 
 const onThumbsUpPress = () => {
    wizardStateSetters?.updateField({ name: "estadoPlagas", value: true });
    setWizardPage('InspectionSummary');
 }

 const onThumbsDownPress = () => {
    wizardStateSetters?.updateField({ name: "estadoPlagas", value: false });
    setWizardPage('InspectionSummary');
 }

 const onActualStatePress = () => {
    setWizardPage('BeeStressors');
    setMoreDetails(false);
 };

 const goToNextStep = () => {
    setWizardPage('InspectionSummary');
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
                                actualPage: false,
                            },
                            {
                                onPress: () => setWizardPage('Food'),
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
                        ]}
                        />
                </View>
                {
                    moreDetails
                    ? 
                    <View style={{ flex: 1, paddingHorizontal: 10}}>
                        
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, marginBottom: 20 }}>
                            <Text style={{ color: COLORS.GREEN_2, fontSize: 20, fontWeight: 'bold', fontFamily: FONTS.medium}}>
                                Estado de plagas
                            </Text>
                        </View> 

                        <View style={{ width: 300, flex: 1 }}>
                            <View style={{ flex: 0.2, flexDirection: 'column', marginVertical: 10, zIndex: 9999999 }}>
                                <CustomPicker 
                                    onChange={(value) => wizardStateSetters?.updateField({ name: "detallePlagasPlagas", value })}
                                    label='Plagas'
                                    value={wizardState?.fields?.detallePlagasPlagas?.value}
                                    options={plagasOptions}
                                />
                            </View>
                            <View style={{ flex: 0.2, flexDirection: 'column', marginVertical: 10, zIndex: 9999998 }}>
                                <CustomPicker 
                                    onChange={(value) => wizardStateSetters?.updateField({ name: "detallePlagasTemperamentoAbejas", value })}
                                    label='Temperamento abejas'
                                    value={wizardState?.fields?.detallePlagasTemperamentoAbejas?.value}
                                    options={temperamentoOptions}
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
                                    header="Estado de plagas"
                                    subtitle="¿Detectaste la presencia de alguna peste o enfermedad?"
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

export default BeeStressors;