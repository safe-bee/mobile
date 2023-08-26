import useForm from '../../../hooks/useForm';

export const LATITUD_DELTA = 0.05;
export const LONGITUD_DELTA = 0.05;

export const BUENOS_AIRES_COORD = {
    "latitude": -34.6038188,
    "latitudeDelta": LATITUD_DELTA,
    "longitude": -58.3793510,
    "longitudeDelta": LONGITUD_DELTA
};

export const AV_CORRIENTES_COORD = {
    "latitude": -34.60381877255421, 
    "latitudeDelta": LATITUD_DELTA,
    "longitude": -58.379350751638405,
    "longitudeDelta": LONGITUD_DELTA
};



export const useCreateApiary = ({
    setError,
    setSuccess
}) => {

const inputFields = {
    hiveName: {
        value: '',
        validations: [],
    },
    dateTask: {
        value: new Date(),
        validations: [],
    },
    environment: {
        value: '',
        validations: [],
    },
    address: {
        value: 'Buenos Aires, Argentina',
        validations: [],
    },
    region: {
        value: BUENOS_AIRES_COORD,
        validations: [],
    }
};

const { fields, updateField, onSubmit, isVisitedForm } = useForm(
    inputFields,
    async (values) => {
        console.log(values);
        /*
            const apiObject = toAPIObject(values);
            const res = await handleUpdateUserPreferences(apiObject);

            const {
            updateUserPreferences: { errors },
            } = res.data;

            if (errors !== null && errors.length > 0) {
            setError(i18n.t('settings-useStockMessages-error'));
            } else {
            setSuccess(i18n.t('settings-useStockMessages-success'));
            handleStockMessagesUpdateSuccess(values);
            }
        */
    }
  );

  return {
      fields,
      updateField,
      onSubmit,
      isVisitedForm
  }
}


export default useCreateApiary;