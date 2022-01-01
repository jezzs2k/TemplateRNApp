import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextProps } from 'react-native';

interface TMyTextProps extends TextProps {
  children?: any;
}

function MyText(props: TMyTextProps) {
  const { t } = useTranslation();
  const children = props.children;

  return <Text {...props}>{t(children || '')}</Text>;
}

export default MyText;
