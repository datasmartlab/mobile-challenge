import React, { useRef, useEffect } from 'react';
import { Animated, View, Image, StyleSheet, StatusBar } from 'react-native';
import type { PropsWithChildren } from 'react';
import type { ViewStyle } from 'react-native';
import { Container, ImageIcon } from './style'; // Certifique-se de importar os estilos adequados

type RotateImageProps = PropsWithChildren<{
  style: ViewStyle;
  source: any;
}>;

const RotateImage: React.FC<RotateImageProps> = (props) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [rotateAnim]);

  const rotateStyle = {
    transform: [
      {
        rotateY: rotateAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

  return (
    <Animated.View style={{ ...props.style, ...rotateStyle }}>
      <Image source={props.source} style={styles.image} resizeMode="contain" />
    </Animated.View>
  );
};

export const LoadingIcon = () => {
  const imageUrl = require('@/assets/images/icon.png');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <RotateImage
        style={{
          width: 200,
          height: 200,
        }}
        source={imageUrl}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    tintColor: 'white', // Adiciona a cor branca ao ícone
  },
});

