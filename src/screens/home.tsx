import React, {useCallback, useState} from 'react';
import {Button, Colors} from 'react-native-paper';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useFocusEffect} from '@react-navigation/native';
import {MaterialIcons} from '../theme/icon';
import {fonts} from '../theme/fonts';
import LinearGradient from 'react-native-linear-gradient';
import {TaskCard} from '../components/taskCard';
import {useSelector} from 'react-redux';
import {IAppState} from '../types';
import HeaderBar from '../components/headerBar/headerBar';
import {hasNotch} from 'react-native-device-info';
import DevTools from '../components/devTools/devTools';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation';
import {routes} from '../enums/routes';

interface Props {
  navigation: StackNavigationProp<any>;
  route: RouteProp<RootStackParamList, routes.Home>;
}

const Home = (props: Props) => {
  const {navigation} = props;
  const [focus, setFocus] = useState(false);
  const {tasks} = useSelector<IAppState, IAppState>(state => state);
  useFocusEffect(
    useCallback(() => {
      setFocus(true);

      return () => {
        setFocus(false);
      };
    }, [])
  );
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#E1EEFE'}}>
        <View style={{backgroundColor: '#2F8DDE', height: hasNotch() ? 44 : 20}} />
        <SafeAreaView style={{marginHorizontal: 30}}>
          <HeaderBar />
          <View style={{paddingTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{fontFamily: fonts.AvenirHeavy, fontSize: 22, lineHeight: 30, color: '#536278'}}>Task List ({tasks.length})</Text>
            {/*// @ts-ignore*/}
            <Button
              compact
              mode="contained"
              contentStyle={{backgroundColor: Colors.white}}
              style={{top: -37, backgroundColor: Colors.white, width: 56, height: 56, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}
              onPress={() => navigation.navigate(routes.TaskScreen)}>
              <MaterialIcons color="#243F68" name="add" size={30} />
            </Button>
          </View>
        </SafeAreaView>
        <View style={{flex: 1}}>
          <LinearGradient colors={['#E1EEFE', 'rgba(255,255,255,0)']} style={{height: 50, zIndex: 10, marginHorizontal: -30}} />
          <ScrollView style={{marginTop: -50, paddingTop: 25, paddingHorizontal: 30, flex: 1}}>
            {tasks.sort((a, b) => b.scenarioCreated?.localeCompare(a.scenarioCreated)).map(task => <TaskCard key={task.id} task={task} />)}
            <View style={{padding: 50}} />
          </ScrollView>
        </View>
        {focus && <DevTools />}
      </View>
    </>
  )
}

export default Home;
