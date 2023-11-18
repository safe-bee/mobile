import React, { useEffect, useState } from 'react';
import { View, ScrollView } from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import styled from 'styled-components/native';
import { useQuery } from "@apollo/client";
import COLORS from '../../theme/colors';
import { GET_APIARIOS } from '../../graphql/queries/index';
import { ROUTES } from '../../constants';
import Menu from '../../components/Menu/index';
import DeleteApario from '../../components/Modals/DeleteApiario/index';
import MoreOptions from '../../components/Modals/MoreOptions/index';
import FabMenu from '../../components/Menu/FabMenu';
import { MenuContainer, MainContentContainer, Content } from '../sharedStyles';
import { ContainedButton } from '../../elements/Button';
import ApiarioCard from '../../components/ApiarioCard/';
import Loading from '../../components/Loading/index';


const Container = styled.View`
  flex: 1;
`;

const Home = () => {
  const { data, error, loading } = useQuery(GET_APIARIOS, { fetchPolicy: "cache-and-network" });
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openMoreOptionsModal, setMoreOptionsModal] = useState(false);
  const [selectedApiario, setSelectedApiario] = useState(null);

  const apiarios = data?.apiarios;
  const navigation = useNavigation();

  if (error) {
    console.log("Error fetching apiarios", error);
  }
  
  return (
    <Container>
      <MainContentContainer>
          <Content>
            {
              loading ?
              <Loading size={50} /> : 
              apiarios.length > 0 ?
                <View style={{ flex: 1, paddingHorizontal: 5 }}>
                  <ScrollView style={{ flex: 0.7 }}>
                      {apiarios.map(apiario => (
                        <View key={apiario.id} style={{ flex: 1, marginTop: 15 }}>
                          <ApiarioCard apiario={apiario} setMoreOptionsPress={setMoreOptionsModal} setSelectedApiario={setSelectedApiario} />
                        </View>
                      ))}
                  </ScrollView>
                  
                  <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center', }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                      <ContainedButton 
                        disabled={false}
                        onSubmit={() => navigation.navigate(ROUTES.CREATE_APIARY)}
                        label="Crear Apiario"
                      />
                    </View>
                  </View>
              </View>
            : (
              <View style={{ flex: 1, paddingHorizontal: 5 }}>
                
                
                <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center', }}>
                  <View style={{ flex: 1, alignItems: 'center' }}>
                    <ContainedButton 
                      disabled={false}
                      onSubmit={() => navigation.navigate(ROUTES.CREATE_APIARY)}
                      label="Crear Apiario"
                    />
                  </View>
                </View>
              </View>
            )
          }
          </Content>
          {
            openDeleteModal
            ? <DeleteApario
                visible={openDeleteModal}
                onDismiss={() => setOpenDeleteModal(false)}
                selectedApiario={selectedApiario}
              />
            : null
          }
          {
            openMoreOptionsModal
            ? <MoreOptions
                visible={openMoreOptionsModal}
                onDismiss={() => setMoreOptionsModal(false)}
                handleDeletePress={() => setOpenDeleteModal(true)} 
              />
            : null
          }
      </MainContentContainer>
      
      <View>
        <FabMenu />
      </View>
      
      <MenuContainer>
        <Menu />
      </MenuContainer>

    </Container>
  );
}

export default Home;


