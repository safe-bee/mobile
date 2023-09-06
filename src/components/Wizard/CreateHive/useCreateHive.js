import useForm from '../../../hooks/useForm';
import { CREATE_APIARIOS, GET_APIARIOS } from '../../../graphql/mutations/createApiarios';
import { ROUTES } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from "@apollo/client";
import { useSnackbar } from '../../../context/SnackbarContext';


const requiredValidation = {
    type: "required",
    errorMessage: "El campo es requerido."
};


export const useCreateHive = () => {

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
    hiveType: {
        value: '',
        validations: [requiredValidation],
    },
    datosNumeroDeep: {
        value: '',
        validations: [],
    },
    datosNumeroSupers: {
        value: '',
        validations: [],
    },
    datosNumeroCuadros: {
        value: '',
        validations: [],
    },
    color: {
        value: '',
        validations: [],
    },
    fechaEstablecimiento: {
        value: new Date(),
        validations: [],
    },
    tipoReina: {
        value: '',
        validations: [],
    },
    colorReina: {
        value: '',
        validations: [],
    },
    reinaFechaAceptacion: {
        value: '',
        validations: [],
    },
    reinaNotas: {
        value: '',
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


export default useCreateHive;