import React, { useState, useEffect } from 'react';

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
  Image,
} from 'react-native';

const image = require('../../assets/photo.png');
const imgeAdd = require('../../assets/add.png');
const initialState = {
  login: '',
  email: '',
  password: '',
};
const windowDimensions = Dimensions.get('window').width - 16 * 2;
const screenDimensions = Dimensions.get('window').height;

export default function RegistrationScreen({ navigation }) {
  const [dimensions, setDimensions] = useState(windowDimensions);
  const [dimensionsHeigth, setDimensionsHeigth] = useState(screenDimensions);

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [state, setState] = useState(initialState);
  const [showPassword, setShowPassword] = useState(true);
  const [emailFocus, setEmailFocus] = useState(false);
  const [loginFocus, setLoginFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width - 16 * 2;
      const height = Dimensions.get('window').height;

      setDimensions(width);
      setDimensionsHeigth(height);
    };
    const subscription = Dimensions.addEventListener('change', onChange);
    return () => subscription.remove();
  });

  const focusInputStyle = focus => {
    return focus ? { ...styles.input, ...styles.inputFocus } : styles.input;
  };
  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  };
  const onSubmit = () => {
    setState(initialState);
    setShowPassword(true);
    console.log(state);
  };

  const passwordShown = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{
          ...styles.image,
          height: dimensionsHeigth,
          width: Dimensions.get('window').width,
        }}
      >
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <View
              style={{ ...styles.form, marginTop: isShowKeyboard ? 0 : 145 }}
            >
              <View style={styles.photoBlock}>
                <View style={styles.photo}></View>
                <TouchableOpacity style={styles.buttonAdd}>
                  <Image source={imgeAdd} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: dimensions,
                }}
              >
                <View style={styles.header}>
                  <Text style={styles.headerTitle}>Регистрация</Text>
                </View>
                <View>
                  <TextInput
                    style={focusInputStyle(loginFocus)}
                    textAlign={'left'}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                      setLoginFocus(true);
                    }}
                    onBlur={() => setLoginFocus(false)}
                    placeholder="Логин"
                    value={state.login}
                    onChangeText={value =>
                      setState(prevState => ({ ...prevState, login: value }))
                    }
                  />
                </View>
                <View style={{ marginTop: 16 }}>
                  <TextInput
                    style={focusInputStyle(emailFocus)}
                    textAlign={'left'}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                      setEmailFocus(true);
                    }}
                    onBlur={() => setEmailFocus(false)}
                    placeholder="Адрес электронной почты"
                    value={state.email}
                    onChangeText={value =>
                      setState(prevState => ({ ...prevState, email: value }))
                    }
                  />
                </View>
                <View style={{ marginTop: 16 }}>
                  <TextInput
                    style={focusInputStyle(passwordFocus)}
                    textAlign={'left'}
                    secureTextEntry={showPassword}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                      setPasswordFocus(true);
                    }}
                    onBlur={() => setPasswordFocus(false)}
                    placeholder="Пароль"
                    maxLength={16}
                    value={state.password}
                    onChangeText={value =>
                      setState(prevState => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.passwordShowBtn}
                    onPress={passwordShown}
                  >
                    <Text style={styles.registerLinkTitle}>
                      {showPassword ? 'Показать' : 'Cкрыть'}
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.8}
                  onPress={onSubmit}
                >
                  <Text
                    style={styles.btnTitle}
                    onPress={() => navigation.navigate('Login')}
                  >
                    Зарегистрироваться
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.link}
                  activeOpacity={0.6}
                  onPress={() => navigation.navigate('Login')}
                >
                  <Text style={styles.linkTitle}>Уже есть аккаунт? Войти</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,

    justifyContent: 'flex-end',
  },
  form: {
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: '#f0ffff',
    alignItems: 'center',
  },
  photoBlock: {
    height: 120,
    width: 120,
    marginHorizontal: 127,
    borderRadius: 16,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    top: -60,
  },
  buttonAdd: {
    width: 25,
    height: 25,
    top: -30,
    left: 55,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#f6f6f6',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    padding: 16,
    height: 50,
    fontStyle: '400',
    color: '#212121',
    fontSize: 16,
  },
  inputFocus: { backgroundColor: '#fff', borderColor: '#FF6C00' },
  passwordShowBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  registerLinkTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#1B4371',
    alignItems: 'center',
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
    marginBottom: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 30,

    color: '#212121',
    fontFamily: 'Roboto-Medium',
  },
  link: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 45,
  },
  linkTitle: {
    color: '#1B4371',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
});
