/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

LogBox.ignoreLogs(['Warning: ...']);
// Ignore all log notifications
LogBox.ignoreAllLogs();

function removeConsole() {}
if (!__DEV__) {
 console.log = removeConsole;
 console.warn = removeConsole;
 console.error = removeConsole;
}

AppRegistry.registerComponent(appName, () => App);
