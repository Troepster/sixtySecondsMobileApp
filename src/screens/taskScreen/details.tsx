import React, {useState} from 'react';
import {Button, Colors, Dialog, Portal, TextInput, List, Switch} from 'react-native-paper';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MaterialIcons} from '../../theme/icon';
import {fonts} from '../../theme/fonts';
import {defaultShadowStyle} from '../../theme/shadowStyles';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RootStackParamList} from '../../navigation';
import {RouteProp} from '@react-navigation/native';
import {routes} from '../../enums/routes';
import {topTabs, TopTabsParamList} from './prepare';
import {TaskStateProps} from './taskScreen';
import salesBehaviour from '../../constants/salesBehaviour';
import {SalesSteps} from '../../enums/app';

interface Props extends TaskStateProps {
  navigation: StackNavigationProp<RootStackParamList, routes.TaskScreen>;
  route: RouteProp<TopTabsParamList, topTabs.DETAILS>;
}

const Details = (props: Props) => {
  const {
    title,
    setTitle,
    audience,
    setAudience,
    situation,
    setSituation,
    keywords,
    setKeywords,
    salesSteps,
    setSalesSteps,
    allowSalesSteps,
    setAllowSalesSteps
  } = props;
  const [showSalesSteps, setShowSalesSteps] = useState<boolean>(false);

  const hideSalesSteps = () => {
    setShowSalesSteps(false);
  }

  const addSalesStep = (step: string) => {
    setSalesSteps({...salesSteps,[step]:true});
    hideSalesSteps();
  }
  const removeSalesStep = (step: string) => {
    setSalesSteps({...salesSteps,[step]:false});
    hideSalesSteps();
  }
  // @ts-ignore
  return (
    <View style={{flex: 1, backgroundColor: '#E1EEFE'}}>
      <ScrollView style={{overflow: 'visible'}}>
        <KeyboardAwareScrollView enableAutomaticScroll={true} keyboardOpeningTime={Number.MAX_SAFE_INTEGER} style={{marginBottom: -200}}>
          <View style={{paddingHorizontal: 30, paddingTop: 50, paddingBottom: 200}}>

            <Text style={{fontFamily: fonts.PoppinsRegular, color: '#536278', fontSize: 16, lineHeight: 25}}>Title</Text>
            {/*// @ts-ignore*/}
            <TextInput
              scrollEnabled={false}
              underlineColor="transparent"
              theme={{
                roundness: 5,
                colors: {
                  background: Colors.white,
                  text: '#536278',
                }
              }}
              mode="flat"
              style={{...defaultShadowStyle, paddingBottom: 0, marginBottom: 20, borderRadius: 5}}
              value={title}
              onChangeText={text => setTitle(text)}
              enablesReturnKeyAutomatically
            />
            <Text style={{fontFamily: fonts.PoppinsRegular, color: '#536278', fontSize: 16, lineHeight: 25}}>Audience</Text>
            {/*// @ts-ignore*/}
            <TextInput
              scrollEnabled={false}
              underlineColor="transparent"
              theme={{
                roundness: 5,
                colors: {
                  background: Colors.white,
                  text: '#536278',
                }
              }}
              mode="flat"
              style={{...defaultShadowStyle, paddingBottom: 0, marginBottom: 20, borderRadius: 5}}
              value={audience}
              enablesReturnKeyAutomatically
              onChangeText={text => setAudience(text)}
            />
            <Text style={{fontFamily: fonts.PoppinsRegular, color: '#536278', fontSize: 16, lineHeight: 25}}>Situation</Text>
            {/*// @ts-ignore*/}
            <TextInput
              scrollEnabled={false}
              underlineColor="transparent"
              theme={{
                roundness: 5,
                colors: {
                  background: Colors.white,
                  text: '#536278',
                }
              }}
              mode="flat"
              style={{...defaultShadowStyle, paddingBottom: 0, marginBottom: 20, borderRadius: 5, minHeight: 100}}
              multiline
              enablesReturnKeyAutomatically
              numberOfLines={5}
              value={situation}
              onChangeText={text => setSituation(text)}
            />
            <Text style={{fontFamily: fonts.PoppinsRegular, color: '#536278', fontSize: 16, lineHeight: 25}}>Keywords</Text>
            {/*// @ts-ignore*/}
            <TextInput
              underlineColor="transparent"
              theme={{
                roundness: 5,
                colors: {
                  background: Colors.white,
                  text: '#536278',
                }
              }}
              mode="flat"
              style={{...defaultShadowStyle, paddingBottom: 0, marginBottom: 20, borderRadius: 5}}
              value={keywords}
              onChangeText={text => setKeywords(text)}
            />
          </View>
          <View style={{margin: -20}} />
        </KeyboardAwareScrollView>
        <View style={{paddingTop: 45, paddingHorizontal: 30}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex: 1, fontFamily: fonts.PoppinsRegular, color: '#536278', fontSize: 16, lineHeight: 25}}>Sales Steps</Text>
            {/*// @ts-ignore*/}
            <Switch value={allowSalesSteps} onValueChange={() => setAllowSalesSteps(!allowSalesSteps)} />
          </View>
            {/*// @ts-ignore*/}
          {allowSalesSteps && Object.keys(salesSteps).filter(step => !!salesSteps[step]).map(step => {
            return (
              <React.Fragment key={step}>
                {/*// @ts-ignore*/}
                <List.Item title={step} style={{borderBottomWidth: 1, borderBottomColor: '#D1E4F5'}} right={() => <TouchableOpacity onPress={() => removeSalesStep(step)}><MaterialIcons color="#243F68" name="remove" size={30} /></TouchableOpacity>} />
              </React.Fragment>
            );
          })}
          {/*// @ts-ignore*/}
          {allowSalesSteps && <Button
            compact
            mode="contained"
            contentStyle={{backgroundColor: Colors.white}}
            style={{backgroundColor: Colors.white, width: 56, height: 56, borderRadius: 100, justifyContent: 'center', alignItems: 'center', marginTop: 5}}
            onPress={() => setShowSalesSteps(true)}>
            <MaterialIcons color="#243F68" name="add" size={30} />
          </Button>}
          <View style={{padding: 100}} />
        </View>

        <Portal>
          <Dialog visible={showSalesSteps} onDismiss={hideSalesSteps}>
            <Dialog.Content>
              {/*// @ts-ignore*/}
              <List.Section>
                {/*// @ts-ignore*/}
                <List.Subheader>Select a sales Step</List.Subheader>
                {Object.keys(salesBehaviour).filter(step => !salesSteps[step as SalesSteps]).map(step => {
                  return (
                    <React.Fragment key={step}>
                      {/*// @ts-ignore*/}
                      <List.Item onPress={() => addSalesStep(step)} title={step} style={{borderBottomWidth: 1, borderBottomColor: '#D1E4F5'}} />
                    </React.Fragment>
                  );
                })}
              </List.Section>
            </Dialog.Content>
          </Dialog>
        </Portal>
      </ScrollView>
      <LinearGradient colors={['#E1EEFE', 'rgba(255,255,255,0)']} style={{position: 'absolute', flex: 1, width: '100%', height: 50, zIndex: 10}} />
    </View>
  )
}

export default Details;
