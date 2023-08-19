import styled from 'styled-components/native';
import { Text } from 'react-native-paper';
import COLORS from '../../theme/colors';
import { makeSize, SIZES } from '../../theme/sizes';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: ${SIZES.SM}px;
`;

export const InnerContainer = styled.View`
  flex: 1;
`;

export const Label = styled(Text)`
  text-transform: uppercase;
  font-family: ${(props) => props.fontFamily};
  font-size: ${makeSize(2.8)}px;
  color: ${(props) => props.color || COLORS.GREY_4};
`;

export const LabelContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${SIZES.SM}px;
`;

export const StyledTextInput = styled.TextInput`
  //padding-left: ${(props) => (props.icon ? SIZES.XXL : SIZES.SM) }px;
  padding-left: ${SIZES.SM}px;
  padding-right: ${(props) => (props.icon ? SIZES.XXL : SIZES.SM) }px;
  //padding-right: ${SIZES.SM}px;
  padding-vertical: ${makeSize(3)}px;
  border-width: ${(props) => (props.outlined ? 1 : 0)}px;
  border-color: ${(props) => props.borderColor};
  border-radius: ${(props) => props.rounded ? SIZES.LG : 8}px;
  text-align-vertical: ${(props) => props.multiline ? 'top' : 'center'};
  elevation: 2;
  ::placeholder {
    color: ${COLORS.GREY_3};
  }
  ${({ textArea }) => textArea && `height: 124;`}
`;

export const ErrorContainer = styled.View`
  align-items: center;
  flex-direction: row;
  flex: 1;
`;

export const ErrorText = styled(Text)`
  color: ${COLORS.RED_100};
  margin-left: ${SIZES.XS}px;
`;

export const IconContainer = styled.View`
  position: absolute;
  flex: 1;
  align-items: center;
  bottom: 19%;
  right: 15px;
  z-index: 1;
`;
