import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useQuery } from "@apollo/client";
import { GET_APIARIOS } from "../../graphql/queries/index";
import Menu from "../../components/Menu/index";
import FabMenu from "../../components/Menu/FabMenu";
import { MenuContainer, MainContentContainer, Content } from "../sharedStyles";

const Container = styled.View`
  flex: 1;
`;

const Winterize = () => {
  return (
    <Container>
      <MainContentContainer>
        <Content>
          <Text>Winterize</Text>
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

export default Winterize;
