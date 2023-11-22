import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGN_IN_MUTATION } from "../../graphql/mutations/signIn";
import useForm from "../../hooks/useForm";
import { useUserContext } from "../../context/UserContext"
import AuthService from '../../services/auth.service';
import PushNotificationService from '../../services/pushNotification.service';
import useSubscribeToPushNotifications from '../../hooks/useSuscribeToPushNotifications';

const ERROR_TYPES = {
  USER_NOT_FOUND: "user_not_found",
  USER_DISABLED: "user_disabled",
  INVALID_PASSWORD: "invalid_password",
};

const useSignIn = ({
  handleError,
}) => {
  const { handleSubscribeToPushNotifications }  = useSubscribeToPushNotifications();
  const [signInMutation, { loading }] = useMutation(SIGN_IN_MUTATION);

  const { setCurrentUser } = useUserContext();

  const formConfig = {
    username: {
      value: "",
      validations: [
        {
          type: "required",
          errorMessage: "El usuario es requerido"
        },
      ],
    },
    password: {
      value: "",
      validations: [
        {
          type: "required",
          errorMessage: "Contraseña requerida"
        },
      ],
    },
  };

  const updateCurrentUser = async (user) => {
    setCurrentUser(user);
    const stringifiedData = await JSON.stringify(user);
    await AuthService.setAuth(stringifiedData);
  }
  
  const handleSuscribeToPushNotifications = async () => {
    const pushToken = await PushNotificationService.getPushNotificationToken();
    if (pushToken) {
      await handleSubscribeToPushNotifications({
        pushToken,
      });
    }
  }

  const handleSignIn = async (values) => {
    
    const variables = {
      nombreUsuario: values.username.value,
      contrasena: values.password.value
    };

    try {
        const res = await signInMutation({ variables });
        if (res?.data?.signIn?.usuario) {
            updateCurrentUser(res?.data?.signIn?.usuario);
            //handleSuscribeToPushNotifications()
        }

    } catch (e) {
        if (e.message.includes("Credenciales incorrectas")) {
            handleError("Credenciales incorrectas");
        }
        if (e.message.includes("Usuario Inexistente")) {
            handleError("Usuario Inexistente");
        }
    }

 }


  const { fields, onSubmit, updateField, isVisitedForm } = useForm(
    formConfig,
    handleSignIn
  );


  return {
    fields,
    onSubmit,
    updateField,
    isVisitedForm,
    mutationLoading: loading,
  };
};

export default useSignIn;
