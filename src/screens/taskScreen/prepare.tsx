import React from 'react';
import {View, Text, TouchableOpacity, Keyboard} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MaterialCommunityIcons, MaterialIcons} from '../../theme/icon';
import {fonts} from '../../theme/fonts';
import {biggerShadowStyle} from '../../theme/shadowStyles';
import {RootStackParamList} from '../../navigation';
import {RouteProp} from '@react-navigation/native';
import {colors} from '../../theme/colors';
import {routes} from '../../enums/routes';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Details from './details';
import TalkingPoints from './talkingPoints';
import Rehearse from './Rehearse/Rehearse';
import {bottomTabs, BottomTabsParamList, TaskStateProps} from './taskScreen';
import {ScreenListeners} from '@react-navigation/core/lib/typescript/src/types';

interface Props extends TaskStateProps {
  navigation: StackNavigationProp<RootStackParamList, routes.TaskScreen>;
  route: RouteProp<BottomTabsParamList, bottomTabs.PREPARE>;
  isValid: boolean;
  canRehearse: boolean;
}

export enum topTabs {
  DETAILS = 'Details',
  TALKING_POINTS = 'Talking Points',
  REHEARSE = 'Rehearse',
}

export type TopTabsParamList = {
  [topTabs.DETAILS]: {id: string};
  [topTabs.TALKING_POINTS]: {id: string};
  [topTabs.REHEARSE]: {id: string};
};

const listeners: ScreenListeners<any, any> = {
  blur: () => {
    Keyboard.dismiss();
  },
};

const Tab = createMaterialTopTabNavigator<TopTabsParamList>();

const Prepare = (props: Props) => {
  const {route, isValid, canRehearse, ...rest} = props;
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        tabBar={(props) => {
          const {descriptors, state, navigation} = props;
          return (
            <View
              style={{
                ...biggerShadowStyle,
                backgroundColor: '#ffffff',
                flexDirection: 'row',
                overflow: 'visible',
              }}>
              {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];
                const label =
                  options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;
                const isFocused = state.index === index;

                const onPress = () => {
                  const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                  });

                  if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                  }
                };

                const onLongPress = () => {
                  navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                  });
                };

                const Icon =
                  options &&
                  options.tabBarIcon &&
                  options.tabBarIcon({color: 'black', focused: true});
                const disabled =
                  (index === 1 && !isValid) || (index === 2 && !canRehearse);
                return (
                  <TouchableOpacity
                    key={index}
                    disabled={disabled}
                    accessibilityRole="button"
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style={{
                      opacity: disabled ? 0.25 : 1,
                      flex: 1,
                      paddingVertical: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {Icon}
                    <Text
                      style={{
                        top: 5,
                        textTransform: 'uppercase',
                        fontFamily: fonts.PoppinsRegular,
                        fontSize: 13,
                        lineHeight: 18,
                      }}>
                      {label}
                    </Text>
                    {isFocused && (
                      <View
                        style={{
                          height: 2,
                          position: 'absolute',
                          bottom: 0,
                          backgroundColor: colors.activeIcon,
                          width: '100%',
                        }}
                      />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        }}
        swipeEnabled={false}
        tabBarOptions={{
          showIcon: true,
        }}
        screenOptions={({route}) => ({
          tabBarIcon: () => {
            return route.name === topTabs.TALKING_POINTS ? (
              <MaterialIcons
                style={{color: colors.activeIcon}}
                name="record-voice-over"
                size={20}
              />
            ) : (
              <MaterialCommunityIcons
                style={{color: colors.activeIcon}}
                name={
                  route.name === topTabs.DETAILS
                    ? 'file-document-box-outline'
                    : 'microphone'
                }
                size={20}
              />
            );
          },
        })}>
        <Tab.Screen
          name={topTabs.DETAILS}
          initialParams={{id: route.params.id}}
          listeners={{...listeners}}>
          {(props) => <Details {...props} {...rest} />}
        </Tab.Screen>

        <Tab.Screen
          name={topTabs.TALKING_POINTS}
          initialParams={{id: route.params.id}}
          listeners={{...listeners}}>
          {(props) => <TalkingPoints {...props} {...rest} />}
        </Tab.Screen>
        <Tab.Screen
          name={topTabs.REHEARSE}
          initialParams={{id: route.params.id}}
          listeners={{...listeners}}>
          {(props) => <Rehearse {...props} {...rest} />}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

export default Prepare;
