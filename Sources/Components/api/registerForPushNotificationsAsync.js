import { Permissions, Notifications } from 'expo';
import { config } from '../../../config/config'
const uuid = require('uuid/v1');
import * as firebase from 'firebase';


export default (async function registerForPushNotificationsAsync() {
  // Android remote notification permissions are granted during the app
  // install, so this will only ask on iOS
  let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

  // Stop here if the user did not grant permissions
  if (status !== 'granted') {
    return;
  }
  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();

  let tokenId = token.replace(/[^a-zA-Z ]/g, "")

 firebase.database().ref(config.zooId + '/NotificationsClients/' + tokenId ).update({ token: token });
});