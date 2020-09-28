import styled from 'styled-components/native';
import {Animated, Modal} from 'react-native';
import {hasNotch} from 'react-native-device-info';
import {noNotchHeight, notchHeightIos} from '../../../constants/constants';

export const StyledModal = styled(Modal)`
  flex: 1;
`;
export const StyledTouchableOpacityMainArea = styled.TouchableOpacity`
  position: absolute;
  top: ${hasNotch() ? notchHeightIos : noNotchHeight}px;
  left: 0;
  right: 0;
  bottom: 0;
  flex: 1;
  background-color: #ffffff;
  padding: 30px 0;
`;

export const StyledRecordButtonContainer = styled.View`
  flex: 1;
  height: 120px;
  align-items: center;
  justify-content: center;
`;
export const StyledSkipBackwardsContainer = styled.View`
  flex: 1;
  height: 120px;
  align-items: center;
  justify-content: center;
`;

export const StyledRecordButtonOuter = styled.TouchableOpacity`
  background-color: #333;
  height: 80px;
  width: 80px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
export const StyledSkipBackwardsButtonOuter = styled.TouchableOpacity`
  height: 80px;
  width: 80px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
export const StyledRecordButtonInner = styled(Animated.View)`
  background-color: #ff4800;
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;
