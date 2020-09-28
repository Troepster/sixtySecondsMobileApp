import {MaterialCommunityIcons, MaterialIcons} from '../../../../theme/icon';
import React from 'react';
import styled from 'styled-components/native';
import {
  StyledMinusTouchableOpacity,
  StyledPlusTouchableOpacity,
  StyledSpeedText,
  StyledSpeedTextContainer,
} from './ControllerRow';
import {StyledTitleTextContainer} from './SpeedContainer';

const StyledPlayerContainer = styled.View`
  flex: 1.5;
  flex-direction: row;
`;

export const StyledPlayerTitleText = styled.Text`
  text-align: center;
`;

interface Props {
  play: boolean;
  direction: 'up' | 'down';
  currentPosition: number;
  handlePlayChange: (directionSub: 'down' | 'up') => () => void;
}

const PlayerContainer = (props: Props) => {
  const {handlePlayChange, currentPosition, play, direction} = props;
  console.log(currentPosition);
  return (
    <StyledPlayerContainer>
      <StyledMinusTouchableOpacity
        onPress={handlePlayChange('up')}
        disabled={currentPosition === 0}>
        <MaterialCommunityIcons
          color="#243F68"
          style={{marginRight: 20, opacity: currentPosition === 0 ? 0.2 : 1}}
          name={play && direction === 'up' ? 'stop' : 'rewind'}
          size={20}
        />
      </StyledMinusTouchableOpacity>
      <StyledPlusTouchableOpacity
        onPress={handlePlayChange('down')}
        disabled={currentPosition === 60}>
        <MaterialIcons
          color="#243F68"
          style={{marginLeft: 20, opacity: currentPosition === 60 ? 0.2 : 1}}
          name={play ? 'stop' : 'play-arrow'}
          size={20}
        />
      </StyledPlusTouchableOpacity>
      <StyledTitleTextContainer pointerEvents="none">
        <StyledPlayerTitleText>Player</StyledPlayerTitleText>
      </StyledTitleTextContainer>
      <StyledSpeedTextContainer pointerEvents="none">
        <StyledSpeedText>
          {play ? (direction === 'down' ? 'Playing' : 'Rewind') : 'Stopped'}
        </StyledSpeedText>
      </StyledSpeedTextContainer>
    </StyledPlayerContainer>
  );
};

export default PlayerContainer;
