import useForm from '../../../hooks/useForm';
import { CREATE_COLMENAS } from '../../../graphql/mutations/createColmenas';
import { ROUTES } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from "@apollo/client";
import { useSnackbar } from '../../../context/SnackbarContext';


const requiredValidation = {
    type: "required",
    errorMessage: "El campo es requerido."
};


export const useCreateHive = ({ apiarioId }) => {

const [createApiarios] = useMutation(CREATE_COLMENAS, {});

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
            apiarioId,
            nombre: formValues.hiveName.value,
            tipo: formValues.hiveType.value,
            datosNumeroDeep: formValues.datosNumeroDeep.value || null,
            datosNumeroSupers: formValues.datosNumeroSupers.value || null,
            datosTotalCuadros: formValues.datosNumeroCuadros.value || null,
            datosColor: formValues.color.value || null,
            datosFechaEstablecimiento: formValues.fechaEstablecimiento.value || null,
            reinaTipo: formValues.tipoReina.value || null,
            reinaColor: formValues.colorReina.value || null,
            reinaFechaAceptacion: formValues.reinaFechaAceptacion.value || null,
            reinaNotas: formValues.reinaNotas.value || null
        };

        console.log(variables);

        /*
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


export default useCreateHive;