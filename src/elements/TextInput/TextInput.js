import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-remix-icon';
import COLORS from '../../theme/colors';
import FONTS from '../../theme/fonts';
import {
  Container,
  InnerContainer,
  Label,
  LabelContainer,
  StyledTextInput,
  IconContainer,
  ErrorText,
  ErrorContainer,
} from './TextInput.styles';


const TextInput = ({
  label = '',
  labelColor = '',
  editable = true,
  placeholder = '',
  error = '',
  value = '',
  outlined = true,
  rightLabel = null,
  rounded,
  icon,
  borderColor,
  testID = '',
  accessibilityLabel = '',
  accessible = true,
  textArea = false,
  isCalendar = false,
  ...props
}) => {
  
  return (
    <>
    <Container>
      <InnerContainer>
        <LabelContainer>
          {!!label && (
            <View>
              <Label
                color={labelColor}
                fontFamily={FONTS.regular}
              >
                {label}
              </Label>
            </View>
          )}
          {!!rightLabel && rightLabel}
        </LabelContainer>
        {
          icon
          ? (
            <IconContainer>
              <Icon
                name={icon}
                size={20}
                color="#B2B0AB"
              />
            </IconContainer>
          ) : null
        } 


        <View pointerEvents={isCalendar ? 'none' : 'auto'} >
          <StyledTextInput
            autoCorrect={false}
            backgroundColor={COLORS.BLUE_1}
            placeholder={placeholder}
            editable={editable}
            defaultValue={value}
            icon={icon}
            outlined={outlined}
            rounded={rounded}
            borderColor={COLORS.BLUE_1}
            color={COLORS.GREY_90}
            placeholderTextColor={COLORS.GREY_40}
            testID={testID}
            accessibilityLabel={accessibilityLabel}
            accessible={accessible}
            multiline={textArea}
            blurOnSubmit={textArea}
            textArea={textArea}
            {...props}
            />
        </View>
      </InnerContainer>
    </Container>
      {
        error 
          ?           
            <ErrorContainer>
              <Icon name="error-warning-fill" size={17}/>
              <ErrorText>{error}</ErrorText>
            </ErrorContainer>
          : null
       }
      </>
  );
};


export default TextInput;
