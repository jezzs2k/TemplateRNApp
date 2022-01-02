import React from 'react';
import { Modal, View } from 'react-native';
import Config from 'react-native-config';

import { memoDeepEqual, showSuccessAlert } from 'common';
import MyText from 'components/MyText';
import { useModalNotification, useTimeout } from 'Hooks';
// import ScripePayment from 'components/Payment';

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
      {/* <Modal visible={true}>
        <ScripePayment />
      </Modal> */}
      <MyText> Home </MyText>
    </View>
  );
}

export default memoDeepEqual(Home);
