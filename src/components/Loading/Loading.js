import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import COLORS from '../../theme/colors'

const MyCustomLoading = ({ size }) => {
    return (
      <ActivityIndicator size={size} animating={true} color={COLORS.YELLOW} />
    )
}



export default MyCustomLoading;