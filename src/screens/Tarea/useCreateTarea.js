import useForm from '../../hooks/useForm';
import { useEffect } from 'react';
import { CREATE_TAREA } from '../../graphql/mutations/createTarea';
import { GET_APIARIOS } from '../../graphql/queries/index';
import { useMutation, useQuery } from "@apollo/client";
import { ROUTES } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { useSnackbar } from '../../context/SnackbarContext';

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
    { value: 'TRATAMIENTO_VARROA', label: 'Tratamiento Varroa' },
    { value: 'MUERTE', label: 'Muerte' },
    { value: 'INSPECCION', label: 'Inspeccion' },
];


const useCreateTarea = () => {

const { data, loading: apiariosLoading } = useQuery(GET_APIARIOS, { fetchPolicy: "cache-and-network" });

const [createTarea, { loading }] = useMutation(CREATE_TAREA);

const apiarios = data?.apiarios.map(apiario => ({ value: apiario.id, label: apiario.nombre }));

const colmenasXApiario = data?.apiarios.map(apiario => ({ id: apiario.id, colmenas: apiario.colmenas.map(colmena => ({ label: colmena.nombre, value: colmena.id })) }));


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
       console.log("colmenaId");
       console.log(formValues.colmena.value);
        
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