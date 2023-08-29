import useForm from '../../../hooks/useForm';
import { CREATE_APIARIOS, GET_APIARIOS } from '../../../graphql/mutations/createApiarios';
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


export const useCreateApiary = () => {

const [createApiarios] = useMutation(CREATE_APIARIOS, {
    refetchQueries: [{ query: GET_APIARIOS }],
});

const { showSnackbar } = useSnackbar();

const navigation = useNavigation();

const inputFields = {
    hiveName: {
        value: '',
        validations: [requiredValidation],
    },
    dateTask: {
        value: new Date(),
        validations: [],
    },
    environment: {
        value: '',
        validations: [requiredValidation],
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
    async (formValues) => {

        const variables = {
            nombre: formValues.hiveName.value,
            fecha_creacion: formValues.dateTask.value,
            tipo_ambiente: formValues.environment.value.toUpperCase(),
            direccion: formValues.address.value,
            latitud: formValues.region.value.latitude,
            longitud: formValues.region.value.longitude,
            tipo_terreno: "CAMPO",
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
      isVisitedForm
  }
}


export default useCreateApiary;