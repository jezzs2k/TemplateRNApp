import React from 'react';
import { View } from 'react-native';
import Config from 'react-native-config';

import { memoDeepEqual, showSuccessAlert } from 'common';
import MyText from 'components/MyText';
import { useModalNotification, useTimeout } from 'Hooks';

function Home() {
  const [ModalComponent, onVisible, setContent] = useModalNotification({
    customTextTitle: 'Hello',
    onAccept: () => {
      showSuccessAlert('Modal', 'It Work!');
    },
  });
  useTimeout(() => {
    onVisible();
    setContent(<MyText>Hello World !</MyText>);

    showSuccessAlert('Hello', 'It Work!');
  }, 1000);

  console.log('Config', Config.ENV);

  return (
    <View>
      {ModalComponent()}
      <MyText> Home </MyText>
    </View>
  );
}

export default memoDeepEqual(Home);
