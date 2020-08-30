import React, {useCallback, useState} from 'react';
import {Button, Colors} from 'react-native-paper';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {hasNotch} from 'react-native-device-info';
import HeaderBar from '../../components/headerBar/headerBar';

import AudioRecord from 'react-native-audio-record';
import Sound from 'react-native-sound';
import {MaterialIcons} from '../../theme/icon';

const options = {
  sampleRate: 16000,  // default 44100
  channels: 1,        // 1 or 2, default 1
  bitsPerSample: 16,  // 8 or 16, default 16
  audioSource: 6,     // android only (see below)
  wavFile: 'test.wav' // default 'audio.wav'
};

interface Props {
  navigation: StackNavigationProp<any>;
}

const Player = (props: Props) => {
  console.log(props);

  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [soundFile, setSoundFile] = useState<string>('');
  const [recordingTime, setRecordingTime] = useState<number>(0);
  AudioRecord.init(options);

  AudioRecord.on('data', data => {
    // console.log(Buffer.from(data, 'base64'));
    // base64-encoded audio data chunks
  });

  const handleRecord = useCallback(() => {
    if (!isRecording) {
      AudioRecord.start();

    } else {

    }
    isRecording && AudioRecord.stop().then(onfulfilled => {
      console.log(onfulfilled);
      setSoundFile(onfulfilled);
    });
    setIsRecording(!isRecording);
  }, [isRecording]);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
    Sound.setCategory('Playback');
    console.log(Sound.DOCUMENT);

    const recording = new Sound('test.wav', Sound.DOCUMENT, (error) => {
      if (error) {
        setIsPlaying(false);
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log('duration in seconds: ' + recording.getDuration() + 'number of channels: ' + recording.getNumberOfChannels());

      // Play the sound with an onEnd callback
      recording.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
        setIsPlaying(false);
      });
    });
  }, [soundFile, isPlaying]);

  const isPlayButtonDisabled = !soundFile || isRecording || isPlaying;
  return (
    <>
      <StatusBar translucent barStyle="dark-content" />
      <View style={{flex: 1, backgroundColor: '#e1eefe'}}>
        <View style={{backgroundColor: '#2F8DDE', height: hasNotch() ? 44 : 20}} />
        <SafeAreaView style={{flex: 1}}>
          <View style={{marginHorizontal: 30, backgroundColor: '#e1eefe', flex: 1}}>
            <HeaderBar />
            <View style={{flex: 1, justifyContent: 'space-evenly'}}>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{height: 1, backgroundColor: '#CCD9F6', flex: 1}} />
                  <View style={{height: 20, paddingHorizontal: 5, justifyContent: 'center'}}><Text style={{fontFamily: 'Roboto-Regular', color: '#3068B3'}}>Record Prototype</Text></View>
                  <View style={{height: 1, backgroundColor: '#CCD9F6', flex: 1}} />
                </View>
                <View style={{marginTop: 25, alignItems: 'center'}}>
                  {/*// @ts-ignore*/}
                  <Button
                    compact
                    mode="contained"
                    contentStyle={{backgroundColor: Colors.white}}
                    style={{backgroundColor: Colors.white, width: 56, height: 56, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}
                    onPress={handleRecord}>
                    <MaterialIcons color="#243F68" name={isRecording ? 'stop' : 'keyboard-voice'} size={30} />
                  </Button>
                  <View style={{height: 30}} />
                  {/*// @ts-ignore*/}
                  <Button
                    compact
                    mode="contained"
                    contentStyle={{backgroundColor: Colors.white}}
                    style={{backgroundColor: Colors.white, width: 56, height: 56, borderRadius: 100, justifyContent: 'center', alignItems: 'center',opacity: isPlayButtonDisabled?.5:1}}
                    onPress={handlePlay}
                    disabled={isPlayButtonDisabled}
                  >
                    <MaterialIcons color="#243F68" name={isPlaying ? 'stop' : 'play-arrow'} size={30} />
                  </Button>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
        <View style={{position: 'absolute', bottom: 20, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
          <Text style={{fontFamily: 'Roboto-Regular', fontSize: 13, lineHeight: 15, color: '#7F7F7F'}}>© 2020. 60seconds.</Text>
        </View>
      </View>

    </>
  )
}

export default Player;
