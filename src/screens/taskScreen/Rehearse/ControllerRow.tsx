import {Animated} from 'react-native';
import React, {useCallback} from 'react';
import styled from 'styled-components/native';
import {MaterialCommunityIcons, MaterialIcons} from '../../../theme/icon';

const StyledContainer = styled.View`
  position: absolute;
  width: 100%;
  z-index: 5;
  background-color: aquamarine;
  height: 80px;
  bottom: 0;
  flex-direction: row;
  justify-content: space-evenly;
`;

const StyledSpeedContainer = styled.View`
  background-color: bisque;
  flex: 1;
  flex-direction: row;
`;

const StyledSpeedTitleText = styled.Text`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 10px;
`;
const StyledSpeedTextContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;
const StyledSpeedText = styled.Text``;

const StyledMinusTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  background-color: azure;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;
const StyledPlusTouchableOpacity = StyledMinusTouchableOpacity;

const StyledPlayerContainer = styled(StyledSpeedContainer)`
  flex: 1.5;
`;

const StyledSizeContainer = StyledSpeedContainer;

type ScrollFunction = (speed: number, height: number) => void;

interface Props {
  speed: number;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
  play: boolean;
  direction: 'up' | 'down';
  setDirection: React.Dispatch<React.SetStateAction<'up' | 'down'>>;
  scrollDown: ScrollFunction;
  height: number;
  scrollUp: ScrollFunction;
  fontSize: number;
  setFontSize: React.Dispatch<React.SetStateAction<number>>;
  scrollTop: () => void;
  fadeAnim: Animated.Value;
}

const ControllerRow: React.FC<Props> = (props) => {
  const {
    speed,
    setSpeed,
    direction,
    setDirection,
    height,
    play,
    scrollDown,
    scrollUp,
    fontSize,
    setFontSize,
    scrollTop,
    fadeAnim,
  } = props;

  const handleSpeedChange = useCallback(
    (speedDirection: 'faster' | 'slower') => () => {
      const newSpeed =
        speedDirection === 'faster'
          ? speed === 10
            ? 10
            : speed + 1
          : speed === 1
          ? 1
          : speed - 1;
      play &&
        (direction === 'down'
          ? scrollDown(newSpeed, height)
          : scrollUp(newSpeed, height));
      setSpeed(newSpeed);
    },
    [speed, play, direction, scrollDown, height, scrollUp, setSpeed],
  );

  const handleFontSizeChange = useCallback(
    (fontChange: 'bigger' | 'smaller') => () => {
      const newFontSize =
        fontChange === 'bigger'
          ? fontSize === 60
            ? 60
            : fontSize + 10
          : fontSize === 40
          ? 40
          : fontSize - 10;
      setFontSize(newFontSize);
      scrollTop();
    },
    [fontSize, scrollTop, setFontSize],
  );

  const handlePlayChange = useCallback(
    (directionSub: 'down' | 'up') => () => {
      // @ts-ignore
      if (fadeAnim._value === 0 && directionSub === 'up') {
      } else {
        // @ts-ignore
        play
          ? Animated.timing(fadeAnim, {
              // @ts-ignore
              toValue: fadeAnim._value,
              useNativeDriver: false,
            }).start()
          : directionSub === 'up'
          ? scrollUp(speed, height)
          : scrollDown(speed, height);
        setDirection(directionSub);
      }
    },
    [fadeAnim, play, scrollUp, speed, height, scrollDown, setDirection],
  );

  return (
    <StyledContainer>
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
        <StyledSpeedTitleText>Speed</StyledSpeedTitleText>
        <StyledSpeedTextContainer pointerEvents="none">
          <StyledSpeedText>x {speed}</StyledSpeedText>
        </StyledSpeedTextContainer>
      </StyledSpeedContainer>
      <StyledPlayerContainer>
        <StyledMinusTouchableOpacity
          onPress={handlePlayChange('up')}
          disabled={fontSize === 40}>
          <MaterialCommunityIcons
            color="#243F68"
            style={{marginRight: 20, opacity: fontSize === 40 ? 0.2 : 1}}
            name={play && direction === 'up' ? 'stop' : 'rewind'}
            size={15}
          />
        </StyledMinusTouchableOpacity>
        <StyledPlusTouchableOpacity
          onPress={handlePlayChange('down')}
          disabled={fontSize === 60}>
          <MaterialIcons
            color="#243F68"
            style={{marginLeft: 20, opacity: fontSize === 60 ? 0.2 : 1}}
            name={play ? 'stop' : 'play-arrow'}
            size={20}
          />
        </StyledPlusTouchableOpacity>
        <StyledSpeedTitleText>Player</StyledSpeedTitleText>
        <StyledSpeedTextContainer pointerEvents="none">
          <StyledSpeedText>Stopped</StyledSpeedText>
        </StyledSpeedTextContainer>
      </StyledPlayerContainer>
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
        <StyledSpeedTitleText>Font</StyledSpeedTitleText>
        <StyledSpeedTextContainer pointerEvents="none">
          <StyledSpeedText>
            {fontSize === 50 ? 'Medium' : fontSize === 40 ? 'Small' : 'Large'}
          </StyledSpeedText>
        </StyledSpeedTextContainer>
      </StyledSizeContainer>
    </StyledContainer>
  );
};

export default ControllerRow;
