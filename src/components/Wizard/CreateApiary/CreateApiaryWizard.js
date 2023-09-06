import React, { useState } from 'react';
import { View } from "react-native";
import styled from 'styled-components/native';
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


const CreateApiaryWizard = () => {
    const [overrideWizardPage, setOverrideWizardPage] = useState('');

    const {
      fields,
      updateField,
      onSubmit,
      isVisitedForm
    } = useCreateApiary({
      setError: () => {},
      setSuccess: () => {},
    });

    
    return (
        <Container>
          <Wizard
            pages={createPages()}
            wizardState={{
              fields,
              onSubmit,
              isVisitedForm
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

export default CreateApiaryWizard;