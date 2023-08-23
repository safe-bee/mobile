import { useState, useRef } from 'react';
import useValidatedInput from './useValidatedInput';
import { arrayToObject } from '../helpers';

const useForm = (
  inputFields,
  submitCallback,
  config = { visitRequired: true }
) => {
  const moddedInputFieldsArray = Object.keys(inputFields).map((name) => {
    const field = inputFields[name];
    const [visited, setVisited] = useState(false);
    const ref = useRef();

    const [
      value,
      setValue,
      error,
      validate,
      otherProps,
      setOtherProps,
      focus,
      setFocus,
      setError,
    ] = useValidatedInput(
      field.value,
      field.otherProps,
      field.validations,
      field.optional
    );

    const visitRequiredError = visited && !focus ? error : '';

    return {
      ...field,
      name,
      value,
      setValue,
      otherProps,
      setOtherProps,
      error: config && config.visitRequired ? visitRequiredError : error,
      setError,
      visited,
      setVisited,
      validate,
      setFocus,
      focus,
      ref,
    };
  });

  const withDependencies = (fieldsArray) =>
    fieldsArray.filter((field) => {
      const dependencyFieldName = field.depends;
      if (dependencyFieldName) {
        const dependencyField = moddedInputFieldsArray.find(
          (element) => element.name === dependencyFieldName
        );
        return dependencyField.showDependencies(dependencyField);
      }
      return true;
    });

  const moddedInputFields = arrayToObject(
    withDependencies(moddedInputFieldsArray),
    'name'
  );

  const updateField = ({ name, value, otherProps, unforceVisit = false }) => {
    const targetedField = moddedInputFields[name];

    if (!targetedField.visited) targetedField.setVisited(true);

    if (unforceVisit) targetedField.setVisited(false);

    targetedField.setValue(value);
    targetedField.setOtherProps(otherProps);
  };

  const validateAllFields = () =>
    Object.keys(moddedInputFields).reduce((bool, fieldName) => {
      const field = moddedInputFields[fieldName];

      let fieldIsValid = field.validate();

      if (field.otherProps && field.otherProps.validationOverrideAction) {
        fieldIsValid = field.otherProps.validationOverrideAction(
          field,
          moddedInputFields,
          fieldIsValid
        );
      }

      // this will focus onto firs input that fails validation
      if (bool && !fieldIsValid) {
        if (field.ref && field.ref.current && field.ref.current.focus) {
          field.ref.current.focus();
        }
      }
      return bool ? fieldIsValid : bool;
    }, true);

  const visitFields = () => {
    Object.keys(moddedInputFields).forEach((fieldName) => {
      const field = moddedInputFields[fieldName];
      if (!field.visited) field.setVisited(true);
    });
  };

  const onSubmit = () => {
    visitFields();
    if (validateAllFields()) {
      submitCallback(moddedInputFields);
    }
  };

  const anyVisitedField = () =>
    Object.keys(moddedInputFields).reduce((bool, fieldName) => {
      const fieldI = moddedInputFields[fieldName];

      // if (fieldI.optional) return true;

      const visited = fieldI.visited;

      if (bool) return bool;
      return visited;
    }, false);

  const getValues = () => {
    const inputValues = {};
    Object.keys(moddedInputFields).forEach((fieldName) => {
      inputValues[fieldName] = moddedInputFields[fieldName].value;
    });
    return inputValues;
  };

  return {
    fields: moddedInputFields,
    updateField,
    onSubmit,
    isVisitedForm: anyVisitedField(),
    getValues,
  };
};

export default useForm;
