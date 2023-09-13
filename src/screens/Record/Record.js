import React from "react";
import {
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { MainContentContainer, Content } from "../../screens/sharedStyles";
import FONTS from "../../theme/fonts";
import { ROUTES } from "../../constants";
import RecordOptionCard from "../../components/RecordOptionCard/RecordOptionCard";

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
      label: "Document flora",
      imagePath: require("../../../assets/cosecha-removebg-preview.png"),
      href: ROUTES.RECORD,
    },
    {
      label: "Feed bees",
      imagePath: require("../../../assets/alimentacion2-removebg-preview.png"),
      href: ROUTES.RECORD,
    },
    {
      label: "Mite assessment",
      imagePath: require("../../../assets/varroa-removebg-preview.png"),
      href: ROUTES.RECORD,
    },
    {
      label: "Treatment",
      imagePath: require("../../../assets/tratamiento-removebg-preview.png"),
      href: ROUTES.RECORD,
    },
    {
      label: "Harvest honey",
      imagePath: require("../../../assets/cuadros-removebg-preview.png"),
      href: ROUTES.RECORD,
    },
    {
      label: "Winterize",
      imagePath: require("../../../assets/hibernacion-removebg-preview.png"),
      href: ROUTES.RECORD,
    },
    {
      label: "Dead hive",
      imagePath: require("../../../assets/muerte-removebg-preview.png"),
      href: ROUTES.RECORD,
    },
    {
      label: "Log symptoms",
      imagePath: require("../../../assets/cuadros-removebg-preview.png"),
      href: ROUTES.RECORD,
    },
  ];

  return (
    <Container>
      <MainContentContainer>
        <Content>
          <ScrollView style={{ flex: 1 }}>
            <View style={{ marginBottom: 20, marginTop: 40 }}>
              <Text style={{ fontSize: 15, fontFamily: FONTS.medium }}>
                Select a record type
              </Text>
            </View>
            <FlatList
              columnWrapperStyle={{ gap: 25 }} 
              data={recordOptions}
              keyExtractor={(item, index) => index}
              numColumns={2}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate(item.href)}
                >
                  <RecordOptionCard item={item} />
                </TouchableWithoutFeedback>
              )}
            />
          </ScrollView>
        </Content>
      </MainContentContainer>
    </Container>
  );
};

export default Record;
