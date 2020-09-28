import {MaterialIcons} from '../../../../theme/icon';
import React from 'react';
import styled from 'styled-components/native';
import {
  StyledMinusTouchableOpacity,
  StyledPlusTouchableOpacity,
  StyledSpeedText,
  StyledSpeedTextContainer,
} from './ControllerRow';
import {StyledTitleTextContainer} from './SpeedContainer';

const StyledSizeContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const StyledPlayerTitleText = styled.Text`
  text-align: center;
`;

interface Props {
  fontSize: number;
  handleFontSizeChange: (fontChange: 'bigger' | 'smaller') => () => void;
}

const SizeContainer = (props: Props) => {
  const {handleFontSizeChange, fontSize} = props;
  return (
    <StyledSizeContainer>
      <StyledMinusTouchableOpacity
        onPress={handleFontSizeChange('smaller')}
        disabled={fontSize === 40}>
        <MaterialIcons
          color="#243F68"
          style={{marginRight: 20, opacity: fontSize === 40 ? 0.2 : 1}}
          name="remove"
          size={15}
        />
      </StyledMinusTouchableOpacity>
      <StyledPlusTouchableOpacity
        onPress={handleFontSizeChange('bigger')}
        disabled={fontSize === 60}>
        <MaterialIcons
          color="#243F68"
          style={{marginLeft: 20, opacity: fontSize === 60 ? 0.2 : 1}}
          name="add"
          size={15}
        />
      </StyledPlusTouchableOpacity>
      <StyledTitleTextContainer pointerEvents="none">
        <StyledPlayerTitleText>Font</StyledPlayerTitleText>
      </StyledTitleTextContainer>
      <StyledSpeedTextContainer pointerEvents="none">
        <StyledSpeedText>
          {fontSize === 50 ? 'x 2' : fontSize === 40 ? 'x 1' : 'x 3'}
        </StyledSpeedText>
      </StyledSpeedTextContainer>
    </StyledSizeContainer>
  );
};

export default SizeContainer;
