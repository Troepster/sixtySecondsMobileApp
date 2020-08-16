import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MaterialIcons} from '../../theme/icon';
import {fonts} from '../../theme/fonts';
import {defaultShadowStyle} from '../../theme/shadowStyles';
import {RootStackParamList} from '../../navigation';
import {RouteProp} from '@react-navigation/native';
import {routes} from '../../enums/routes';
import {Colors, Modal, Portal, TextInput, List, Button} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import {TaskStateProps} from './taskScreen';
import {topTabs, TopTabsParamList} from './prepare';
import salesBehaviour from '../../constants/salesBehaviour';
import {SalesSteps} from '../../enums/app';

interface Props extends TaskStateProps {
  navigation: StackNavigationProp<RootStackParamList, routes.TaskScreen>;
  route: RouteProp<TopTabsParamList, topTabs.TALKING_POINTS>;
}

const TalkingPoints = (props: Props) => {
  const {allowSalesSteps, salesSteps, situation, script, setScript} = props;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalText, setShowModalText] = useState<string>('General');
  const [accordion, setAccordion] = useState<number>(0);

  const showUsTheModal = (step: string) => {
    setShowModalText(salesBehaviour[step as SalesSteps].behaviour);
    setShowModal(true);
  }
  console.log(props);


  return (
    <View style={{flex: 1, backgroundColor: '#E1EEFE'}}>
      <ScrollView style={{overflow: 'visible'}}>
        <KeyboardAwareScrollView enableAutomaticScroll={true} keyboardOpeningTime={Number.MAX_SAFE_INTEGER} style={{marginBottom: -200}}>
          <View style={{paddingHorizontal: 30, paddingTop: 50, paddingBottom: 300}}>
            <List.Accordion
              style={{padding: 0, marginHorizontal: -10, paddingBottom: 10}}
              title="Scripts"
              // left={props => <List.Icon {...props} icon="folder" />}
              expanded={accordion === 0}
              onPress={() => setAccordion(accordion === 0?-1:0)}
            >
              {allowSalesSteps ? Object.keys(salesSteps).filter(step => salesSteps[step as SalesSteps]).map((salesStep) => {
                return <React.Fragment key={salesStep}>
                  <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 2}} onPress={() => showUsTheModal(salesStep)}>
                    <Text style={{fontFamily: fonts.PoppinsRegular, color: '#536278', fontSize: 16, lineHeight: 25}}>{salesBehaviour[salesStep as SalesSteps].longTitle}</Text>
                    <MaterialIcons color="#243F68" name="info-outline" size={17} style={{paddingLeft: 5}} />
                  </TouchableOpacity>
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
                    placeholder="Start writing your script..."
                    placeholderTextColor="#eeeeee"
                    mode="flat"
                    style={{...defaultShadowStyle, paddingBottom: 0, marginBottom: 20, borderRadius: 5, minHeight: 200}}
                    multiline
                    enablesReturnKeyAutomatically
                    numberOfLines={5}
                    value={script[salesStep as SalesSteps]}
                    onChangeText={text => setScript({...script, [salesStep]: text})}
                  />
                </React.Fragment>
              }) : <React.Fragment>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 2}} onPress={() => showUsTheModal(SalesSteps.GENERAL)}>
                  <Text style={{fontFamily: fonts.PoppinsRegular, color: '#536278', fontSize: 16, lineHeight: 25}}>{salesBehaviour[SalesSteps.GENERAL].longTitle}</Text>
                  <MaterialIcons color="#243F68" name="info-outline" size={17} style={{paddingLeft: 5}} />
                </TouchableOpacity>
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
                  placeholder="Start writing your script..."
                  placeholderTextColor="#eeeeee"
                  mode="flat"
                  style={{...defaultShadowStyle, paddingBottom: 0, marginBottom: 20, borderRadius: 5, minHeight: 200}}
                  multiline
                  enablesReturnKeyAutomatically
                  numberOfLines={5}
                  value={script[SalesSteps.GENERAL]}
                  onChangeText={text => setScript({...script, [SalesSteps.GENERAL]: text})}
                />
              </React.Fragment>}
            </List.Accordion>
            <List.Accordion
              style={{padding: 0, marginHorizontal: -10,paddingBottom: 10}}
              title="Actions"
              // left={props => <List.Icon {...props} icon="folder" />}
              expanded={accordion === 1}
              onPress={() => setAccordion(accordion === 1?-1:1)}
            >
              {/*// @ts-ignore*/}
              <Button mode="contained" contentStyle={{height: 50}}
                      labelStyle={{fontFamily: fonts.PoppinsSemiBold, fontSize: 16, fontWeight: '600', lineHeight: 25, color: '#ffffff'}}
              >
                Submit Script
              </Button>
            </List.Accordion>

          </View>
          <View style={{margin: 50}} />
        </KeyboardAwareScrollView>
      </ScrollView>
      <LinearGradient colors={['#E1EEFE', 'rgba(255,255,255,0)']} style={{position: 'absolute', flex: 1, width: '100%', height: 50, zIndex: 10}} />
      <Portal>
        <Modal visible={showModal} onDismiss={() => setShowModal(false)}>
          <View style={{backgroundColor: '#ffffff', padding: 30, margin: 20}}>
            <Text style={{fontFamily: fonts.PoppinsMedium, fontSize: 16}}>Behaviour</Text>
            <Text style={{paddingTop: 10}}>{showModalText}</Text>
            <Text style={{fontFamily: fonts.PoppinsMedium, paddingTop: 20, fontSize: 16}}>Situation</Text>
            <Text style={{paddingTop: 10}}>{situation}</Text>
            <TouchableOpacity style={{position: 'absolute', right: 0, top: 0, padding: 10}} onPress={() => setShowModal(false)}>
              <MaterialIcons color="#243F68" name="highlight-off" size={20} />
            </TouchableOpacity>
          </View>
        </Modal>
      </Portal>
    </View>
  )
}

export default TalkingPoints;
