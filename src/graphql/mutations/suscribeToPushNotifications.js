import { gql } from "@apollo/client";


export const SUBSCRIBE_TO_PUSH_NOTIFICATIONS = gql`
    mutation subscribeToPushNotifications(
        $input: SubscribeToPushNotificationsInput!
    ) {
        subscribeToPushNotifications(input: $input) {
        errors {
            reason
            field
        }
      }
    }
`;

