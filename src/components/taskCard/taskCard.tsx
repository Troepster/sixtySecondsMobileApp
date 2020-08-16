import React, {useRef, useState} from 'react';
import {Card} from 'react-native-paper';
import {Dimensions, Text, TouchableOpacity, View, ViewProps, ViewStyle} from 'react-native';
import {MaterialCommunityIcons} from '../../theme/icon';
import {fonts} from '../../theme/fonts';
import {Task} from '../../types';
import moment from 'moment';
import {colors} from '../../theme/colors';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import {routes} from '../../enums/routes';

interface Props {
  task: Task
}

const TaskCard = (
  {
    task
  }: Props) => {
  const [sliderExpanded, setSliderExpanded] = useState(false);
  const cardWidth = Dimensions.get('window').width - 60;
  const navigation = useNavigation();

  const Slider = useRef<React.ClassicComponent<Animatable.AnimatableProperties<ViewStyle> & ViewProps, any>>();

  const setRef = (ref: React.ClassicComponent<Animatable.AnimatableProperties<ViewStyle> & ViewProps, any>) => {
    Slider.current = ref;
  };
  const slideMe = () => {
    // @ts-ignore
    Slider.current.transitionTo({left: sliderExpanded ? cardWidth-50 : 0});
    setSliderExpanded(!sliderExpanded);
  }
  const onRehearsePress = ()=> {
    navigation.navigate(routes.TaskScreen,{id: task.id});
    slideMe();
  }
  return (
    <>
      {/*// @ts-ignore*/}
      <Card style={{marginBottom: 20}}>
        <View style={{flex: 1, overflow: 'hidden', borderRadius: 5}}>

      {/*// @ts-ignore*/}
          <Card.Title
            style={{height: 80}}
            titleStyle={{color: colors.text}}
            title={task.scenario.title}
            subtitleStyle={{color: colors.subTitleText}}
            subtitle={`Created Task, ${moment(task.scenarioCreated).fromNow(false)}`}
          />
          <Animatable.View ref={setRef} style={{height: 80, width: cardWidth, position: 'absolute', left: cardWidth - 50, flexDirection: 'row'}}>
            <TouchableOpacity activeOpacity={1} onPress={slideMe} style={{width: 50, height: 80, borderRadius: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff'}}>
              <MaterialCommunityIcons name="dots-vertical" size={25} />
            </TouchableOpacity>
            <View style={{flex: 1, height: 80, backgroundColor: 'white', flexDirection: 'row'}}>
              <TouchableOpacity onPress={onRehearsePress} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 80, flex: 1}}>
                <MaterialCommunityIcons name="pencil" size={16} color="#1469AF" />
                <Text style={{fontFamily: fonts.PoppinsMedium, color: colors.text, textTransform: 'uppercase', fontSize: 12, paddingLeft: 5}}>Prepare</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 80, flex: 1}}>
                <MaterialCommunityIcons name="video" size={16} color="#BDDDF7" />
                <Text style={{fontFamily: fonts.PoppinsMedium, color: colors.text, textTransform: 'uppercase', fontSize: 12, paddingLeft: 5, opacity: .3}}>Deliver</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>

          <View style={{backgroundColor: '#F1F7FF', borderBottomRightRadius: 5, borderBottomLeftRadius: 5, padding: 20, flexDirection: 'row'}}>
            <View style={{paddingTop: 1, paddingRight: 10}}>
              <MaterialCommunityIcons color="#89AECC" size={15} name="checkbox-marked-circle-outline" />
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontFamily: fonts.PoppinsMedium, fontSize: 12, lineHeight: 18, color: '#536278'}}>Task approval pending</Text>
              <Text style={{fontFamily: fonts.PoppinsMedium, fontSize: 12, lineHeight: 18, color: '#7EBD49'}}>2hrs ago</Text>
            </View>
            <View style={{alignSelf: 'center'}}>
              <MaterialCommunityIcons color="#89AECC" size={20} name="chevron-down" />
            </View>
          </View>
        </View>
      </Card>
    </>
  )
}

export default TaskCard;
