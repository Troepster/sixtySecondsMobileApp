import {MaterialIcons} from '../../../../theme/icon';
import React from 'react';
import styled from 'styled-components/native';
import {
  StyledMinusTouchableOpacity,
  StyledPlusTouchableOpacity,
  StyledSpeedText,
  StyledSpeedTextContainer,
} from './ControllerRow';

const StyledSpeedContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const StyledTitleTextContainer = styled.View`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 10px;
`;

export const StyledSpeedTitleText = styled.Text`
  text-align: center;
`;

interface Props {
  speed: number;
  handleSpeedChange: (speedDirection: 'faster' | 'slower') => () => void;
}

const SpeedContainer = (props: Props) => {
  const {handleSpeedChange, speed} = props;
  return (
    <StyledSpeedContainer>
      <StyledMinusTouchableOpacity
        onPress={handleSpeedChange('slower')}
        disabled={speed === 1}>
        <MaterialIcons
          color="#243F68"
          style={{marginRight: 20, opacity: speed === 1 ? 0.2 : 1}}
          name="remove"
          size={15}
        />
      </StyledMinusTouchableOpacity>
      <StyledPlusTouchableOpacity
        onPress={handleSpeedChange('faster')}
        disabled={speed === 10}>
        <MaterialIcons
          color="#243F68"
          style={{marginLeft: 20, opacity: speed === 10 ? 0.2 : 1}}
          name="add"
          size={15}
        />
      </StyledPlusTouchableOpacity>
      <StyledTitleTextContainer pointerEvents="none">
        <StyledSpeedTitleText>Speed</StyledSpeedTitleText>
      </StyledTitleTextContainer>
      <StyledSpeedTextContainer pointerEvents="none">
        <StyledSpeedText>x {speed}</StyledSpeedText>
      </StyledSpeedTextContainer>
    </StyledSpeedContainer>
  );
};

export default SpeedContainer;
