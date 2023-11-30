import useForm from '../../hooks/useForm';
import { useEffect } from 'react';
import { CREATE_TAREA } from '../../graphql/mutations/createTarea';
import { useRealizarTareaContext } from '../../context/RealizarTareaContext';
import { useMutation, useQuery } from "@apollo/client";
import { ROUTES } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { useSnackbar } from '../../context/SnackbarContext';
import useGetApiariosPorColmenas from '../../hooks/useGetApariosPorColmenas'

const requiredValidation = {
    type: "required",
    errorMessage: "El campo es requerido."
};

const tipoAlertas = [
    { value: 'COSECHA', label: 'Cosecha' },
    { value: 'TRATAMIENTO', label: 'Tratamiento' },
    { value: 'ALIMENTACION', label: 'Alimentacion' },
    { value: 'CAMBIO_DE_CUADROS', label: 'Cambio de cuadros' },
    { value: 'HIBERNACION', label: 'Hibernacion' },
    { value: 'VARROA', label: 'Varroa' },
    { value: 'TRATAMIENTO_VARROA', label: 'Conteo Varroa' },
    { value: 'MUERTE', label: 'Muerte' },
    { value: 'INSPECCION', label: 'Inspeccion' },
];


const useCreateTarea = () => {

const [createTarea, { loading }] = useMutation(CREATE_TAREA);

const {
  apiarios,
  colmenasXApiario
} = useGetApiariosPorColmenas();


const { showSnackbar } = useSnackbar();

const navigation = useNavigation();

const inputFields = {
    tipoAlerta: {
        value: tipoAlertas[0].value,
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
    fechaDeTarea: {
        value: new Date(),
        validations: [requiredValidation],
    },
    notas: {
        value: '',
        validations: [],
    },
};

const { fields, updateField, onSubmit, isVisitedForm } = useForm(
    inputFields,
    async (formValues) => {

        const variables = {
            descripcion: formValues.notas.value,
            colmenaId: formValues.colmena.value,
            fecha: formValues.fechaDeTarea.value,
            tipoRegistro: formValues.tipoAlerta.value
        };
        
       try {
            const res = await createTarea({ variables });
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

  const colmenasDelApiarioSeleccionado = colmenasXApiario.find(item => item.id === fields?.apiario.value)?.colmenas;


  useEffect(() => {
    if (fields?.apiario.value) {
        updateField({ name: "colmena", value: colmenasDelApiarioSeleccionado[0] })
    }
  }, [fields?.apiario.value]);



  return {
      fields,
      updateField,
      onSubmit,
      isVisitedForm,
      mutationLoading: loading,
      tipoAlertas,
      apiarios,
      colmenas: colmenasDelApiarioSeleccionado
  }
}


export default useCreateTarea;