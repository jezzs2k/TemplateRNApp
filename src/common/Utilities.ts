import { Platform } from 'react-native';

export function getDeviceType() {
  return Platform.OS;
}

export const isIOS = Platform.OS === 'ios';
