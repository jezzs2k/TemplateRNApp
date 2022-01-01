import React, { useState } from 'react';
import ModalNotification from 'components/ModalNotification';
import useToggle from '../useToggle';

export interface TypeModalNotification {
  customTextTitle?: string;
  customTextAccept?: string;
  customTextCancel?: string;
  customTextContent?: string;
  isJustShowCancel?: boolean;

  onAccept: () => void;
  onCancel?: () => void;
}

export default function useModalNotification({
  customTextTitle,
  customTextAccept,
  customTextCancel,
  customTextContent,
  isJustShowCancel,

  onAccept,
  onCancel,
}: TypeModalNotification): [
  ModalComponent: () => JSX.Element,
  onSetModalVisible: any,
  setContent: any,
  value: boolean,
] {
  const [value, toggleValue] = useToggle(false);
  const [content, setContent] = useState('');

  const onSetModalVisible = (isModalVisible?: boolean) => {
    const isBool = typeof isModalVisible === 'boolean' ? isModalVisible : !value;

    toggleValue(isBool);
  };

  const ModalComponent = () => (
    <ModalNotification
      modalVisible={value}
      setModalVisible={onSetModalVisible}
      customTextTitle={customTextTitle}
      customTextAccept={customTextAccept}
      customTextCancel={customTextCancel}
      customTextContent={content || customTextContent}
      onAccept={onAccept}
      onCancel={onCancel}
      isJustShowCancel={!!isJustShowCancel}
    />
  );

  return [ModalComponent, onSetModalVisible, setContent, value];
}
