import React, { useState } from 'react';
import InspectionStepCard from '../../InspectionStepCard/InspectionStepCard';
import { useSnackbar } from '../../../context/SnackbarContext';
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

 const { showSnackbar } = useSnackbar();


 const getDetallesArray = () => {
    const dataArray = [];
    const fieldNames = [
        { key: "sellado", label: "Sellado"},
        { key: "invasores", label: "Invasores"},
        { key: "detallePoblacionFaltaEspacio", label: "Falta espacio" },
        { key: "detallePoblacionNumCuadros", label: "Numero de cuadros" },
        { key: "detallePoblacionEstado", label: "Poblacion estado" },
        { key: "detalleReinaLarvasQueSeVe", label: "Reina larvas que se ven" },
        { key: "detalleReinaLarvasPatronDeCria", label: "Reina larvas patron de cria" },
        { key: "detalleFloraEstado", label: "Estado flora"},
        { key: "detalleFloraDispRecursos", label: "Flora disponibilidad recursos" },
        { key: "detalleAlimentoEstado", label: "Alimento estado"},
        { key: "detalleAlimentoDispRecursos", label: "Alimento disponibilidad recursos"},
        { key: "detallePlagasTemperamentoAbejas", label: "Temperamento abejas"},
        { key: "detallePlagasPlagas", label: "Plagas"},
    ];

    fieldNames.forEach(fieldName => {
        const value = wizardState?.fields?.[fieldName.key]?.value;
        if (value) {
            const item = { value, label: fieldName.label };
            dataArray.push(item);
        }
    });

    return dataArray;
 }

 const detalles = getDetallesArray();

 const handleSubmit = () => {
    if (!wizardState?.fields?.colmena.value) {
        showSnackbar("Debe seleccionar una colmena", "", "error");
    } else {
        wizardState?.onSubmit();
    }
 }


 return (
    <Container>
        <MainContentContainer>
          <Content>
            <ScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1, flexDirection: 'column' }}>
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
                        detalles={detalles}
                        fechaInspeccion={wizardState?.fields?.dateInspection.value}
                    />
               </View>

               <View style={{ marginTop: 40, alignItems: 'center', flex: 1 }}>
                    <ContainedButton 
                        disabled={false}
                        onSubmit={handleSubmit}
                        label="Finalizar inspeccion"
                        buttonColor='white'
                        fontWeight={FONTS.light}
                        icon={ wizardState?.mutationLoading ? () => <ActivityIndicator color={COLORS.WHITE} /> : () => {} }
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