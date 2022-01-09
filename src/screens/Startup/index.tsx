import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

import images from 'constants/images';
import { Navigator } from 'constants/Navigator';
import MyText from 'components/MyText';

interface IStartupProps {
  navigation: any;
}

function Startup({ navigation }: IStartupProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(Navigator.HomeStack);
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <ImageBackground source={images.bgSplash} resizeMode="cover" style={styles.imgContainer}>
      <View style={styles.content}>
        <Image source={images.stampapaese} resizeMode="cover" />
        <MyText style={styles.textStyle}>et</MyText>
        <Image source={images.stampa} resizeMode="cover" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    height: 240,
    justifyContent: 'center',
    width: 240,
  },
  imgContainer: { alignItems: 'center', flex: 1, justifyContent: 'center' },
  textStyle: { marginVertical: 18 },
});

export default Startup;
