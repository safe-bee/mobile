import React from 'react';
import { View } from 'react-native'
import styled from 'styled-components/native';
import COLORS from '../../theme/colors';
import Menu from '../../components/Menu/index';
import FabMenu from '../../components/Menu/FabMenu';
import { MenuContainer, MainContentContainer, Content } from '../../screens/sharedStyles';
import CreateInspectionWizard from '../../components/Wizard/Inspection/CreateInspectionWizard';


export const ContentContainer = styled.View`
  flex: 0.9;
`;

export const Container = styled.View`
  flex: 1;
`;

const Inspection = () => {
  return (
    <CreateInspectionWizard />
  );
}

export default Inspection;