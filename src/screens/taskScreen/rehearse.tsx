import React, {useCallback, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Animated, LayoutChangeEvent, Easing} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MaterialCommunityIcons, MaterialIcons} from '../../theme/icon';
import {biggerShadowStyle, defaultShadowStyle} from '../../theme/shadowStyles';
import {RootStackParamList} from '../../navigation';
import {RouteProp, useIsFocused} from '@react-navigation/native';
import {routes} from '../../enums/routes';
import {Button, Colors, Modal, Portal} from 'react-native-paper';
import {TaskStateProps} from './taskScreen';
import {topTabs, TopTabsParamList} from './prepare';
import LinearGradient from 'react-native-linear-gradient';
import {TaskScript} from '../../types';

interface Props extends TaskStateProps {
  navigation: StackNavigationProp<RootStackParamList, routes.TaskScreen>;
  route: RouteProp<TopTabsParamList, topTabs.REHEARSE>;
}

const speedValues = [
  60,
  50,
  40,
  30,
  20,
  12,
  8,
  6,
  4,
  2,
]

const Rehearse = (props: Props) => {
  const {navigation, script} = props;
  const [play, setPlay] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(5);
  const [fontSize, setFontSize] = useState<number>(50);
  const [direction, setDirection] = useState<'up' | 'down'>('down');
  const isFocused = useIsFocused();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const scrollUp = (speed: number, height: number) => {
    // @ts-ignore
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      // @ts-ignore
      duration: (height - (height + fadeAnim._value)) * speedValues[speed-1],
      useNativeDriver: false,
      easing: Easing.linear
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
      toValue: (-1 * height) + 500,
      // @ts-ignore
      duration: (height + fadeAnim._value) * speedValues[speed-1],
      useNativeDriver: false,
      easing: Easing.linear
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

  const handleSpeedChange = useCallback((speedDirection: 'faster' | 'slower') => () => {
    const newSpeed = speedDirection === 'faster' ? (speed === 10 ? 10 : speed + 1) : (speed === 1 ? 1 : speed -1);
    play && (direction === 'down' ? scrollDown(newSpeed, height) : scrollUp(newSpeed, height));
    setSpeed(newSpeed);
  }, [speed, toggle, height, play, direction,fontSize]);

  const handlePlayChange = useCallback((direction: 'down' | 'up') => () => {
    // @ts-ignore
    if (fadeAnim._value === 0 && direction === 'up') {
    } else {
      // @ts-ignore
      play ? Animated.timing(fadeAnim, {
        // @ts-ignore
        toValue: fadeAnim._value,
        useNativeDriver: false
      }).start() : direction === 'up' ? scrollUp(speed, height) : scrollDown(speed, height);
      setDirection(direction);
    }
  }, [speed, toggle, height, play, direction,fontSize]);

  const handleFontSizeChange = useCallback((fontChange:'bigger'| 'smaller')=> ()=> {
    const newFontSize = (fontChange === 'bigger'?fontSize === 60?60:fontSize+10:fontSize === 40?40:fontSize-10);
    setFontSize(newFontSize);
    scrollTop()
  },[speed, toggle, height, play, direction,fontSize])

  const onViewLayout = ({nativeEvent: {layout}}: LayoutChangeEvent) => {
    setHeight(layout.height);
  }
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#E1EEFE'}}>
        <Portal>
          <Modal visible={isFocused} onDismiss={() => navigation.goBack()}>
            <TouchableOpacity activeOpacity={1} style={{backgroundColor: '#ffffff', height: '100%', paddingVertical: 30, overflow: 'hidden'}}>
              <View style={{overflow: 'visible', flex: 1, backgroundColor: '#fff'}}>
                <Animated.View onLayout={onViewLayout} style={{padding: 30, top: fadeAnim, position: 'absolute'}}>
                  <View style={{height: 250}} />
                  <View style={{height: 200}} />
                  <View>{Object.keys(script).filter((v:any)=>(script as any)[v as any] as TaskScript).map((v,i)=><Text key={i} style={{fontSize: fontSize, paddingBottom: 100}}>{(script as any)[v]}</Text>)}</View>
                </Animated.View>
              </View>
              <View style={{backgroundColor: '#fff', height: 30, top: 0, position: 'absolute', width: '100%'}} />
              <LinearGradient pointerEvents="none" colors={['#FFFFFF', 'rgba(255,255,255,0)']} style={{position: 'absolute', top: 30, flex: 1, width: '100%', height: 30, zIndex: 1}} />
              <View style={{backgroundColor: '#fff', height: 40, bottom: 0, position: 'absolute', width: '100%'}} />
              <LinearGradient pointerEvents="none" colors={['rgba(255,255,255,0)', '#FFFFFF']} style={{position: 'absolute', bottom: 40, flex: 1, width: '100%', height: 30, zIndex: 1}} />
              <View style={{flexDirection: 'row', justifyContent: 'space-evenly', zIndex: 5, alignItems: 'center', position: 'absolute', bottom: 10, width: '100%'}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  {/*// @ts-ignore*/}
                  <Button
                    compact
                    mode="contained"
                    contentStyle={{backgroundColor: Colors.white}}
                    style={{...defaultShadowStyle, opacity: speed === 40?0:1,left: 10, backgroundColor: Colors.white, width: 35, height: 35, borderRadius: 100, justifyContent: 'center', alignItems: 'center', marginTop: 5, zIndex: 6}}
                    onPress={handleSpeedChange('slower')}
                  >
                    <MaterialIcons color="#243F68" name="remove" size={15} />
                  </Button>
                  {/*// @ts-ignore*/}
                  <View
                    style={{...biggerShadowStyle, backgroundColor: Colors.white, width: 56, height: 56, borderRadius: 100, justifyContent: 'center', alignItems: 'center', marginTop: 5, zIndex: 5, flexDirection: 'row'}}
                  >
                    <Text>x {speed}</Text>
                  </View>
                  {/*// @ts-ignore*/}
                  <Button
                    compact
                    mode="contained"
                    contentStyle={{backgroundColor: Colors.white}}
                    style={{...defaultShadowStyle, opacity: speed === 1.25?0:1,left: -10, backgroundColor: Colors.white, width: 35, height: 35, borderRadius: 100, justifyContent: 'center', alignItems: 'center', marginTop: 5, zIndex: 5}}
                    onPress={handleSpeedChange('faster')}
                  >
                    <MaterialIcons color="#243F68" name="add" size={15} />
                  </Button>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  {/*// @ts-ignore*/}
                  <Button
                    compact
                    mode="contained"
                    contentStyle={{backgroundColor: Colors.white}}
                    style={{...defaultShadowStyle, opacity: direction === 'down' && play ? 0 : 1, left: 10, backgroundColor: Colors.white, width: 35, height: 35, borderRadius: 100, justifyContent: 'center', alignItems: 'center', marginTop: 5, zIndex: 6}}
                    onPress={handlePlayChange('up')}
                  >
                    <MaterialCommunityIcons color="#243F68" name={play && direction === 'up' ? 'stop' : 'rewind'} size={15} />
                  </Button>
                  <View
                    style={{...biggerShadowStyle, backgroundColor: Colors.white, width: 56, height: 56, borderRadius: 100, justifyContent: 'center', alignItems: 'center', marginTop: 5, zIndex: 5}}
                  >
                    <MaterialCommunityIcons color="#243F68" name={play ? direction === 'down' ? 'play' : 'rewind' : 'pause'} size={20} />
                  </View>
                  {/*// @ts-ignore*/}
                  <Button
                    compact
                    mode="contained"
                    contentStyle={{backgroundColor: Colors.white}}
                    style={{...defaultShadowStyle, opacity: direction === 'up' && play ? 0 : 1, left: -10, backgroundColor: Colors.white, width: 35, height: 35, borderRadius: 100, justifyContent: 'center', alignItems: 'center', marginTop: 5, zIndex: 5}}
                    onPress={handlePlayChange('down')}
                  >
                    <MaterialIcons color="#243F68" name={play ? 'stop' : 'play-arrow'} size={15} />
                  </Button>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  {/*// @ts-ignore*/}
                  <Button
                    compact
                    mode="contained"
                    contentStyle={{backgroundColor: Colors.white}}
                    style={{...defaultShadowStyle, opacity: play || fontSize === 40 ? 0 : 1, left: 10, backgroundColor: Colors.white, width: 35, height: 35, borderRadius: 100, justifyContent: 'center', alignItems: 'center', marginTop: 5, zIndex: 6}}
                    onPress={handleFontSizeChange('smaller')}
                  >
                    <MaterialCommunityIcons color="#243F68" name="format-font-size-decrease" size={15} />
                  </Button>
                  <View
                    style={{...biggerShadowStyle, backgroundColor: Colors.white, width: 56, height: 56, borderRadius: 100, justifyContent: 'center', alignItems: 'center', marginTop: 5, zIndex: 5}}
                  >
                    <MaterialCommunityIcons color="#243F68" name={fontSize === 50?'alpha-m':fontSize === 40?'alpha-s':'alpha-l'} size={30} />
                  </View>
                  {/*// @ts-ignore*/}
                  <Button
                    compact
                    mode="contained"
                    contentStyle={{backgroundColor: Colors.white}}
                    style={{...defaultShadowStyle, opacity: play || fontSize === 60 ? 0 : 1, left: -10, backgroundColor: Colors.white, width: 35, height: 35, borderRadius: 100, justifyContent: 'center', alignItems: 'center', marginTop: 5, zIndex: 5}}
                    onPress={handleFontSizeChange('bigger')}
                  >
                    <MaterialCommunityIcons color="#243F68" name="format-font-size-increase" size={15} />
                  </Button>
                </View>
              </View>
              <TouchableOpacity style={{padding: 10,position: 'absolute', right: 10, top: 0, alignItems: 'center', justifyContent: 'center',zIndex: 1}} onPress={() => navigation.goBack()}>
                <MaterialIcons color="#243F68" name="highlight-off" size={20} />
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </Portal>
      </View>
    </>
  )
}

export default Rehearse;
