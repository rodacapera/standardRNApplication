/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
  pushConfigure,
  remoteMessageAction,
} from '@src/notifications/notificationsHook';
import messaging from '@react-native-firebase/messaging';

AppRegistry.registerComponent(appName, () => {
  pushConfigure();
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    remoteMessageAction(remoteMessage);
  });
  return App;
});
