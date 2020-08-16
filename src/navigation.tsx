import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/home';
import LoginStandard from './screens/loginStandard';
import {routes} from './enums/routes';
import {TaskScreen} from './screens/taskScreen';

export type RootStackParamList = {
  [routes.LoginStandard]: undefined;
  [routes.LoginSocial]: undefined;
  [routes.Home]: undefined;
  [routes.TaskScreen]: { id: string };
}

const RootStack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={routes.LoginStandard}>
        <RootStack.Screen
          name={routes.LoginStandard}
          component={LoginStandard}
          options={{
            headerShown: false
          }}
        />
        <RootStack.Screen
          name={routes.Home}
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <RootStack.Screen
          name={routes.TaskScreen}
          component={TaskScreen}
          options={{
            headerShown: false
          }}
          initialParams={{}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
