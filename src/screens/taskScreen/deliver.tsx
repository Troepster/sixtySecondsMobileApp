import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {fonts} from '../../theme/fonts';
import {RootStackParamList} from '../../navigation';
import {RouteProp} from '@react-navigation/native';
import {routes} from '../../enums/routes';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, routes.TaskScreen>;
  route: RouteProp<RootStackParamList, routes.TaskScreen>;
}

const Deliver = (props: Props) => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#E1EEFE'}}>
        <ScrollView style={{marginHorizontal: 30, paddingTop: 50}}>
              <Text style={{fontFamily: fonts.PoppinsRegular, color: '#536278', fontSize: 16, lineHeight: 25}}>Deliver Placeholder</Text>
        </ScrollView>
      </View>
    </>
  )
}

export default Deliver;
