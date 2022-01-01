import { memoDeepEqual, showSuccessAlert } from 'common';
import { useModalNotification, useTimeout } from 'Hooks';
import React from 'react';
import { View, Text } from 'react-native';

function Home() {
  const [ModalComponent, onVisible, setContent] = useModalNotification({
    customTextTitle: 'Hello',
    onAccept: () => {
      showSuccessAlert('Modal', 'It Work!');
    },
  });
  useTimeout(() => {
    onVisible();
    setContent(<Text>Hello World !</Text>);

    showSuccessAlert('Hello', 'It Work!');
  }, 1000);
  return (
    <View>
      {ModalComponent()}
      <Text> Home </Text>
    </View>
  );
}

export default memoDeepEqual(Home);
