import React from 'react';
import { View } from 'react-native';

import MyText from 'components/MyText';
import ScripePayment from 'components/Payment';

const ScreenA = () => (
  <View>
    <ScripePayment />

    <MyText> ScreenA </MyText>
  </View>
);

export default ScreenA;
