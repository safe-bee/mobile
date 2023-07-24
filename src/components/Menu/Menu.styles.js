import styled from 'styled-components/native';
import Icon from 'react-native-remix-icon';

export const Container = styled.View`
   flex: 1;
   flex-direction: row;
   border: 1px solid grey;
   border-top-color: #E5E2DC;
   border-bottom-width: 0;
   border-left-width: 0;
   border-right-width: 0;
`;

export const IconContainer = styled.TouchableOpacity`
   flex: 1;
   justify-content: center;
   align-items: center;
`;

export const RIcon = styled(Icon)`
`;

export const MenuTitle = styled.Text`
   color: ${(props) => props.color};
   font-size: 11px;
`;
