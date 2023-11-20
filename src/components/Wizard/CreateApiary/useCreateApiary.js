import useForm from '../../../hooks/useForm';
import { CREATE_APIARIOS } from '../../../graphql/mutations/createApiarios';
import { GET_APIARIOS } from '../../../graphql/queries/index';
import executeQuery from '../../../graphql/api';
import { ROUTES } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from "@apollo/client";
import { useSnackbar } from '../../../context/SnackbarContext';

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


const requiredValidation = {
    type: "required",
    errorMessage: "El campo es requerido."
};


export const useCreateApiary = (initFields) => {

    console.log(initFields);
 const [createApiarios, { loading }] = useMutation(CREATE_APIARIOS, {
    refetchQueries: [{ query: GET_APIARIOS }],
 })

const { showSnackbar } = useSnackbar();

const navigation = useNavigation();

const inputFields = {
    apiaryName: {
        value: initFields?.apiariyName ||'',
        validations: [requiredValidation],
    },
    dateTask: {
        value: initFields?.dateTask || new Date(),
        validations: [],
    },
    environment: {
        value: initFields?.environment || '',
        validations: [requiredValidation],
    },
    address: {
        value: initFields?.address || 'Buenos Aires, Argentina',
        validations: [],
    },
    region: {
        value: initFields?.region || BUENOS_AIRES_COORD,
        validations: [],
    }
};

const { fields, updateField, onSubmit, isVisitedForm } = useForm(
    inputFields,
    async (formValues) => {

        const variables = {
            nombre: formValues.apiaryName.value,
            fecha_creacion: formValues.dateTask.value,
            tipo_ambiente: formValues.environment.value.toUpperCase(),
            direccion: formValues.address.value,
            latitud: formValues.region.value.latitude,
            longitud: formValues.region.value.longitude,
        };

        try {
            const res = await createApiarios({ variables });
            navigation.navigate(ROUTES.HOME);
            
            if (!res.data.errors) {
                showSnackbar("El apiario se creo correctamente!", "", "success");
            } else {
                showSnackbar("Ha habido un error!", "", "error");
            }
        } catch (e) {
            console.log(e);
        }
    }
  );

  return {
      fields,
      updateField,
      onSubmit,
      isVisitedForm,
      mutationLoading: loading
  }
}


export default useCreateApiary;