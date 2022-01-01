import { Dimensions } from 'react-native';
import Toast from 'react-native-toast-message';
import deepEqual from 'deep-equal';
import { FunctionComponent, memo } from 'react';

const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 812;

const { width, height } = Dimensions.get('window');

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export function responsiveWidth(value = 0) {
  return (width * value) / DESIGN_WIDTH;
}

export function responsiveHeight(value = 0) {
  return (height * value) / DESIGN_HEIGHT;
}

export const SPACINGS = {
  tiny: responsiveHeight(10),
  small: responsiveHeight(15),
  default: responsiveHeight(20),
  large: responsiveHeight(25),
  xLarge: responsiveHeight(30),
  big: responsiveHeight(40),
};

export const randomString = (id: string) =>
  Math.random().toString(36).substring(3) + '-' + new Date().getTime().toString() + '-' + id;

export const showSuccessAlert = (title: string, content: string, onHide = () => {}) => {
  Toast.show({
    text1: title ?? 'Congratulation 👋',
    text2: content,
    topOffset: 40,
    onHide,
    visibilityTime: 2000,
  });
};

export const showErrorAlert = (content: string) => {
  Toast.show({
    type: 'error',
    text1: 'Oops',
    text2: content,
    topOffset: 40,
  });
};

export function cardNumberFormatter(oldValue: string, newValue: string) {
  if (oldValue.length > newValue.length) {
    return newValue;
  }

  return newValue
    .replace(/\W/gi, '')
    .replace(/(.{4})/g, '$1 ')
    .substring(0, 19);
}

export const memoDeepEqual = (component: FunctionComponent) =>
  memo(component, (prevProps, nextProps) => deepEqual(prevProps, nextProps));

export function isEmail(email: string) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function shuffle<T>(array: T[]) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}
