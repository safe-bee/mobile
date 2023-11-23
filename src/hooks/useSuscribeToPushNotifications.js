import { useMutation } from '@apollo/client';

import { SUBSCRIBE_TO_PUSH_NOTIFICATIONS } from '../graphql/mutations/suscribeToPushNotifications.js';

export default function useSubscribeToPushNotifications() {
  const [subscribeToPushNotifications] = useMutation(SUBSCRIBE_TO_PUSH_NOTIFICATIONS);

  async function handleSubscribeToPushNotifications({
    usuarioId,
    token,
  }) {
    const { data } = await subscribeToPushNotifications({
      variables: {
        usuarioId,
        token,
      },
    }).catch((error) => {
      console.log(error);
    });
  }

  return { handleSubscribeToPushNotifications };
}
