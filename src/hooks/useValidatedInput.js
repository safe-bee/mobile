import { useState, useEffect } from 'react';
import { isNil } from 'ramda';
import { containsNoValue } from '../utils/helpers';
import { emailRegex, phoneRegex } from '../utils/validation';

const checkCase = (errorMessage) => (val, setError) => {
  if (val.toUpperCase() === val || val.toLowerCase() === val) {
    setError(errorMessage);
    return false;
  }
  setError('');
  return true;
};

const checkNumber = (errorMessage) => (val, setError) => {
  if (!/\d/.test(val)) {
    setError(errorMessage);
    return false;
  }
  setError('');
  return true;
};

const createRequired = (errorMessage) => (val, setError) => {
  if (isNil(val) || containsNoValue(val)) {
    setError(errorMessage);
    return false;
  }
  setError('');
  return true;
};

const createMaxLength = (maxLength, errorMessage) => (text, setError) => {
  if (text.length > maxLength) {
    setError(errorMessage);
    return false;
  }
  setError('');
  return true;
};

const createMinLength = (minLength, errorMessage) => (text, setError) => {
  if (text.length < minLength) {
    setError(errorMessage);
    return false;
  }
  setError('');
  return true;
};

const createEmailFormat = (errorMessage) => (val, setError) => {
  if (!emailRegex.test(val)) {
    setError(errorMessage);
    return false;
  }
  setError('');
  return true;
};

const createPhoneFormat = (errorMessage) => (val, setError) => {
  if (!phoneRegex.test(val)) {
    setError(errorMessage);
    return false;
  }

  setError('');
  return true;
};

const checkTemperatureFormat = (errorMessage)  => (val, setError) => {
  const temperatura = parseFloat(val);

  if (isNaN(temperatura) || temperatura < -40 || temperatura > 50) {
    setError(errorMessage);
    return false;
  }
  setError('');
  return true;
}

const useValidatedInput = (
  initialValue,
  initialOtherProps,
  validationTypes = [],
  optional = false
) => {
  const [text, setText] = useState(initialValue);
  const [otherProps, setOtherProps] = useState(initialOtherProps);
  const [error, setError] = useState('');
  const [focus, setFocus] = useState(false);

  const validationTypeToMethod = (type) => {
    switch (type.type) {
      case 'required':
        return createRequired(type.errorMessage);

      case 'maxLength':
        return createMaxLength(type.maxLength, type.errorMessage);

      case 'minLength':
        return createMinLength(type.minLength, type.errorMessage);

      case 'emailFormat':
        return createEmailFormat(type.errorMessage);

      case 'phoneFormat':
        return createPhoneFormat(type.errorMessage);

      case 'temperature':
        return checkTemperatureFormat(type.errorMessage);

      case 'hasNumber':
          return checkNumber(type.errorMessage);

      case 'hasUpperAndLowerCase':
        return checkCase(type.errorMessage);
      case 'urlFormat':
        return testValidUrl(type.errorMessage);
      default:
        return () => true;
    }
  };

  const validationMethods = validationTypes.map((type) =>
    validationTypeToMethod(type)
  );

  const validate = () => {
    if (optional && text === '') {
      setError('');
      return true;
    }

    const valid = validationMethods.reduce((isValid, method) => {
      if (!isValid) return isValid;
      return method(text, setError);
    }, true);

    return valid;
  };

  useEffect(() => {
    validate();
  }, [text]);

  return [
    text,
    setText,
    error,
    validate,
    otherProps,
    setOtherProps,
    focus,
    setFocus,
    setError,
  ];
};

export default useValidatedInput;
