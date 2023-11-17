import React from 'react';
import { useQuery } from "@apollo/client";
import { useRoute } from '@react-navigation/native';
import { GET_INSPECCION } from '../../graphql/queries/index';
import styled from 'styled-components/native';
import { ScrollView, View, StyleSheet } from "react-native";
import { Card } from 'react-native-paper';
import COLORS from '../../theme/colors';
import FONTS from '../../theme/fonts';
import Menu from '../../components/Menu/index';
import InspectionCardDetails from '../../components/InspectionCardDetails/index'
import FabMenu from '../../components/Menu/FabMenu';
import { MenuContainer, MainContentContainer, Content } from '../sharedStyles';
import Icon from 'react-native-remix-icon';
import Loading from '../../components/Loading/index';


export const ContentContainer = styled.View`
  flex: 0.9;
`;

export const Container = styled.View`
  flex: 1;
`;

const InspectionDetails = () => {
  const route = useRoute();
  const { inspeccionId } = route.params;

  const { data, loading } = useQuery(GET_INSPECCION, { variables: { inspeccionId },  fetchPolicy: "cache-and-network" });

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
        const value = data?.inspeccion?.[fieldName.key];
        if (value) {
            const item = { value, label: fieldName.label };
            dataArray.push(item);
        }
    });

    return dataArray;
 }

 const detalles = getDetallesArray();

 return (
    <Container>
      <MainContentContainer>
          {
              loading
              ? <Loading size={50} />
              : (
                  <Content>
                    <ScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1, flexDirection: 'column' }}>            
                        <View style={{ flex: 1 }}>
                            <InspectionCardDetails
                                estadoAlimento={data?.inspeccion?.estadoAlimento}
                                estadoCajon={data?.inspeccion?.estadoCajon}
                                estadoPoblacion={data?.inspeccion?.estadoPoblacion}
                                estadoReina={data?.inspeccion?.estadoReina}
                                estadoPlagas={data?.inspeccion?.estadoPlagas}
                                estadoFloraCircundante={true}
                                detalles={detalles}
                                fechaInspeccion={new Date()}
                            />
                      </View>
                    </ScrollView>
                  </Content>
              )
          }
        </MainContentContainer>

      <MenuContainer>
        <Menu />
      </MenuContainer>

  </Container>

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      backgroundColor: COLORS.WHITE
    },
    header: {
      flex: 1,
      height: '100%',
      flexDirection: 'row',
    },
    headerExpanded: {
        flex: 0.7,
        height: '100%',
        flexDirection: 'row',
        backgroundColor: '#aab7bd',
        alignItems: 'center'
    },
    leftHeader: {
      height: '100%',
      flex: 0.4,
      justifyContent: 'center'
    },
    rightHeader: {
       flex: 0.6,
       height: '100%',
       alignItems: 'flex-end',
       justifyContent: 'center',
    },
    rightHeaderExpanded: {
        flexDirection: 'row',
        flex: 0.6,
        justifyContent: 'flex-end',
    },  
    title: {
      fontSize: 16,
      fontFamily: FONTS.medium,
      color: COLORS.GREEN_1,
    },
    date: {
      fontSize: 14,
      fontFamily: FONTS.regular,
      color: COLORS.BLACK_1,
    },
    arrowUp: {
      paddingLeft: 5,
    },
    details: {
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
    },
    detailsRow: {
      marginTop: 5,
    },
    detailsHeaderText: {
      fontSize: 14,
      fontFamily: FONTS.medium,
      color: COLORS.GREY_3,
      flex: 1,
    },
    detailsHeader: {
      flexDirection: 'row',
      marginTop: 7,
      justifyContent: 'center'
    },
    detailsSubText: {
      fontSize: 14,
      fontFamily: FONTS.regular,
      color: COLORS.BLACK_1,
      backgroundColor: 'white',
      flex: 0.5
    },
    icon: {
      width: 35, 
      height: 35,
      backgroundColor: '#5c735c', 
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center'
    },
    disabled: {
      backgroundColor: '#b5725e', 
    },
});


export default InspectionDetails;