import React from 'react';
import { Button } from 'react-native-paper';
import COLORS from '../../theme/colors';

const ContainedButton = ({
  disabled = false,
  onSubmit,
  contentStyle = {},
  label = '',
  formButton = true,
}) => {
    return (
      <Button
        disabled={disabled}
        mode="contained"
        onPress={onSubmit}
        uppercase={false}
        contentStyle={contentStyle}
        style={{ borderRadius: 20, backgroundColor: COLORS.YELLOW, width: formButton ? '80%' : '100%' }}
        labelStyle={{ color: COLORS.BLACK_2, fontWeight: 'bold' }}
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