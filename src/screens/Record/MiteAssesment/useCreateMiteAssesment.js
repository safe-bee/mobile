import useForm from '../../../hooks/useForm';
import useGetApariosPorColmenas from '../../../hooks/useGetApariosPorColmenas';
import useGetTareasAsociadas from '../../../hooks/useGetTareasAsociadas';
import { useEffect } from 'react';
import { CREATE_VARROA } from '../../../graphql/mutations/createRecords';
import { useMutation } from "@apollo/client";
import { ROUTES } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import { useSnackbar } from '../../../context/SnackbarContext';

const requiredValidation = {
    type: "required",
    errorMessage: "El campo es requerido."
};

const tipoMetodos = [
    { value: 'ALCOHOL', label: 'Alcohol' },
    { value: 'DETERGENTE', label: 'Detergente' },
    { value: 'AZUCAR', label: 'Azucar' },
    { value: 'OTRO', label: 'Otro' },
];


const useCreateMiteAssesment = () => {


const [createVarroa, { loading }] = useMutation(CREATE_VARROA);

const {
    apiarios,
    colmenasXApiario
} = useGetApariosPorColmenas();


const { showSnackbar } = useSnackbar();

const navigation = useNavigation();

const inputFields = {
    fechaDeRegistro: {
        value: new Date(),
        validations: [requiredValidation],
    },
    apiario: {
       value: apiarios[0].value,
       validations: [requiredValidation],
    },
    colmena: {
        value: colmenasXApiario[0].colmenas[0].value,
        validations: [requiredValidation],
     },
     tareaAsociada: {
        value: { label: '', value: '' },
        validations: [],
     },
     tipoMetodo: {
        value: tipoMetodos[0].value,
        validations: [requiredValidation],
    },
    porcentaje: {
        value: '',
        validations: [requiredValidation],
    },
    notas: {
        value: '',
        validations: [],
    }
};

const { fields, updateField, onSubmit, isVisitedForm } = useForm(
    inputFields,
    async (formValues) => {

        const variables = {
            colmenaId: formValues.colmena.value,
            porcentaje: parseFloat(formValues.porcentaje.value),
            fecha: formValues.fechaDeRegistro.value,
            tipoMetodo: formValues.tipoMetodo.value,
            notas: formValues.notas.value,
        };

         if (formValues.tareaAsociada.value.value) {
            variables.tareaId = formValues.tareaAsociada.value.value;
        }
        
       try {
            const res = await createVarroa({ variables });
            navigation.navigate(ROUTES.HOME);
        
            if (!res.data.errors) {
                showSnackbar("La tarea se creo correctamente!", "", "success");
            } else {
                showSnackbar("Ha habido un error!", "", "error");
            }
        } catch (e) {
            console.log(e);
        }
        
    }
  );

  const { tareasAsociadas } = useGetTareasAsociadas({ tipoRegistro: 'VARROA', colmenaId: fields?.colmena.value });

  const colmenasDelApiarioSeleccionado = colmenasXApiario.find(item => item.id === fields?.apiario.value)?.colmenas;


  useEffect(() => {
    if (fields?.apiario.value) {
        updateField({ name: "colmena", value: colmenasDelApiarioSeleccionado[0].value })
    }
  }, [fields?.apiario.value]);


  useEffect(() => {
    if (fields?.colmena.value && tareasAsociadas?.length) {
        updateField({ name: "tareaAsociada", value: tareasAsociadas[0] })
    }
  }, [fields?.colmena.value]);

  return {
      fields,
      updateField,
      onSubmit,
      isVisitedForm,
      mutationLoading: loading,
      tipoMetodos,
      apiarios,
      colmenas: colmenasDelApiarioSeleccionado,
      tareasAsociadas
  }
}


export default useCreateMiteAssesment;