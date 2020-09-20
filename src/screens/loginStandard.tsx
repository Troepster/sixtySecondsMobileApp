import React from 'react';
import {Button} from 'react-native-paper';
import {View, Text, StatusBar, SafeAreaView, Image} from 'react-native';
import LinkedInImage from '../../assets/linkedin.png';
import MicrosoftImage from '../../assets/microsoft.png';
import GoogleImage from '../../assets/google.png';
import {defaultShadowStyle} from '../theme/shadowStyles';
import {fonts} from '../theme/fonts';
import {StackNavigationProp} from '@react-navigation/stack';
import {hasNotch} from 'react-native-device-info';
import HeaderBar from '../components/headerBar/headerBar';
import {routes} from '../enums/routes';
import {noNotchHeight, notchHeightIos} from '../constants/constants';

interface Props {
  navigation: StackNavigationProp<any>;
}

const LoginStandard = (props: Props) => {
  const {navigation} = props;
  return (
    <>
      <StatusBar translucent barStyle="dark-content" />
      <View style={{flex: 1, backgroundColor: '#e1eefe'}}>
        <View
          style={{
            backgroundColor: '#2F8DDE',
            height: hasNotch() ? notchHeightIos : noNotchHeight,
          }}
        />
        <SafeAreaView style={{flex: 1}}>
          <View
            style={{marginHorizontal: 30, backgroundColor: '#e1eefe', flex: 1}}>
            <HeaderBar />
            {/*<View style={{paddingTop: 15, paddingHorizontal: 30}}>*/}
            {/*  <View style={{backgroundColor: '#ffffff', height: 50, borderRadius: 50, alignItems: 'center', flexDirection: 'row'}}>*/}
            {/*    <View style={{...defaultShadowStyle, flex: 2, alignItems: 'center', backgroundColor: '#ffffff', height: 50, justifyContent: 'center', borderRadius: 50}}>*/}
            {/*      <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, color: '#1B3964', textTransform: 'uppercase'}}>Login</Text>*/}
            {/*      <View style={{height: 6, position: 'absolute', bottom: 0, backgroundColor: '#FFB26E', width: 66}} />*/}
            {/*    </View>*/}
            {/*    <View style={{flex: 2, alignItems: 'center'}}>*/}
            {/*      <Text style={{fontFamily: 'Poppins-Medium', fontSize: 16, color: '#89AECC', textTransform: 'uppercase'}}>SignUp</Text>*/}
            {/*    </View>*/}
            {/*  </View>*/}
            {/*</View>*/}
            <View style={{flex: 1, justifyContent: 'space-evenly'}}>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{height: 1, backgroundColor: '#CCD9F6', flex: 1}}
                  />
                  <View
                    style={{
                      height: 20,
                      paddingHorizontal: 5,
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{fontFamily: 'Roboto-Regular', color: '#3068B3'}}>
                      Sign in
                    </Text>
                  </View>
                  <View
                    style={{height: 1, backgroundColor: '#CCD9F6', flex: 1}}
                  />
                </View>
                <View style={{marginTop: 10, flexDirection: 'column'}}>
                  <View style={{flexDirection: 'column'}}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        color: '#536278',
                        fontSize: 16,
                        lineHeight: 25,
                      }}>
                      Email
                    </Text>
                    <View
                      style={{
                        ...defaultShadowStyle,
                        height: 49,
                        backgroundColor: '#ffffff',
                        borderRadius: 5,
                      }}
                    />
                  </View>
                  <View style={{paddingTop: 10}}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        color: '#536278',
                        fontSize: 16,
                        lineHeight: 25,
                      }}>
                      Password
                    </Text>
                    <View
                      style={{
                        ...defaultShadowStyle,
                        height: 49,
                        backgroundColor: '#ffffff',
                        borderRadius: 5,
                      }}
                    />
                  </View>
                </View>
                <View style={{marginTop: 25}}>
                  {/*// @ts-ignore*/}
                  <Button
                    mode="contained"
                    onPress={() => navigation.navigate(routes.Home)}
                    contentStyle={{height: 50}}
                    labelStyle={{
                      fontFamily: fonts.PoppinsSemiBold,
                      fontSize: 16,
                      fontWeight: '600',
                      lineHeight: 25,
                      color: '#ffffff',
                    }}>
                    Sign In
                  </Button>
                  <View style={{height: 30}} />
                  {/*// @ts-ignore*/}
                  <Button
                    mode="contained"
                    onPress={() => navigation.navigate(routes.AudioPlayer)}
                    contentStyle={{height: 50}}
                    labelStyle={{
                      fontFamily: fonts.PoppinsSemiBold,
                      fontSize: 16,
                      fontWeight: '600',
                      lineHeight: 25,
                      color: '#ffffff',
                    }}>
                    Audio Player/Tester
                  </Button>
                </View>
              </View>
              {/*<View style={{marginTop: 20, flexDirection: 'row'}}>*/}
              {/*  <View style={{height: 18, width: 36, backgroundColor: '#7EBD49', borderRadius: 8}}>*/}
              {/*    <View style={{...defaultShadowStyle, width: 18, height: 18, position: 'absolute', right: 0, backgroundColor: '#ffffff', borderRadius: 8}} />*/}
              {/*  </View>*/}
              {/*  <Text style={{paddingLeft: 10, fontFamily: 'Poppins-Regular', fontSize: 14, lineHeight: 21, color: '#1469AF'}}>Remember Me</Text>*/}
              {/*</View>*/}
              {/*<View style={{marginTop: 25}}>*/}
              {/*  <View style={{height: 50, borderRadius: 5, alignItems: 'center', justifyContent: 'center', borderColor: '#A7C3D9', borderWidth: 1}}>*/}
              {/*    <Text style={{fontFamily: 'Roboto-Regular', color: '#515F73', fontSize: 13, textDecorationLine: 'underline', lineHeight: 15}}>Forgot your password?</Text>*/}
              {/*  </View>*/}
              {/*</View>*/}
              <View>
                <View
                  style={{
                    marginTop: 35,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{height: 1, backgroundColor: '#CCD9F6', flex: 1}}
                  />
                  <View
                    style={{
                      height: 20,
                      paddingHorizontal: 5,
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{fontFamily: 'Roboto-Regular', color: '#3068B3'}}>
                      or using
                    </Text>
                  </View>
                  <View
                    style={{height: 1, backgroundColor: '#CCD9F6', flex: 1}}
                  />
                </View>
                <View style={{flexDirection: 'row', height: 60, marginTop: 35}}>
                  <View
                    style={{
                      flex: 3,
                      backgroundColor: '#00ACED',
                      marginHorizontal: 10,
                      borderRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={MicrosoftImage}
                      resizeMode="contain"
                      style={{width: 18, height: 18}}
                    />
                  </View>
                  <View
                    style={{
                      flex: 3,
                      backgroundColor: '#FFFFFF',
                      marginHorizontal: 10,
                      borderRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={GoogleImage}
                      resizeMode="contain"
                      style={{width: 18, height: 18}}
                    />
                  </View>
                  <View
                    style={{
                      flex: 3,
                      backgroundColor: '#0872A8',
                      marginHorizontal: 10,
                      borderRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={LinkedInImage}
                      resizeMode="contain"
                      style={{width: 18, height: 17}}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
        <View
          style={{
            position: 'absolute',
            bottom: 20,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}>
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 13,
              lineHeight: 15,
              color: '#7F7F7F',
            }}>
            © 2020. 60seconds.
          </Text>
        </View>
      </View>
    </>
  );
};

export default LoginStandard;
