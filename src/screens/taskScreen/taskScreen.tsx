import React, {useCallback, useState} from 'react';
import {Button, Colors, Dialog, Paragraph, Portal} from 'react-native-paper';
import {Text, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MaterialCommunityIcons} from '../../theme/icon';
import {fonts} from '../../theme/fonts';
import {RootDispatcher} from '../../state/rootDispatcher';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {v4 as uuid} from 'uuid';
import {RootStackParamList} from '../../navigation';
import {RouteProp} from '@react-navigation/native';
import {hasNotch} from 'react-native-device-info';
import {colors} from '../../theme/colors';
import {IAppState, SalesStepsDetails, Task, TaskScript} from '../../types';
import {routes} from '../../enums/routes';
import Prepare from './prepare';
import Deliver from './deliver';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SalesSteps} from '../../enums/app';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, routes.TaskScreen>;
  route: RouteProp<RootStackParamList, routes.TaskScreen>;
}

export enum bottomTabs {
  PREPARE = 'Prepare',
  DELIVER = 'Deliver',
}

export type TaskRef = React.MutableRefObject<Task>;

export type BottomTabsParamList = {
  [bottomTabs.PREPARE]: { id: string, taskRef: TaskRef };
  [bottomTabs.DELIVER]: { id: string, taskRef: TaskRef };
}

const Tab = createBottomTabNavigator<BottomTabsParamList>();

export interface TaskStateProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  audience: string;
  setAudience: React.Dispatch<React.SetStateAction<string>>;
  situation: string;
  setSituation: React.Dispatch<React.SetStateAction<string>>;
  salesSteps: SalesStepsDetails;
  setSalesSteps: React.Dispatch<React.SetStateAction<SalesStepsDetails>>;
  script: TaskScript;
  setScript: React.Dispatch<React.SetStateAction<TaskScript>>;
  keywords: string;
  setKeywords: React.Dispatch<React.SetStateAction<string>>;
  allowSalesSteps: boolean;
  setAllowSalesSteps: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskScreen = (props: Props) => {
  const {navigation, route} = props;
  const dispatch = useDispatch();
  const task = useSelector<IAppState, Task | null | undefined>(state => {
    return route.params.id ? state.tasks.find(task => task.id === route.params.id) : null
  });
  const [initialValues, setInitialValues] = useState({
    title: task?.scenario.title || '',
    audience: task?.scenario.audience || '',
    situation: task?.scenario.situation || '',
    salesSteps: task?.scenario.salesSteps || {} as SalesStepsDetails,
    script: task?.script || {} as TaskScript,
    keywords: task?.scenario.keywords || '',
    allowSalesSteps: !!task?.scenario.allowSalesSteps,
  });
  const [title, setTitle] = useState<string>(initialValues.title);
  const [audience, setAudience] = useState<string>(initialValues.audience);
  const [situation, setSituation] = useState<string>(initialValues.situation);
  const [salesSteps, setSalesSteps] = useState<SalesStepsDetails>(initialValues.salesSteps);
  const [script, setScript] = useState<TaskScript>(initialValues.script);
  const [keywords, setKeywords] = useState<string>(initialValues.keywords);
  const [allowSalesSteps, setAllowSalesSteps] = useState<boolean>(initialValues.allowSalesSteps);
  const [showConfirmSave, setShowConfirmSave] = useState<boolean>(false);

  const taskStateProps: TaskStateProps = {
    title,
    setTitle,
    audience,
    setAudience,
    situation,
    setSituation,
    salesSteps,
    setSalesSteps,
    script,
    setScript,
    keywords,
    setKeywords,
    allowSalesSteps,
    setAllowSalesSteps
  }

  const saveTask = useCallback((goBack:boolean) => ()=> {
    const rootDispatcher = new RootDispatcher(dispatch);
    const createDate = moment().toISOString();
    const tmpTask = {
      id: route.params.id || uuid(),
      scenario: {
        audience,
        situation,
        title,
        keywords,
        salesSteps,
        allowSalesSteps
      },
      script: {...script},
      scenarioCreated: task?.scenarioCreated || createDate,
      scenarioUpdated: createDate
    }
    route.params.id ? rootDispatcher.updateTask(tmpTask) : rootDispatcher.addTask(tmpTask);
    setInitialValues({
      title: title,
      audience: audience,
      situation: situation,
      keywords: keywords,
      script: {...script},
      allowSalesSteps: allowSalesSteps,
      salesSteps: {...salesSteps}
    })
    goBack && navigation.goBack();
  }, [audience, keywords, situation, title, salesSteps, allowSalesSteps, script]);
  // @ts-ignore
  const isValid = Boolean(title && audience && situation && keywords && (!allowSalesSteps || (allowSalesSteps && Object.keys(salesSteps).filter(step => !!salesSteps[step]).length !== 0)));
  const isDirty = Boolean(
    title !== initialValues.title ||
    audience !== initialValues.audience ||
    situation !== initialValues.situation ||
    keywords !== initialValues.keywords ||
    allowSalesSteps !== initialValues.allowSalesSteps ||
    script[SalesSteps.CLOSE_AND_GAIN_COMMITMENT] !== initialValues.script[SalesSteps.CLOSE_AND_GAIN_COMMITMENT] ||
    script[SalesSteps.GENERAL] !== initialValues.script[SalesSteps.GENERAL] ||
    script[SalesSteps.DEAL_WITH_ISSUES] !== initialValues.script[SalesSteps.DEAL_WITH_ISSUES] ||
    script[SalesSteps.OPEN_CALL] !== initialValues.script[SalesSteps.OPEN_CALL] ||
    script[SalesSteps.PRESENT_SOLUTIONS] !== initialValues.script[SalesSteps.PRESENT_SOLUTIONS] ||
    script[SalesSteps.PROBE_WITH_QUESTIONS] !== initialValues.script[SalesSteps.PROBE_WITH_QUESTIONS] ||
    salesSteps[SalesSteps.CLOSE_AND_GAIN_COMMITMENT] !== initialValues.salesSteps[SalesSteps.CLOSE_AND_GAIN_COMMITMENT] ||
    salesSteps[SalesSteps.GENERAL] !== initialValues.salesSteps[SalesSteps.GENERAL] ||
    salesSteps[SalesSteps.DEAL_WITH_ISSUES] !== initialValues.salesSteps[SalesSteps.DEAL_WITH_ISSUES] ||
    salesSteps[SalesSteps.OPEN_CALL] !== initialValues.salesSteps[SalesSteps.OPEN_CALL] ||
    salesSteps[SalesSteps.PRESENT_SOLUTIONS] !== initialValues.salesSteps[SalesSteps.PRESENT_SOLUTIONS] ||
    salesSteps[SalesSteps.PROBE_WITH_QUESTIONS] !== initialValues.salesSteps[SalesSteps.PROBE_WITH_QUESTIONS]
  );
  const canRehearse = Object.keys(script).filter(step => !!script[step as SalesSteps]).length !== 0;
  const hideSalesSteps = () => {
    setShowConfirmSave(false);
  }
  const handleClose = () => {
    isDirty && isValid ? setShowConfirmSave(true) : navigation.goBack();
  }
  const handleCloseConfirmation = () => {
    setShowConfirmSave(false);
    navigation.goBack();
  }

  return (
    <>
      <View style={{backgroundColor: '#2F8DDE', height: hasNotch() ? 44 : 20}} />
      <View style={{backgroundColor: '#2F8DDE', height: 60, flexDirection: 'row', alignItems: 'center'}}>
        {/*// @ts-ignore*/}
        <Button onPress={handleClose} color={Colors.white}>Close</Button>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontFamily: fonts.PoppinsMedium, fontSize: 21, lineHeight: 31, color: Colors.white}}>{task?.scenario.title || 'New Task'}</Text>
        </View>
        {/*<Button disabled={!isValid} onPress={() => saveTask()} color={Colors.white}>{task ? 'Update' : 'Save'}</Button>*/}
        {/*// @ts-ignore*/}
        <Button disabled={!isValid || !isDirty} onPress={saveTask(false)} color={Colors.white}>Save</Button>
      </View>
      <Tab.Navigator
        initialRouteName={bottomTabs.PREPARE}
        tabBarOptions={{
          labelStyle: {
            top: 5,
            textTransform: 'uppercase',
            fontFamily: fonts.PoppinsRegular,
            fontSize: 13, lineHeight: 18,
          },
          iconStyle: {}
        }}
        screenOptions={({route}) => ({
          tabBarButton: (props) => {
            const {children, onPress, onLongPress, to} = props;
            return (
              <TouchableOpacity disabled={to?.includes('TaskScreen/Deliver')} onPress={onPress} onLongPress={onLongPress} style={{flex: 1, paddingTop: 10, opacity: to?.includes('TaskScreen/Deliver') ? .5 : 1}}>
                {children}
              </TouchableOpacity>
            )
          },
          tabBarIcon: ({focused}) => {
            return (
              <>
                <MaterialCommunityIcons style={{color: colors.activeIcon}} name={route.name === bottomTabs.PREPARE ? 'pencil' : 'video'} size={20} />
                {focused && <View style={{height: 2, position: 'absolute', top: -10, backgroundColor: colors.activeIcon, width: '100%'}} />}
              </>
            );
          },
        })}
      >
        <Tab.Screen name={bottomTabs.PREPARE} initialParams={{id: route.params.id}}>
          {(props) => <Prepare {...props} {...taskStateProps} isValid={isValid} canRehearse={canRehearse} />}
        </Tab.Screen>

        <Tab.Screen name={bottomTabs.DELIVER} component={Deliver} initialParams={{id: route.params.id}} />
      </Tab.Navigator>
      <Portal>
        <Dialog visible={showConfirmSave} onDismiss={hideSalesSteps}>
          {/*// @ts-ignore*/}
          <Dialog.Content>
            {/*// @ts-ignore*/}
            <Paragraph>You've got unsaved changes, would you like to save them or discard them?</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            {/*// @ts-ignore*/}
            <Button style={{paddingHorizontal: 10}} onPress={handleCloseConfirmation}>Discard</Button>
            {/*// @ts-ignore*/}
            <Button onPress={saveTask(true)}>Save</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  )
}

export default TaskScreen;
