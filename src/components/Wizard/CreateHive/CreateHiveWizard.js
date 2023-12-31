import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { useQuery } from "@apollo/client";
import { useUserContext } from '../../../context/UserContext';
import { useCreateHive } from './useCreateHive';
import Wizard from '../index'
import HiveSetup from './HiveSetup';
import HiveAdvanced from './HiveAdvanced';
import HiveQueen from './HiveQueen';
import { GET_APIARIO } from '../../../graphql/queries/index';
import Loading from '../../Loading/index';

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;


const createPages = () => ({
    HiveSetup: {
      start: true,
      component: HiveSetup,
    },
    HiveAdvanced: {
      start: false,
      component: HiveAdvanced,
    },
    HiveQueen: {
      start: false,
      component: HiveQueen,
    },
    /*
    HiveConfirm: {
      start: false,
      component: HiveConfirm,
    },
    */
});


const CreateHiveWizard = ({ route }) => {
    const [overrideWizardPage, setOverrideWizardPage] = useState('');

    const { currentUser } = useUserContext();
    const { apiarioId } = route.params;
    
    const { data, error, loading, refetch } = useQuery(GET_APIARIO, { variables: { apiarioId },  fetchPolicy: "cache-and-network" });


    const {
      fields,
      updateField,
      onSubmit,
      isVisitedForm,
      mutationLoading
    } = useCreateHive({
      setError: () => {},
      setSuccess: () => {},
      apiarioId: data?.apiario?.id,
      usuarioId: currentUser?.usuarioId
    });

    return (
         <Container>
            {
              loading
              ? <Loading size={50} /> 
              :               
              <Wizard
                pages={createPages()}
                wizardState={{
                  fields,
                  onSubmit,
                  isVisitedForm,
                  apiario: data?.apiario,
                  mutationLoading
                }}
                wizardStateSetters={{
                updateField
              }}
                wizardPageOverride={overrideWizardPage}
                setWizardPageOverride={setOverrideWizardPage}
              />
           }
          </Container>
      
       
    )

}

export default CreateHiveWizard;