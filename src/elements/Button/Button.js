import React from 'react';
import { Button } from 'react-native-paper';
import COLORS from '../../theme/colors';

const ContainedButton = ({
  disabled = false,
  onSubmit,
  contentStyle = {},
  label = '',
  icon = () => {},
  formButton = true,
  buttonColor = COLORS.YELLOW,
  labelColor = COLORS.BLACK_2
}) => {
    return (
      <Button
        disabled={disabled}
        mode="contained"
        onPress={onSubmit}
        icon={icon}
        uppercase={false}
        contentStyle={contentStyle}
        style={{ borderRadius: 20, backgroundColor: buttonColor, width: formButton ? '80%' : '100%' }}
        labelStyle={{ color: labelColor, fontWeight: 'bold' }}
      >
        {label}
      </Button>
  )
}

const TextButton = ({
    disabled = false,
    onSubmit,
    contentStyle = {},
    label = '',
    formButton = true,
  }) => {
      return (
        <Button
          disabled={disabled}
          mode="text"
          onPress={onSubmit}
          uppercase={false}
          contentStyle={contentStyle}
          style={{ width: formButton ? '80%' : '100%' }}
          labelStyle={{ color: COLORS.BLACK_2, fontWeight: 'bold' }}
        >
          {label}
        </Button>
    )
  }


export { ContainedButton, TextButton };