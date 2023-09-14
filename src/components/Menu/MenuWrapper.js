import FabMenu from './FabMenu'
import { View, ScrollView } from "react-native";
import { MenuContainer, MainContentContainer, Content } from '../../screens/sharedStyles';
import Menu from '../../components/Menu/Menu';

const MenuWrapper = () => {
    return (
      <>
      <View>
        <FabMenu />
      </View>
      
      <MenuContainer>
        <Menu />
      </MenuContainer>
      </>
    )
};

export default MenuWrapper;