import { useMutation } from '@apollo/client';

import { SUBSCRIBE_TO_PUSH_NOTIFICATIONS } from '../graphql/mutations/suscribeToPushNotifications.js';

export default function useSubscribeToPushNotifications() {
  const [subscribeToPushNotifications] = useMutation(SUBSCRIBE_TO_PUSH_NOTIFICATIONS);

  async function handleSubscribeToPushNotifications({
    username,
    pushToken,
  }) {
    const { data } = await subscribeToPushNotifications({
      variables: {
        input: {
          username,
          pushToken,
        },
      },
    }).catch((error) => {
      console.log(error);
    });
  }

  return {handleSubscribeToPushNotifications};
}
