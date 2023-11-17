import React, { useState } from 'react';
import styled from 'styled-components/native';
import useCreateInspection from './useCreateInspection';
import HivePopulation from './HivePopulation';
import BeeStressors from './BeeStressors';
import QueenAndBrood from './QueenAndBrood';
import Flora from './Flora';
import Food from './Food';
import Cajon from './Cajon';
import InspectionSetup from './InspectionSetup';
import InspectionSummary from './InspectionSummary';
import Wizard from '../index'

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;


const createPages = () => ({
    InspectionSetup: {
      start: true,
      component: InspectionSetup,
    },  
    Cajon: {
      start: false,
      component: Cajon,
    },  
    HivePopulation: {
      start: false,
      component: HivePopulation,
    },
    QueenAndBrood: {
      start: false,
      component: QueenAndBrood,
    },
    Flora: {
      start: false,
      component: Flora,
    },
    Food: {
      start: false,
      component: Food,
    },
    BeeStressors: {
      start: false,
      component: BeeStressors,
    },
    InspectionSummary: {
      start: false,
      component: InspectionSummary,
    },
});


const CreateInspectionWizard = () => {
    const [overrideWizardPage, setOverrideWizardPage] = useState('');

    const {
      fields,
      updateField,
      onSubmit,
      colmenas,
      apiarios,
      isVisitedForm,
      mutationLoading
    } = useCreateInspection({
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
              colmenas,
              apiarios,
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

export default CreateInspectionWizard;