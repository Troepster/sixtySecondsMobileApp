import styled from 'styled-components/native';
import {Modal, Pressable} from 'react-native';
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
  position: absolute;
  width: 100%;
  height: 120px;
  align-items: center;
  justify-content: center;
`;

export const StyledRecordButtonOuter = styled(Pressable)`
  background-color: #333;
  height: 80px;
  width: 80px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
export const StyledRecordButtonInner = styled(Pressable)`
  background-color: red;
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;
