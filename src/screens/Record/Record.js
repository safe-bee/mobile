import React from "react";
import {
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { MainContentContainer, Content, MenuContainer } from "../../screens/sharedStyles";
import FONTS from "../../theme/fonts";
import { ROUTES } from "../../constants";
import RecordOptionCard from "../../components/RecordOptionCard/RecordOptionCard";
import Menu from "../../components/Menu/index";
import FabMenu from '../../components/Menu/FabMenu';

export const ContentContainer = styled.View`
  flex: 0.9;
`;

export const Container = styled.View`
  flex: 1;
`;

const Record = () => {
  const navigation = useNavigation();
  const recordOptions = [
    {
      label: "Cosecha",
      imagePath: require("../../../assets/cosecha-removebg-preview.png"),
      href: ROUTES.DOCUMENT_FLORA,
    },
    {
      label: "Alimentar abejas",
      imagePath: require("../../../assets/alimentacion2-removebg-preview.png"),
      href: ROUTES.RECORD,
    },
    {
      label: "Tratamiento Varroa",
      imagePath: require("../../../assets/varroa-removebg-preview.png"),
      href: ROUTES.RECORD,
    },
    {
      label: "Tratamientos",
      imagePath: require("../../../assets/tratamiento-removebg-preview.png"),
      href: ROUTES.RECORD,
    },
    {
      label: "Cambio de cuadros",
      imagePath: require("../../../assets/cuadros-removebg-preview.png"),
      href: ROUTES.RECORD,
    },
    {
      label: "Hibernacion",
      imagePath: require("../../../assets/hibernacion-removebg-preview.png"),
      href: ROUTES.RECORD,
    },
    {
      label: "Muerte colmena",
      imagePath: require("../../../assets/muerte-removebg-preview.png"),
      href: ROUTES.RECORD,
    },
    {
      label: "Registrar sintomas",
      imagePath: require("../../../assets/cuadros-removebg-preview.png"),
      href: ROUTES.RECORD,
    },
  ];

  return (
    <Container>
      <MainContentContainer>
        <Content>
          <ScrollView style={{ flex: 1 }}>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ fontSize: 15, fontFamily: FONTS.medium }}>
                Seleccione una Accion
              </Text>
            </View>
            <FlatList
              columnWrapperStyle={{ gap: 25 }} 
              data={recordOptions}
              keyExtractor={(item, index) => index}
              numColumns={2}
              contentContainerStyle={{ alignItems: 'center' }}
              renderItem={({ item }) => (
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(item.href)}
                  >
                    <RecordOptionCard item={item} />
                  </TouchableOpacity>
                </View>
              )}
            />
          </ScrollView>
        </Content>
    
      </MainContentContainer>

      <View>
        <FabMenu />
      </View>
        
      <MenuContainer>
        <Menu />
      </MenuContainer>

    </Container>
  );
};

export default Record;
