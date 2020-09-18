import React, {useCallback, useEffect, useState} from 'react';
import {Button, Colors} from 'react-native-paper';
import {View, Text, StatusBar, SafeAreaView, Platform} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {hasNotch} from 'react-native-device-info';
import HeaderBar from '../../components/headerBar/headerBar';

import {MaterialIcons, MaterialCommunityIcons} from '../../theme/icon';
import {
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
} from 'react-native-audio-recorder-player';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

interface Props {
  navigation: StackNavigationProp<any>;
}

const audioSet: AudioSet = {
  AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
  AudioSourceAndroid: AudioSourceAndroidType.MIC,
  AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
  AVNumberOfChannelsKeyIOS: 2,
  AVFormatIDKeyIOS: AVEncodingOption.aac,
};

const audioRecorderPlayer = new AudioRecorderPlayer();
audioRecorderPlayer.setSubscriptionDuration(0.09).then();

const path = Platform.select({
  ios: 'test.m4a',
  android: 'sdcard/test.mp4', // should give extra dir name in android. Won't grant permission to the first level of dir.
});

const PlayerOld = (props: Props) => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [soundFile, setSoundFile] = useState<string>('');
  const [recordingTime, setRecordingTime] = useState(0);
  const [durationTime, setDurationTime] = useState(0);
  const [playBackListener, setPlayBackListener] = useState({
    current_position: '0',
    duration: '',
  });
  const [playTime, setPlayTime] = useState(0);
  const {current_position, duration} = playBackListener;

  useEffect(() => {
    setPlayTime((prevState) =>
      isPlaying
        ? (prevState || 0) > Number(current_position)
          ? prevState
          : Number(current_position) > recordingTime
          ? recordingTime
          : Number(current_position)
        : Number(current_position),
    );
  }, [current_position, isPlaying, recordingTime]);

  const handleRecord = useCallback(() => {
    console.log(audioRecorderPlayer);
    if (!isRecording) {
      audioRecorderPlayer.removePlayBackListener();
      setIsPlaying(false);
      setIsPaused(false);
      setDurationTime(0);
      setPlayBackListener({current_position: '0', duration: '0'});
      audioRecorderPlayer.startRecorder(path, true, audioSet).then((e) => {
        console.log(e);
        audioRecorderPlayer.addRecordBackListener((e: any) => {
          setRecordingTime(Number(e.current_position));
          console.log(e);
          return;
        });
      });
    } else {
      audioRecorderPlayer.stopRecorder().then((e) => {
        setSoundFile(e);
        setDurationTime(recordingTime);
        audioRecorderPlayer.removeRecordBackListener();
      });
    }
    setIsRecording(!isRecording);
  }, [isRecording, recordingTime]);

  const handleSkipBackward = useCallback(() => {
    audioRecorderPlayer.stopPlayer().then(() => {
      audioRecorderPlayer.removePlayBackListener();
      setIsPlaying(false);
      setIsPaused(false);
      setPlayBackListener({
        current_position: '0',
        duration: duration,
      });
    });
  }, [duration]);
  const handleStop = useCallback(() => {
    console.log('finished', audioRecorderPlayer);
    audioRecorderPlayer
      .stopPlayer()
      .then(() => {
        audioRecorderPlayer.removePlayBackListener();
        setIsPlaying(false);
      })
      .catch(() => {
        audioRecorderPlayer.removePlayBackListener();
        setIsPlaying(false);
      });
  }, []);
  const handlePlay = useCallback(async () => {
    setPlayTime((prevState) => (!isPlaying && prevState !== 0 ? 0 : playTime));
    setIsPlaying(true);
    if (isPaused) {
      setIsPaused(false);
      await audioRecorderPlayer.resumePlayer();
    } else {
      await audioRecorderPlayer.startPlayer(path);
      audioRecorderPlayer.addPlayBackListener((e: any) => {
        console.log(e, playTime, isPlaying);
        setPlayBackListener(e);
        Number(e.current_position) >= Number(e.duration) &&
          console.log('Stopping...');
        Number(e.current_position) >= Number(e.duration) && handleStop();
      });
    }
  }, [handleStop, isPaused, isPlaying, playTime]);
  const handlePause = useCallback(async () => {
    setIsPaused(true);
    await audioRecorderPlayer.pausePlayer();
  }, []);

  const isBackButtonDisabled = playTime === 0;
  const isPlayButtonDisabled =
    !soundFile || isRecording || (isPlaying && !isPaused);
  const isPauseButtonDisabled =
    !soundFile || isRecording || isPaused || !isPlaying;
  const isRecordButtonDisabled = isPlaying && !isPaused;

  return (
    <>
      <StatusBar translucent barStyle="dark-content" />
      <View style={{flex: 1, backgroundColor: '#e1eefe'}}>
        <View
          style={{backgroundColor: '#2F8DDE', height: hasNotch() ? 44 : 20}}
        />
        <SafeAreaView style={{flex: 1}}>
          <View
            style={{marginHorizontal: 30, backgroundColor: '#e1eefe', flex: 1}}>
            <HeaderBar />
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
                      Record Prototype
                    </Text>
                  </View>
                  <View
                    style={{height: 1, backgroundColor: '#CCD9F6', flex: 1}}
                  />
                </View>
                <View style={{marginTop: 25, alignItems: 'center'}}>
                  <Text>
                    {audioRecorderPlayer.mmssss(Math.floor(recordingTime))}
                  </Text>
                  <View style={{height: 15}} />
                  {/*// @ts-ignore*/}
                  <Button
                    compact
                    mode="contained"
                    contentStyle={{backgroundColor: Colors.white}}
                    disabled={isRecordButtonDisabled}
                    style={{
                      backgroundColor: Colors.white,
                      width: 56,
                      height: 56,
                      borderRadius: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={handleRecord}>
                    <MaterialIcons
                      style={{opacity: isRecordButtonDisabled ? 0.5 : 1}}
                      color="#243F68"
                      name={isRecording ? 'stop' : 'keyboard-voice'}
                      size={30}
                    />
                  </Button>
                  <View style={{height: 30}} />
                </View>
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
                      Playback Prototype
                    </Text>
                  </View>
                  <View
                    style={{height: 1, backgroundColor: '#CCD9F6', flex: 1}}
                  />
                </View>
                <View style={{marginTop: 25, alignItems: 'center'}}>
                  <Text>{`${audioRecorderPlayer.mmssss(
                    Math.floor(playTime || 0),
                  )} / ${audioRecorderPlayer.mmssss(
                    Math.floor(durationTime),
                  )}`}</Text>
                  <View style={{height: 15}} />
                  <View style={{flexDirection: 'row'}}>
                    {/*// @ts-ignore*/}
                    <Button
                      compact
                      mode="contained"
                      contentStyle={{backgroundColor: Colors.white}}
                      style={{
                        backgroundColor: Colors.white,
                        width: 56,
                        height: 56,
                        borderRadius: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottomEndRadius: 0,
                        borderTopEndRadius: 0,
                      }}
                      onPress={handleSkipBackward}
                      disabled={isBackButtonDisabled}>
                      <MaterialCommunityIcons
                        style={{opacity: isBackButtonDisabled ? 0.5 : 1}}
                        color="#243F68"
                        name="skip-backward"
                        size={30}
                      />
                    </Button>
                    {/*// @ts-ignore*/}
                    <Button
                      compact
                      mode="contained"
                      contentStyle={{backgroundColor: Colors.white}}
                      style={{
                        backgroundColor: Colors.white,
                        width: 56,
                        height: 56,
                        borderRadius: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={handlePlay}
                      disabled={isPlayButtonDisabled}>
                      <MaterialIcons
                        style={{opacity: isPlayButtonDisabled ? 0.5 : 1}}
                        color="#243F68"
                        name="play-arrow"
                        size={30}
                      />
                    </Button>
                    {/*// @ts-ignore*/}
                    <Button
                      compact
                      mode="contained"
                      contentStyle={{backgroundColor: Colors.white}}
                      style={{
                        backgroundColor: Colors.white,
                        width: 56,
                        height: 56,
                        borderRadius: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottomStartRadius: 0,
                        borderTopStartRadius: 0,
                      }}
                      onPress={handlePause}
                      disabled={isPauseButtonDisabled}>
                      <MaterialIcons
                        color="#243F68"
                        style={{opacity: isPauseButtonDisabled ? 0.5 : 1}}
                        name="pause"
                        size={30}
                      />
                    </Button>
                  </View>
                  <View style={{height: 30}} />
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

export default PlayerOld;
