import useForm from '../../../hooks/useForm';
import { CREATE_COLMENAS } from '../../../graphql/mutations/createColmenas';
import { useMutation } from "@apollo/client";
import { GET_APIARIOS } from '../../../graphql/queries/index';
import { ROUTES } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import { useSnackbar } from '../../../context/SnackbarContext';

const requiredValidation = {
    type: "required",
    errorMessage: "El campo es requerido."
};


export const useCreateInspection = ({ apiarioId }) => {
/*
const [createColmenas, { loading }] = useMutation(CREATE_COLMENAS, {
  refetchQueries: [{ query: GET_APIARIOS }],
});
*/

const { showSnackbar } = useSnackbar();

const navigation = useNavigation();

const inputFields = {
    estadoCajon: {
        value: true,
        validations: [requiredValidation],
    },
    estadoPoblacion: {
        value: true,
        validations: [requiredValidation],
    },
    estadoReina: {
        value: true,
        validations: [],
    },
    estadoFloraCircundante: {
        value: true,
        validations: [],
    },
    estadoAlimento: {
        value: true,
        validations: [],
    },
    estadoPlagas: {
        value: true,
        validations: [],
    },
};

const { fields, updateField, onSubmit, isVisitedForm } = useForm(
    inputFields,
    async (formValues) => {

        /*
        const variables = {
            nombre: formValues.hiveName.value,
            apiarioId,
            tipo: formValues.hiveType.value,
            datosTotalCuadros: formValues.datosNumeroCuadros.value || null,
            datosColor: formValues.color.value || null,
            datosFechaEstablecimiento: formValues.fechaEstablecimiento.value || null,
            reinaTipo: formValues.tipoReina.value || null,
            reinaColor: formValues.colorReina.value || null,
            reinaFechaAceptacion: formValues.reinaFechaAceptacion.value || null,
            reinaNotas: formValues.reinaNotas.value || null
        };
        
        try {
            const res = await createColmenas({ variables });
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
      isVisitedForm,
      //mutationLoading: loading
  }
}


export default useCreateInspection;