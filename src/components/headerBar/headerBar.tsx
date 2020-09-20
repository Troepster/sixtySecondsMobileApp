import {biggerShadowStyle, bottomShadowStyle} from '../../theme/shadowStyles';
import Logo from '../../../assets/svg/logo';
import {Text, View} from 'react-native';
import {fonts} from '../../theme/fonts';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';

const HeaderBar = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        ...bottomShadowStyle,
        paddingVertical: 10,
        flexDirection: 'row',
        backgroundColor: '#2F8DDE',
        marginHorizontal: -30,
        paddingHorizontal: 30,
      }}>
      {/*// @ts-ignore*/}
      <Button
        compact
        mode="text"
        icon={() => <Logo width={56} height={56} />}
        style={{
          ...biggerShadowStyle,
          alignItems: 'center',
          borderRadius: 56,
          width: 56,
        }}
        onPress={() => navigation.navigate('LoginStandard')}
      />
      <View style={{flexDirection: 'column'}}>
        <Text
          style={{
            fontFamily: fonts.Rokkitt,
            color: '#ffffff',
            fontSize: 26,
            paddingLeft: 10,
            fontWeight: '700',
          }}>
          60 Seconds
        </Text>
        <Text
          style={{
            fontFamily: fonts.Roboto,
            color: '#ffffff',
            fontSize: 12,
            paddingLeft: 10,
          }}>
          Clearer Communication
        </Text>
      </View>
    </View>
  );
};
export default HeaderBar;
