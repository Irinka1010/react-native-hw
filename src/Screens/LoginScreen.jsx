import React, { useState, useCallback, useEffect } from 'react';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  Platform,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ImageBackground,
  TextInput,
  Text,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

SplashScreen.preventAutoHideAsync();
const image = require('../assets/photo.png');
const initialState = {
  email: '',
  password: '',
};
const windowDimensions = Dimensions.get('window').width - 20 * 2;
const screenDimensions = Dimensions.get('screen');

export default function LoginScreen() {
  const [fontsLoaded] = useFonts({
    RobotoMedium: require('../assets/fonts/Roboto/Roboto-Medium.ttf'),
  });
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimensions, setDimensions] = useState(windowDimensions);
  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width - 16 * 2;
      console.log('width', width);
      setDimensions(width);
    };
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <View
              style={{ ...styles.form, marginBottom: isShowKeyboard ? 0 : 0 }}
            >
              <View style={{ width: dimensions }}>
                <View style={styles.header}>
                  <Text style={styles.headerTitle}>Войти</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    textAlign={'left'}
                    onFocus={() => setIsShowKeyboard(true)}
                    placeholder="Адрес электронной почты"
                    value={state.email}
                    onChangeText={value =>
                      setState(prevState => ({ ...prevState, email: value }))
                    }
                  />
                </View>
                <View style={{ marginTop: 16 }}>
                  <TextInput
                    style={styles.input}
                    textAlign={'left'}
                    secureTextEntry={true}
                    onFocus={() => setIsShowKeyboard(true)}
                    placeholder="Пароль"
                    value={state.password}
                    onChangeText={value =>
                      setState(prevState => ({ ...prevState, password: value }))
                    }
                  />
                </View>
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.8}
                  onPress={keyboardHide}
                >
                  <Text style={styles.btnTitle}>Войти</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.link} activeOpacity={0.6}>
                  <Text style={styles.linkTitle}>
                    Нет аккаунта? Зарегистрироваться
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',

    justifyContent: 'flex-end',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',

    borderRadius: 8,
    padding: 16,
    // height: 50,

    color: '#212121',
    fontSize: 16,
  },
  form: {
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: '#f0ffff',
    height: 489,
    alignItems: 'center',
  },
  formBox: {
    // marginHorizontal:16
  },

  btn: {
    backgroundColor: `#FF6C00`,

    padding: 16,
    borderRadius: 100,
    marginTop: 43,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitle: {
    color: '#f0ffff',
    fontSize: 16,
    fontWeight: '400',
  },
  header: {
    marginTop: 32,
    marginBottom: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 30,
    fontFamily: 'RobotoMedium',
    color: '#212121',
    fontWeight: '500',
  },
  link: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  linkTitle: {
    color: '#1B4371',
    fontSize: 16,
    fontWeight: '400',
  },
});
