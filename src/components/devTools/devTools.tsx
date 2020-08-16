import {FAB, Portal} from 'react-native-paper';
import {defaultTheme} from '../../theme/theme';
import React, {useMemo, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {RootDispatcher} from '../../state/rootDispatcher';
import {routes} from '../../enums/routes';

const DevTools = ()=> {
  const [devState,setDevState] = useState(false);

  const dispatch = useDispatch();
  const route = useRoute()
  const rootDispatcher = useMemo(()=>new RootDispatcher(dispatch),[]);
  const onStateChange = ({ open }:{open:boolean}) => setDevState(open);
  return (
    <Portal>
      {/*// @ts-ignore*/}
      {route.name !== routes.TaskScreen? <FAB.Group
        theme={defaultTheme}
        open={devState}
        icon={devState ? 'emoticon-devil' : 'dev-to'}
        actions={[
          {
            icon: 'trash-can',
            label: 'Clear Tasks',
            onPress: () => rootDispatcher.clearTasks(),
          },
        ]}
        onStateChange={onStateChange}
        onPress={() => {
        }}
      />:null}
    </Portal>
  )
}

export default DevTools;
