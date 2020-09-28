import {Animated} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import styled from 'styled-components/native';
import {MaterialCommunityIcons} from '../../../../theme/icon';
import {
  Directions,
  FlingGestureHandler,
  State,
} from 'react-native-gesture-handler';
import {
  StyledRecordButtonContainer,
  StyledRecordButtonInner,
  StyledRecordButtonOuter,
  StyledSkipBackwardsButtonOuter,
  StyledSkipBackwardsContainer,
} from '../RehearseStyledComponents';
import SpeedContainer from './SpeedContainer';
import PlayerContainer from './PlayerContainer';
import SizeContainer from './SizeContainer';

export const StyledContainer = styled(Animated.View)`
  position: absolute;
  width: 100%;
  z-index: 5;
  background-color: #ddd;
  height: 240px;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 10px 5px 5px black;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

const StyledRow = styled.View`
  height: 120px;
  flex-direction: row;
  flex: 1;
`;

const DragLineIndicatorContainer = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
  top: 5px;
`;

const DragLineIndicator = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  width: 25px;
  height: 4px;
  border-radius: 5px;
`;

export const StyledSpeedTextContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 120px;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const StyledSpeedText = styled.Text``;

export const StyledMinusTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;
export const StyledPlusTouchableOpacity = styled(StyledMinusTouchableOpacity)``;

type ScrollFunction = (speed: number, height: number) => void;

interface Props {
  speed: number;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
  currentPosition: number;
  setCurrentPosition: React.Dispatch<React.SetStateAction<number>>;
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
    currentPosition,
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

  const topAnim = useRef(new Animated.Value(-120)).current;
  const recordAnim = useRef(new Animated.Value(100)).current;

  const [isRecording, setIsRecording] = useState(false);
  const [containerHeight, setContainerHeight] = useState(-120);
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

  const handleIsRecordingToggle = useCallback(() => {
    console.log('HERE');
    handlePlayChange('down')();
    Animated.timing(recordAnim, {
      toValue: isRecording ? 100 : 5,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setIsRecording(!isRecording);
  }, [handlePlayChange, isRecording, recordAnim]);

  return (
    <FlingGestureHandler
      direction={containerHeight === -120 ? Directions.UP : Directions.DOWN}
      onHandlerStateChange={({nativeEvent}) => {
        if (nativeEvent.state === State.ACTIVE) {
          Animated.timing(topAnim, {
            toValue: containerHeight === -120 ? 0 : -120,
            duration: 200,
            useNativeDriver: false,
          }).start();
          setContainerHeight(containerHeight === -120 ? 0 : -120);
        }
      }}>
      <StyledContainer style={{bottom: topAnim}}>
        <StyledRow>
          <StyledSkipBackwardsContainer>
            <StyledSkipBackwardsButtonOuter
              style={{opacity: currentPosition === 0 ? 0.2 : 1}}
              disabled={currentPosition === 0}
              onPress={() => scrollTop()}>
              <MaterialCommunityIcons
                color="#243F68"
                name="skip-backward"
                size={40}
              />
            </StyledSkipBackwardsButtonOuter>
          </StyledSkipBackwardsContainer>
          <StyledRecordButtonContainer>
            <StyledRecordButtonOuter
              activeOpacity={0.9}
              onPress={handleIsRecordingToggle}>
              <StyledRecordButtonInner style={{borderRadius: recordAnim}} />
            </StyledRecordButtonOuter>
          </StyledRecordButtonContainer>
          <StyledSkipBackwardsContainer />
        </StyledRow>
        <StyledRow>
          <SpeedContainer handleSpeedChange={handleSpeedChange} speed={speed} />
          <PlayerContainer
            handlePlayChange={handlePlayChange}
            direction={direction}
            currentPosition={currentPosition}
            play={play}
          />
          <SizeContainer
            handleFontSizeChange={handleFontSizeChange}
            fontSize={fontSize}
          />
        </StyledRow>
        <DragLineIndicatorContainer>
          <DragLineIndicator />
        </DragLineIndicatorContainer>
      </StyledContainer>
    </FlingGestureHandler>
  );
};

export default ControllerRow;
