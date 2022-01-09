import React from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, StyleProp, ViewProps } from 'react-native';

import { Colors } from 'styles';
import { responsiveHeight, responsiveWidth } from 'common';
import MyText from 'components/MyText';

interface IPropsModalNotification {
  modalVisible: boolean;
  customStyleWrap?: StyleProp<ViewProps>;
  customTextTitle?: string;
  customTextContent?: string;
  customTextCancel?: string;
  customTextAccept?: string;
  isJustShowCancel?: boolean;

  onAccept?: () => void;
  onCancel?: () => void;
  setModalVisible: (isVisible?: boolean) => void;
}

function ModalNotification({
  modalVisible,
  customStyleWrap = {},
  customTextTitle = '',
  customTextContent = '',
  customTextCancel = 'Cancel',
  customTextAccept = 'Accept',
  isJustShowCancel = false,

  setModalVisible,
  onCancel,
  onAccept,
}: IPropsModalNotification) {
  const handleAccept = () => {
    setModalVisible(false);
    onAccept?.();
  };

  return (
    <Modal transparent visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.container2} />

        <View style={styles.modal}>
          <View style={[styles.wrap, customStyleWrap]}>
            <View style={styles.wrapText}>
              <MyText style={styles.textTitle}>{customTextTitle}</MyText>
              <MyText style={styles.textContent}>{customTextContent}</MyText>
            </View>
            <View style={styles.wrapperContent}>
              <TouchableOpacity
                onPress={() => {
                  onCancel?.();
                  setModalVisible(false);
                }}
                style={styles.buttonCancel}>
                <MyText
                  style={{
                    color: Colors.red100,
                  }}>
                  {customTextCancel}
                </MyText>
              </TouchableOpacity>
              {!isJustShowCancel && (
                <TouchableOpacity onPress={handleAccept} style={styles.buttonDelete}>
                  <MyText
                    style={{
                      color: Colors.primaryColor,
                    }}>
                    {customTextAccept}
                  </MyText>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center' },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  container2: {
    backgroundColor: Colors.black,
    opacity: 0.7,
    height: '100%',
    width: '100%',
  },
  wrapperContent: { flex: 1, flexDirection: 'row' },
  wrap: {
    width: responsiveWidth(280),
    borderRadius: 14,
    backgroundColor: Colors.white,
    paddingTop: responsiveHeight(9),
  },
  wrapText: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.elementSecondary,
    paddingBottom: responsiveHeight(8),
  },
  textTitle: {
    fontWeight: '600',
    color: Colors.textPrimary,
    textAlign: 'center',
    maxWidth: '95%',
    paddingBottom: responsiveHeight(8),
  },
  textContent: {
    color: Colors.black,
    textAlign: 'center',
    fontWeight: 'normal',
    maxWidth: '98%',
    paddingHorizontal: responsiveWidth(6),
  },
  buttonCancel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: Colors.elementPrimary2,
    paddingVertical: responsiveHeight(8),
  },
  buttonDelete: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: responsiveHeight(10),
  },
});

export default ModalNotification;
