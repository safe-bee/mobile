import { TouchableOpacity, View } from "react-native";
import styled from 'styled-components/native';
import COLORS from '../../theme/colors';


const YellowBall = styled.View`
  border-radius: 20px;
  height: 20px;
  width: 20px;
  background-color: ${(props) => props.selected ? COLORS.YELLOW : COLORS.WHITE };
  bottom: 0;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  border: solid black 0.2px;
  elevation: 5;
`;

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  height: 20px;
  justify-content: center;
`;



const Dots = ({
  pages
}) => {
  return (
    <Container>
      {
        pages.map(page => {
          return (
          <TouchableOpacity onPress={page.onPress}>
            <YellowBall selected={page.actualPage} />
          </TouchableOpacity>)
        })
      }
    </Container>
   )
}

export default Dots;