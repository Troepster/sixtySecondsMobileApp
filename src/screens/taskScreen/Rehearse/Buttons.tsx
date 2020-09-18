import {Text, View} from 'react-native';
import {Button, Colors} from 'react-native-paper';
import {
  biggerShadowStyle,
  defaultShadowStyle,
} from '../../../theme/shadowStyles';
import {MaterialCommunityIcons, MaterialIcons} from '../../../theme/icon';
import React from 'react';

const Buttons = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      zIndex: 5,
      alignItems: 'center',
      position: 'absolute',
      bottom: 10,
      width: '100%',
    }}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/*// @ts-ignore*/}
      <Button
        compact
        mode="contained"
        contentStyle={{backgroundColor: Colors.white}}
        style={{
          ...defaultShadowStyle,
          opacity: speed === 40 ? 0 : 1,
          left: 10,
          backgroundColor: Colors.white,
          width: 35,
          height: 35,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
          zIndex: 6,
        }}
        onPress={handleSpeedChange('slower')}>
        <MaterialIcons color="#243F68" name="remove" size={15} />
      </Button>
      {/*// @ts-ignore*/}
      <View
        style={{
          ...biggerShadowStyle,
          backgroundColor: Colors.white,
          width: 56,
          height: 56,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
          zIndex: 5,
          flexDirection: 'row',
        }}>
        <Text>x {speed}</Text>
      </View>
      {/*// @ts-ignore*/}
      <Button
        compact
        mode="contained"
        contentStyle={{backgroundColor: Colors.white}}
        style={{
          ...defaultShadowStyle,
          opacity: speed === 1.25 ? 0 : 1,
          left: -10,
          backgroundColor: Colors.white,
          width: 35,
          height: 35,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
          zIndex: 5,
        }}
        onPress={handleSpeedChange('faster')}>
        <MaterialIcons color="#243F68" name="add" size={15} />
      </Button>
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/*// @ts-ignore*/}
      <Button
        compact
        mode="contained"
        contentStyle={{backgroundColor: Colors.white}}
        style={{
          ...defaultShadowStyle,
          opacity: direction === 'down' && play ? 0 : 1,
          left: 10,
          backgroundColor: Colors.white,
          width: 35,
          height: 35,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
          zIndex: 6,
        }}
        onPress={handlePlayChange('up')}>
        <MaterialCommunityIcons
          color="#243F68"
          name={play && direction === 'up' ? 'stop' : 'rewind'}
          size={15}
        />
      </Button>
      <View
        style={{
          ...biggerShadowStyle,
          backgroundColor: Colors.white,
          width: 56,
          height: 56,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
          zIndex: 5,
        }}>
        <MaterialCommunityIcons
          color="#243F68"
          name={play ? (direction === 'down' ? 'play' : 'rewind') : 'pause'}
          size={20}
        />
      </View>
      {/*// @ts-ignore*/}
      <Button
        compact
        mode="contained"
        contentStyle={{backgroundColor: Colors.white}}
        style={{
          ...defaultShadowStyle,
          opacity: direction === 'up' && play ? 0 : 1,
          left: -10,
          backgroundColor: Colors.white,
          width: 35,
          height: 35,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
          zIndex: 5,
        }}
        onPress={handlePlayChange('down')}>
        <MaterialIcons
          color="#243F68"
          name={play ? 'stop' : 'play-arrow'}
          size={15}
        />
      </Button>
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/*// @ts-ignore*/}
      <Button
        compact
        mode="contained"
        contentStyle={{backgroundColor: Colors.white}}
        style={{
          ...defaultShadowStyle,
          opacity: play || fontSize === 40 ? 0 : 1,
          left: 10,
          backgroundColor: Colors.white,
          width: 35,
          height: 35,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
          zIndex: 6,
        }}
        onPress={handleFontSizeChange('smaller')}>
        <MaterialCommunityIcons
          color="#243F68"
          name="format-font-size-decrease"
          size={15}
        />
      </Button>
      <View
        style={{
          ...biggerShadowStyle,
          backgroundColor: Colors.white,
          width: 56,
          height: 56,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
          zIndex: 5,
        }}>
        <MaterialCommunityIcons
          color="#243F68"
          name={
            fontSize === 50
              ? 'alpha-m'
              : fontSize === 40
              ? 'alpha-s'
              : 'alpha-l'
          }
          size={30}
        />
      </View>
      {/*// @ts-ignore*/}
      <Button
        compact
        mode="contained"
        contentStyle={{backgroundColor: Colors.white}}
        style={{
          ...defaultShadowStyle,
          opacity: play || fontSize === 60 ? 0 : 1,
          left: -10,
          backgroundColor: Colors.white,
          width: 35,
          height: 35,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
          zIndex: 5,
        }}
        onPress={handleFontSizeChange('bigger')}>
        <MaterialCommunityIcons
          color="#243F68"
          name="format-font-size-increase"
          size={15}
        />
      </Button>
    </View>
  </View>
