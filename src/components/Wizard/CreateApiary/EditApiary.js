import React, { useState } from 'react';
import { View } from "react-native";
import styled from 'styled-components/native';
import { useQuery } from "@apollo/client";
import { GET_APIARIO  } from '../../../graphql/queries/index';
import { useUserContext } from '../../../context/UserContext';
import { useRoute } from '@react-navigation/native';
import { useCreateApiary } from './useCreateApiary';
import ApiarySetup from './ApiarySetup';
import ApiaryLocation from './ApiaryLocation';
import ApiaryEnvironment from './ApiaryEnvironment';
import Wizard from '../index'

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;


const createPages = () => ({
    ApiarySetup: {
      start: true,
      component: ApiarySetup,
    },
    ApiaryEnvironment: {
      start: false,
      component: ApiaryEnvironment,
    },
    ApiaryLocation: {
      start: false,
      component: ApiaryLocation,
    },
});


const EditApiaryWizard = () => {
  const { currentUser } = useUserContext();    
  const [overrideWizardPage, setOverrideWizardPage] = useState('');

    const route = useRoute();
    const { apiarioId } = route.params;

    const { data } = useQuery(
        GET_APIARIO, 
        { variables: { apiarioId },  
        fetchPolicy: "cache-and-network"
    });

    const editApiario = {
        apiaryName: data?.apiario?.nombre,
        dateTask: data?.apiario?.fecha_creacion,
        environment: data?.apiario?.tipo_ambiente,
        address: data?.apiario?.direccion,
        region: { latitude: data?.apiario.latitud, longitude: data?.apiario.longitud }
    }

    const {
      fields,
      updateField,
      onSubmit,
      isVisitedForm,
      mutationLoading
    } = useCreateApiary({
      initFields: editApiario,
      usuarioId: currentUser?.usuarioId,
    });

    
    return (
        <Container>
          <Wizard
            pages={createPages()}
            wizardState={{
              fields,
              onSubmit,
              isVisitedForm,
              mutationLoading
            }}
            wizardStateSetters={{
              updateField
            }}
            wizardPageOverride={overrideWizardPage}
            setWizardPageOverride={setOverrideWizardPage}
          />
        </Container>
    )

}

export default EditApiaryWizard;