import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Wrapper = styled.View`
  width: 95%;
  height: 120px;
  background-color: #f7f7f7;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Image = styled(Animated.View)`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-right: 22px;
`;

export const Title = styled(Animated.View)`
  height: 25px;
  min-width: 70%;
  border-radius: 10px;
`;


export const Description = styled(Animated.View)`
  height: 60px;
  min-width: 70%;
  border-radius: 10px;
`;

export const TextWrapper = styled.View`
  justify-content: space-between;
  gap: 10px;
`;
