import useForm from '../../../hooks/useForm';
import useGetApariosPorColmenas from '../../../hooks/useGetApariosPorColmenas';
import { useEffect } from 'react';
import { CREATE_TAREA } from '../../../graphql/mutations/createTarea';
import { useMutation } from "@apollo/client";
import { ROUTES } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import { useSnackbar } from '../../../context/SnackbarContext';

const requiredValidation = {
    type: "required",
    errorMessage: "El campo es requerido."
};

const tipoPlagas = [
    { value: 'NOSEMA', label: 'Nosema' },
    { value: 'VARROA', label: 'Varroa' },
    { value: 'POLILLAS', label: 'Polillas' },
    { value: 'OTRAS', label: 'Otras' },
];


const useCreateTreatment = () => {


const [createTarea, { loading }] = useMutation(CREATE_TAREA);

const {
    apiarios,
    colmenasXApiario
} = useGetApariosPorColmenas();


const { showSnackbar } = useSnackbar();

const navigation = useNavigation();

const inputFields = {
    fechaDeTarea: {
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
     tipoPlaga: {
        value: tipoPlagas[0].value,
        validations: [requiredValidation],
    },
    dosis: {
        value: '',
        validations: [],
    },
    producto: {
        value: '',
        validations: [],
    },
};

const { fields, updateField, onSubmit, isVisitedForm } = useForm(
    inputFields,
    async (formValues) => {

        const variables = {
            dosis: formValues.dosis.value,
            producto: formValues.producto.value,
            colmenaId: formValues.colmena.value,
            fecha: formValues.fechaDeTarea.value,
            tipoPlaga: formValues.tipoPlaga.value
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
      tipoPlagas,
      apiarios,
      colmenas: colmenasDelApiarioSeleccionado
  }
}


export default useCreateTreatment;