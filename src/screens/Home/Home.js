import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import styled from 'styled-components/native';
import COLORS from '../../theme/colors';
import { GET_APIARIOS } from '../../graphql/queries/index';
import Menu from '../../components/Menu/index';
import { useQuery } from "@apollo/client";
import FabMenu from '../../components/Menu/FabMenu';


export const MenuContainer = styled.View`
  flex: 0.1;
  background-color: white;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${COLORS.WHITE};
`;

export const ContentContainer = styled.View`
  flex: 0.9;
`;

export const Container = styled.View`
  flex: 1;
`;


const Home = () => {
  const { data, error, loading } = useQuery(GET_APIARIOS);

  if (error) {
    console.log("Error fetching apiarios", error);
  }

  return (
    <Container>
      <ContentContainer>
        {loading ? (
            <ActivityIndicator color="#333" />
        ) : (
          <View style={styles.section}>
            {data?.apiarios.map((apiario) => (
              <View key={apiario.id} style={styles.apiarioContainer}>
                <Text style={styles.starshipName}>{apiario.id}</Text>
                <Text style={styles.starshipModel}>{apiario.name}</Text>
              </View>
            ))}
          </View>
        )}
      </ContentContainer>
      
      <FabMenu />
      
      <MenuContainer>
        <Menu />
      </MenuContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "red"
  },
  label: {
    marginBottom: 2,
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  section: {
    marginVertical: 12,
    justifyContent: "center",
    flexDirection: "row",
    width: 300,
    height: 300,
  },
  starshipName: {
    fontSize: 32,
    fontWeight: "bold",
  },
  starshipModel: {
    fontStyle: "italic",
  },
});


export default Home;