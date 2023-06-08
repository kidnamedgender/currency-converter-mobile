import React from 'react';
import {Animated, StyleSheet} from 'react-native';

import style from './style.module.scss';
import {
  FADE_IN_IMAGE,
  FADE_OUT,
  HIDDEN,
  LOADING_IMAGE,
  WAIT_FOR_APP_TO_BE_READY,
} from '../../const/splash';

export const WithSplashScreen = ({children, isAppReady}) => {
  return (
    <>
      {isAppReady && children}

      <Splash isAppReady={isAppReady} />
    </>
  );
};

const Splash = ({isAppReady}) => {
  const containerOpacity = React.useRef(new Animated.Value(1)).current;
  const imageOpacity = React.useRef(new Animated.Value(0)).current;

  const [state, setState] = React.useState(LOADING_IMAGE);

  // todo разобраться
  React.useEffect(() => {
    if (state === FADE_IN_IMAGE) {
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 600, // Fade in duration
        useNativeDriver: true,
      }).start(() => {
        setState(WAIT_FOR_APP_TO_BE_READY);
      });
    }
  }, [imageOpacity, state]);

  React.useEffect(() => {
    if (state === WAIT_FOR_APP_TO_BE_READY) {
      if (isAppReady) {
        setState(FADE_OUT);
      }
    }
  }, [isAppReady, state]);

  React.useEffect(() => {
    if (state === FADE_OUT) {
      Animated.timing(containerOpacity, {
        toValue: 0,
        duration: 600, // Fade out duration
        delay: 400, // Minimum time the logo will stay visible
        useNativeDriver: true,
      }).start(() => {
        setState(HIDDEN);
      });
    }
  }, [containerOpacity, state]);

  if (state === HIDDEN) {
    return null;
  }

  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <Animated.View
      collapsable={false}
      style={[styles.container, {opacity: containerOpacity}]}>
      <Animated.Image
        source={require('../../assets/splash_images/android/drawable-hdpi/splash-image.png')}
        fadeDuration={0}
        onLoad={() => {
          setState(FADE_IN_IMAGE);
        }}
        style={{...style.splash_image, opacity: imageOpacity}}
        resizeMode="contain"
      />
    </Animated.View>
  );
};
