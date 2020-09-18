import React, {ComponentProps, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  LayoutChangeEvent,
  Easing,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MaterialIcons} from '../../../theme/icon';
import {RootStackParamList} from '../../../navigation';
import {RouteProp, useIsFocused} from '@react-navigation/native';
import {routes} from '../../../enums/routes';
import {Modal, Portal} from 'react-native-paper';
import {TaskStateProps} from '../taskScreen';
import {topTabs, TopTabsParamList} from '../prepare';
import LinearGradient from 'react-native-linear-gradient';
import {TaskScript} from '../../../types';
import {StyledTouchableOpacityMainArea} from './RehearseStyledComponents';
import ControllerRow from './ControllerRow';

interface Props extends TaskStateProps {
  navigation: StackNavigationProp<RootStackParamList, routes.TaskScreen>;
  route: RouteProp<TopTabsParamList, topTabs.REHEARSE>;
}

const speedValues = [60, 50, 40, 30, 20, 12, 8, 6, 4, 2];

const Rehearse = (props: Props) => {
  const {navigation, script} = props;
  const [play, setPlay] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(5);
  const [fontSize, setFontSize] = useState<number>(50);
  const [direction, setDirection] = useState<
    ComponentProps<typeof ControllerRow>['direction']
  >('down');
  const isFocused = useIsFocused();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const scrollUp = (speed: number, height: number) => {
    // @ts-ignore
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      // @ts-ignore
      duration: (height - (height + fadeAnim._value)) * speedValues[speed - 1],
      useNativeDriver: false,
      easing: Easing.linear,
    }).start(() => {
      setPlay(false);
    });
    // @ts-ignore
    fadeAnim._value !== 0 && setPlay(true);
  };

  const scrollDown = (speed: number, height: number) => {
    // @ts-ignore
    // Will change fadeAnim value to -500 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: -1 * height + 500,
      // @ts-ignore
      duration: (height + fadeAnim._value) * speedValues[speed - 1],
      useNativeDriver: false,
      easing: Easing.linear,
    }).start(() => {
      setPlay(false);
    });
    setPlay(true);
  };
  const scrollTop = () => {
    // @ts-ignore
    // Will change fadeAnim value to -500 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      // @ts-ignore
      // duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      setPlay(false);
    });
    setPlay(true);
  };

  const onViewLayout = ({nativeEvent: {layout}}: LayoutChangeEvent) => {
    setHeight(layout.height);
  };
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#E1EEFE'}}>
        <Portal>
          <Modal visible={isFocused} onDismiss={() => navigation.goBack()}>
            <StyledTouchableOpacityMainArea activeOpacity={1}>
              <View
                style={{overflow: 'visible', flex: 1, backgroundColor: '#fff'}}>
                <Animated.View
                  onLayout={onViewLayout}
                  style={{padding: 30, top: fadeAnim, position: 'absolute'}}>
                  <View style={{height: 250}} />
                  <View style={{height: 200}} />
                  <View>
                    {Object.keys(script)
                      .filter(
                        (v: any) => (script as any)[v as any] as TaskScript,
                      )
                      .map((v, i) => (
                        <Text
                          key={i}
                          style={{fontSize: fontSize, paddingBottom: 100}}>
                          {(script as any)[v]}
                        </Text>
                      ))}
                  </View>
                </Animated.View>
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  height: 30,
                  top: 0,
                  position: 'absolute',
                  width: '100%',
                }}
              />
              <LinearGradient
                pointerEvents="none"
                colors={['#FFFFFF', 'rgba(255,255,255,0)']}
                style={{
                  position: 'absolute',
                  top: 30,
                  flex: 1,
                  width: '100%',
                  height: 30,
                  zIndex: 1,
                }}
              />
              <View
                style={{
                  backgroundColor: '#fff',
                  height: 40,
                  bottom: 0,
                  position: 'absolute',
                  width: '100%',
                }}
              />
              <LinearGradient
                pointerEvents="none"
                colors={['rgba(255,255,255,0)', '#FFFFFF']}
                style={{
                  position: 'absolute',
                  bottom: 40,
                  flex: 1,
                  width: '100%',
                  height: 30,
                  zIndex: 1,
                }}
              />
              <ControllerRow
                speed={speed}
                setSpeed={setSpeed}
                play={play}
                direction={direction}
                setDirection={setDirection}
                scrollDown={scrollDown}
                height={height}
                scrollUp={scrollUp}
                fontSize={fontSize}
                setFontSize={setFontSize}
                scrollTop={scrollTop}
                fadeAnim={fadeAnim}
              />
              <TouchableOpacity
                style={{
                  padding: 10,
                  position: 'absolute',
                  right: 10,
                  top: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1,
                }}
                onPress={() => navigation.goBack()}>
                <MaterialIcons color="#243F68" name="highlight-off" size={20} />
              </TouchableOpacity>
            </StyledTouchableOpacityMainArea>
          </Modal>
        </Portal>
      </View>
    </>
  );
};

export default Rehearse;
